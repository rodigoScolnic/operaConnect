import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const C = { background: '#F6F1E8', burgundy: '#6D2638', ink: '#2D2526', muted: '#81756D', gold: '#B8955A', line: '#E4D9CA', white: '#FFFCF7' };

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <Pressable onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>←  Volver</Text></Pressable>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>QUÉ BUENO TENERTE DE VUELTA</Text>
          <Text style={styles.title}>Iniciá sesión.</Text>
          <Text style={styles.subtitle}>Tu próximo encuentro artístico puede estar más cerca de lo que imaginás.</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
          <TextInput style={styles.input} placeholder="tu@email.com" placeholderTextColor="#A99D91" keyboardType="email-address" autoCapitalize="none" />
          <Text style={styles.label}>CONTRASEÑA</Text>
          <TextInput style={styles.input} placeholder="Tu contraseña" placeholderTextColor="#A99D91" secureTextEntry />
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Ingresar</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>
          <Text style={styles.helper}>La autenticación estará disponible en una próxima etapa.</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>¿Todavía no tenés cuenta?</Text>
          <Pressable onPress={() => router.push('/role-selection')}><Text style={styles.link}>Crear una cuenta</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.background },
  page: { flex: 1, paddingHorizontal: 27, paddingTop: 12, paddingBottom: 22 },
  back: { alignSelf: 'flex-start', paddingVertical: 9 },
  backText: { color: C.muted, fontSize: 13 },
  heading: { marginTop: 54, marginBottom: 38 },
  eyebrow: { color: C.gold, fontSize: 9, fontWeight: '700', letterSpacing: 2, marginBottom: 13 },
  title: { color: C.burgundy, fontFamily: 'Georgia', fontSize: 38 },
  subtitle: { color: C.muted, fontSize: 13, lineHeight: 21, marginTop: 13, maxWidth: 310 },
  form: { gap: 10 },
  label: { color: C.muted, fontSize: 9, fontWeight: '700', letterSpacing: 1.5, marginTop: 9 },
  input: { minHeight: 52, backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 4, paddingHorizontal: 14, color: C.ink, fontSize: 14 },
  button: { backgroundColor: C.burgundy, minHeight: 56, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 18 },
  buttonText: { color: '#FFFDF9', fontSize: 14, fontWeight: '700' },
  arrow: { color: '#FFFDF9', fontSize: 20, position: 'absolute', right: 20 },
  helper: { color: '#A69A8D', fontSize: 10, lineHeight: 16, textAlign: 'center', marginTop: 4 },
  bottom: { marginTop: 'auto', alignItems: 'center', gap: 7 },
  bottomText: { color: C.muted, fontSize: 12 },
  link: { color: C.burgundy, fontWeight: '700', fontSize: 12 },
});
