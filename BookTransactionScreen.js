import React from 'react';
import { Text, View , TextInput ,StyleSheet ,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Welcomescreen extends React.Component {
    render() {
      return (

        <View style={{ flex: 1, marginTop : 20 ,   }}>
                  <AppHeader />

          <Text>Hey Buddy! It's time to put on your creative cap because you're about to write a story which will be read by millions of viweres who will be using this application.There is no certain word-limit that you must keep in mind. Your story could be fictional , educational , non-fictional ,sci-fi , action , adventure , comedy , thriller , mystery and fantasy. Keep in mind your story should be purely positive and should not have any kind of bad moral or negative words. Your story could or could not be authentic. If you still have some queries of how to write a story go on the LEARN screen. All the best budding author ! And don't forget to have fun :)</Text>
          <TextInput
          placeholder="Give your story a suitable title here ..."
          style={styles.inputBox}
                           
        />

  <TextInput
          placeholder="Type your name if the story is authentic or type in the name of the author .."
          style={styles.inputBox2}
                           
        />

<TextInput
          placeholder="In this section write the beginning of your story. (This is where you introduce the characters and set up the story)"
          style={styles.inputBox3}
        />

<TextInput
          placeholder="This is where you will write the body of your story.(Here you start buliding up the story and reach the climax !)"
          style={styles.inputBox3}
                           
        />

<TextInput
          placeholder="This is where your story comes to a 'Happy Ending'. (The ending could be unexpected , happy & positive or open-ended. Suprise your readers !)"
          style={styles.inputBox3}
                           
        />


<TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('SearchScreen')}>
              <Text>ALL DONE 👍🏼</Text>
            </TouchableOpacity>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    buttonsContainer: {
      alignSelf: 'center',
      marginTop: 50,
    },
   
      inputBox: {
      marginTop: 50,
      width: 500,
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 3,
      borderColor: 'rgb(0,0,0)',
      outline: 'none',
    },

    inputBox2: {
      marginTop: 30,
      width: 550,
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 3,
      borderColor: 'rgb(0,0,0)',
      outline: 'none',
    },

    inputBox3: {
      marginTop: 30,
      width: 1000,
      alignSelf: 'center',
      height: 100,
      textAlign: 'center',
      borderWidth: 3,
      borderColor: 'rgb(0,0,0)',
      outline: 'none',
      multiline: "true" ,                 

    },

    inputBox4: {
      marginTop: 30,
      width: 1000,
      alignSelf: 'center',
      height: 100,
      textAlign: 'center',
      borderWidth: 3,
      borderColor: 'rgb(0,0,0)',
      outline: 'none',
    },
    
    inputBox5: {
      marginTop: 30,
      width: 1000,
      alignSelf: 'center',
      height: 100,
      textAlign: 'center',
      borderWidth: 3,
      borderColor: 'rgb(0,0,0)',
      outline: 'none',
    },

    buttons: {
      alignSelf : 'center' , 
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      margin: 10,
      width: 200,
      height: 50,
      textColor : 'white' ,
      borderColor: 'black',
      backgroundColor: 'rgb(250, 209, 221)',
    },
  
  });
  