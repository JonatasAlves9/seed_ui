import React, { useRef, useState } from 'react';
import {
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
  Image,
  UIManager,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageSourcePropType,
  TextInput,
  TextInputProps,
} from 'react-native';
import { Input, Button, Icon, InputProps } from '@rneui/themed';
import { LinearGradient } from '../../components/LinearGradient';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

type LoginScreenProps = {};

const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validPassword, setPasswordValid] = useState<boolean>(true);
  const [validUsername, setUsernameValid] = useState<boolean>(true);
  useState<boolean>(true);
  let passwordInput = useRef<InputProps>(null);
  let usernameInput = useRef<InputProps>(null);

  const signup = () => {
    LayoutAnimation.easeInEaseOut();
    const usernameValid = validateUsername();
    const passwordValid = validatePassword();
    if (passwordValid && usernameValid) {
      setLoading(true);
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        setLoading(false);
        Alert.alert('🎸', 'You rock');
      }, 1500);
    }
  };

  const validateUsername = () => {
    const usernameCheck = username.length > 0;
    LayoutAnimation.easeInEaseOut();
    setUsernameValid(usernameCheck);
    usernameCheck || usernameInput.shake();
    return usernameCheck;
  };

  const validatePassword = () => {
    const passwordCheck = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    setPasswordValid(passwordCheck);
    passwordCheck || passwordInput.shake();
    return passwordCheck;
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <Text style={styles.signUpText}>Login</Text>
      <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <FormInput
          refInput={(input) => (usernameInput = input)}
          icon="user"
          value={username}
          onChangeText={(text: string) => setUsername(text)}
          placeholder="Usuário"
          returnKeyType="next"
          errorMessage={validUsername ? '' : 'Digite um usuário válido'}
          onSubmitEditing={() => {
            validateUsername();
            emailInput.focus();
          }}
        />
        <FormInput
          refInput={(input) => (passwordInput = input)}
          icon="lock"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          placeholder="Senha"
          secureTextEntry
          returnKeyType="next"
          errorMessage={validPassword ? '' : 'Senha incorreta'}
          onSubmitEditing={() => {
            validatePassword();
          }}
        />
      </View>
      <Button
        loading={isLoading}
        title="Entrar"
        containerStyle={{ flex: -1, marginLeft: 'auto', marginRight: 'auto' }}
        buttonStyle={styles.signUpButton}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        ViewComponent={LinearGradient}
        titleStyle={styles.signUpButtonText}
        onPress={() => {
          signup();
        }}
        disabled={isLoading}
      />
      <View style={styles.loginHereContainer}>
        <Text style={styles.alreadyAccountText}>Ainda não tem uma conta?</Text>
        <Button
          title="Cadastre-se"
          titleStyle={styles.loginHereText}
          containerStyle={{ flex: -1 }}
          buttonStyle={{ backgroundColor: 'transparent' }}
          onPress={() => Alert.alert('🔥', 'You can login here')}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

type UserTypeItemType = {
  image: ImageSourcePropType;
  label?: string;
  labelColor?: string;
  selected?: boolean;
  onPress?: () => void;
};

export const UserTypeItem = (props: UserTypeItemType) => {
  const { image, label, labelColor, selected, ...attributes } = props;
  return (
    <TouchableOpacity {...attributes}>
      <View
        style={[
          styles.userTypeItemContainer,
          selected && styles.userTypeItemContainerSelected,
        ]}
      >
        <Text style={[styles.userTypeLabel, { color: labelColor }]}>
          {label}
        </Text>
        <Image
          source={image}
          style={[
            styles.userTypeMugshot,
            selected && styles.userTypeMugshotSelected,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

type FormInputType = TextInputProps & {
  icon: string;
  refInput: React.Ref<TextInput>;
  errorMessage: string;
};

export const FormInput = (props: FormInputType) => {
  const { icon, refInput, ...otherProps } = props;

  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        <Icon name={icon} type={'simple-line-icon'} color="#7384B4" size={18} />
      }
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#293046',
    width: '100%',
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  signUpText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'UbuntuLight',
    textAlign: 'center',
    marginTop: 30,
  },
  whoAreYouText: {
    color: '#7384B4',
    fontFamily: 'UbuntuBold',
    fontSize: 14,
    textAlign: 'center',
  },
  userTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  userTypeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
  userTypeLabel: {
    color: 'yellow',
    fontFamily: 'UbuntuBold',
    fontSize: 11,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontFamily: 'UbuntuLight',
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336',
  },
  signUpButtonText: {
    fontFamily: 'UbuntuBold',
    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: Math.round(45 / 2),
    height: 45,
  },
  loginHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alreadyAccountText: {
    fontFamily: 'UbuntuLightItalic',
    fontSize: 12,
    color: 'white',
  },
  loginHereText: {
    color: '#FF9800',
    fontFamily: 'UbuntuLightItalic',
    fontSize: 12,
  },
});
