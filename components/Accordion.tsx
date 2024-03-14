import { Accordion, AccordionTrigger, AccordionItem, AccordionHeader,
  AccordionTitleText, AccordionIcon, AccordionContentText, AccordionContent,
  AddIcon, RemoveIcon } from '@gluestack-ui/themed';
  import { StyleSheet, View } from "react-native"
  
  interface StyledButtonProps {
      title1: string,
      text1: string,
      title2: string,
      text2: string,
      title3: string,
      text3: string,
      title4: string,
      text4: string,
      title5: string,
      text5: string,
      title6: string,
      text6: string
  }
  export default ({title1,title2,title3,title4,title5,title6, text1,text2,text3,text4,text5,text6}:StyledButtonProps) => (
  <Accordion m="$5" width="90%" size="sm" variant="unfilled" type="single" isCollapsible={true} isDisabled={false} >
  <AccordionItem value="a">
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
              <View style={styles.title}>
                <AccordionTitleText style={styles.color}>
                  {title1}
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} ml="$3" style={styles.color}/>
                ) : (
                  <AccordionIcon as={AddIcon} ml="$3" style={styles.color}/>
                )}
              </View>
          );
        }}
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText style={styles.color}>
        {text1}
      </AccordionContentText>
    </AccordionContent>
  </AccordionItem>
   <AccordionItem value="b">
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
            <View style={styles.title}>
                <AccordionTitleText style={styles.color}>
                  {title2}
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} ml="$3" style={styles.color}/>
                ) : (
                  <AccordionIcon as={AddIcon} ml="$3" style={styles.color}/>
                )}
              </View>
          );
        }}
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText style={styles.color}>
        {text2}
      </AccordionContentText>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="c">
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
            <View style={styles.title}>
                <AccordionTitleText style={styles.color}>
                  {title3}
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} ml="$3" style={styles.color}/>
                ) : (
                  <AccordionIcon as={AddIcon} ml="$3" style={styles.color}/>
                )}
              </View>
          );
        }}
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText style={styles.color}>
        {text3}
      </AccordionContentText>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="d">
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
            <View style={styles.title}>
                <AccordionTitleText style={styles.color}>
                  {title4}
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} ml="$3" style={styles.color}/>
                ) : (
                  <AccordionIcon as={AddIcon} ml="$3" style={styles.color}/>
                )}
              </View>
          );
        }}
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText style={styles.color}>
        {text4}
      </AccordionContentText>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="e">
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
            <View style={styles.title}>
                <AccordionTitleText style={styles.color}>
                  {title5}
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} ml="$3" style={styles.color}/>
                ) : (
                  <AccordionIcon as={AddIcon} ml="$3" style={styles.color}/>
                )}
              </View>
          );
        }}
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText style={styles.color}>
        {text5}
      </AccordionContentText>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="f">
    <AccordionHeader>
      <AccordionTrigger>
        {({ isExpanded }) => {
          return (
            <View style={styles.title}>
                <AccordionTitleText style={styles.color}>
                  {title6}
                </AccordionTitleText>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} ml="$3" style={styles.color}/>
                ) : (
                  <AccordionIcon as={AddIcon} ml="$3" style={styles.color}/>
                )}
              </View>
          );
        }}
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <AccordionContentText style={styles.color}>
        {text6}
      </AccordionContentText>
    </AccordionContent>
  </AccordionItem>
  </Accordion>
      )
  
  const styles = StyleSheet.create({
    title: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#7a5656',
      paddingBottom: 5,
    },
    color: {
      color: '#7a5656',
      textAlign: 'justify',
    },
  })