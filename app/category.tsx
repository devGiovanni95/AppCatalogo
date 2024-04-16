import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import { router } from 'expo-router';
import { useCategory } from '../hooks/categoryDetails';
import CategoryComponent from '../components/CategoryComponent';

export default function Category() {

    const category = useCategory()

    interface ICategoryItem {
        id: number,
        name: string,
        description: string,
        photo: string,
        created_at: string,
        updated_at: string
    }

    const [list, setList] = useState<ICategoryItem[]>([])

    useEffect(() => {
        fetch('https://api-catalogo-pi.onrender.com/category')
            .then(response => response.json())
            .then(json => setList(json))
    })


    return (
        <ScrollView>
            <TitleComponent title={'Categorias'}></TitleComponent>
            <View style={{ alignItems: "center" }}>
                {list.map((item, index) => {
                    return (
                        <CategoryComponent
                            key={index}
                            id={item.id}
                            name={item.name}
                            photo={item.photo}
                            description={item.description}
                            onPress={() => {
                                category.setCategoryId({ id: item.id });
                                router.push('/productCategory');
                            }}
                        />
                    );
                })}
            </View>
        </ScrollView>
    );
}