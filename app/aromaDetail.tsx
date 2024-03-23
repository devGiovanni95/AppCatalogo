import React, { useState, useEffect } from 'react';
import { ScrollView, View } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentItem from '../components/ScentDetail';

export default function AromaDetail() {
  const { scentId, setScentId } = useScent();

  const [aroma, setAroma] = useState<{ id: number; titulo: string; photo: string; description: string; } | null>(null);

  useEffect(() => {
    const fetchAroma = async () => {
        const aromas = [
            { id: 0, titulo: "Cítricos", photo: "image1.png", description: "descrição do aroma 1" },
            { id: 1, titulo: "Adocicados", photo: "image2.png", description: "descrição do aroma 2" },
            { id: 2, titulo: "Frutados", photo: "image3.png", description: "descrição do aroma 3" },
            { id: 3, titulo: "Amadeirados", photo: "image3.png", description: "descrição do aroma 3" },
        ];
      const selectedAroma = aromas.find(item => item.id === scentId.id);
      setAroma(selectedAroma?.id ? selectedAroma : null);
    };

    fetchAroma();
  }, [scentId]);

  if (!aroma) return null;

  return (
    <ScrollView>
      <TitleComponent title={'Aromas'} />
      <View style={{ alignItems: 'center' }}>
        <ScentItem
          key={aroma?.id}
          id={aroma?.id}
          name={aroma?.titulo}
          photo={aroma?.photo}
          description={aroma?.description}
        />
      </View>
    </ScrollView>
  );
}
function useScent(): { scentId: any; setScentId: any; } {
    throw new Error('Function not implemented.');
}

