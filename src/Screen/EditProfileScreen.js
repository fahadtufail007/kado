import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import calander from '../Assets/Image/calander.png';
import uset from '../Assets/Image/user.png';
import editButton from '../Assets/Image/editbtn.png';
import {BackHeader, Header, Input} from '../Components';
import {
  buttonColor,
  lightBlackColor,
  themeColor,
  white,
} from '../Utils/Theme/Color';

const EditProfileScreen = ({goBack, navigate}) => {
  return (
    <View style={styles.container}>
      <BackHeader goBack={goBack} />
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <TouchableOpacity>
              <Image resizeMode="cover" style={styles.image} source={uset} />
              <TouchableOpacity style={styles.editBtnContainer}>
                <Image source={editButton} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 50}}>
            <Input
              secureTextEntry={false}
              iconShow={false}
              placeholder="Full Name"
            />
          </View>

          <View style={styles.inputCOntainer}>
            <Input
              secureTextEntry={false}
              iconShow={true}
              placeholder="Location"
              iconName="map-marker-alt"
            />
          </View>
          <View style={styles.inputCOntainer}>
            <Input
              secureTextEntry={false}
              keyboardType="numeric"
              iconShow={false}
              placeholder="Phone"
            />
          </View>
          <View style={styles.inputCOntainer}>
            <Input
              secureTextEntry={false}
              iconShow={true}
              iconName="chevron-down"
              placeholder="Gender"
            />
          </View>

          <View style={styles.inputCOntainer}>
            <Input
              secureTextEntry={false}
              iconShow={true}
              iconName="calendar-week"
              placeholder="Date of birth"
              image={true}
              fromImage={calander}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigate('AboutUs')}
            style={styles.registerBtnContainer}>
            <Text style={styles.registerText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bodyContainer: {
    // flex: 1,
    padding: '1@s',
    paddingBottom: '20@s',
    justifyContent: 'space-between',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50@s',
    marginBottom: '100@s',
  },
  text: {
    fontSize: '17@s',
    lineHeight: '20@s',
    color: themeColor,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: '10@s',
  },
  body: {
    padding: '10@s',
    paddingLeft: '15@s',
    paddingRight: '15@s',
    justifyContent: 'center',
  },
  registerBtnContainer: {
    padding: '10@s',
    backgroundColor: buttonColor,
    marginTop: '30@s',
    borderRadius: '5@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: white,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: buttonColor,
    fontSize: '14@s',
    lineHeight: '18@s',
    marginLeft: '5@s',
  },
  alreadyText: {
    color: lightBlackColor,
    fontSize: '14@s',
    lineHeight: '18@s',
  },
  forgotPasswordContainer: {
    marginTop: '10@s',
    alignItems: 'flex-end',
  },

  forgotPasswordText: {
    color: buttonColor,
    fontSize: '12@s',
    lineHeight: '14@s',
    fontWeight: 'bold',
  },

  image: {
    height: '128@s',
    width: '128@s',
    borderRadius: 35,
    resizeMode: 'cover',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20@s',
  },
  editBtnContainer: {
    position: 'absolute',
    bottom: 0,
    right: '-7@s',
  },
  inputCOntainer: {
    marginTop: '5@s',
  },
});

export default EditProfileScreen;
