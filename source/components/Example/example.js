const SettingDetails = ({route}) => {
  const {selection} = route.params;
  const placeHolder = [
    'Шинэ имэйл оруулна уу.',
    'Шинэ утасны дугаар оруулна уу.',
    'Шинэ нууц үгийг оруулна уу.',
  ];
  let placeHolder1;

  useEffect(() => {
    if (selection === 'email') placeHolder1 = placeHolder[0];
    else if (selection === 'phoneNumber') console.log(selection);
  }, []);

  const isEmail = (value) => value == 'email';

  return (
    <SafeAreaView style={styles.container}>
      <Text>{isEmail(selection)}</Text>
      <MyInput placeholder="placeHolder1" />8
      <MyInput placeholder="Нууц үг" />
      <MyButton title="Солих" />
    </SafeAreaView>
  );
};
