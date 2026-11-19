import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const C = { background: '#F6F1E8', burgundy: '#6D2638', muted: '#81756D', gold: '#B8955A' };
const roleNames: Record<string, string> = { singer: 'Cantante', company: 'Compañía', casting: 'Profesional de casting' };

export default function SignUpScreen() {
  const { role } = useLocalSearchParams<{ role?: string }>();
  const roleName = roleNames[role ?? ''] ?? 'Profesional';

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <Pressable onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>←  Volver</Text></Pressable>
        <View style={styles.content}>
          <Text style={styles.eyebrow}>TU HISTORIA EN OPERAConnect</Text>
          <Text style={styles.title}>Empecemos por{ '\n' }tu cuenta.</Text>
          <Text style={styles.subtitle}>Estás creando un perfil de <Text style={styles.role}>{roleName}</Text>.</Text>
          <View style={styles.rule} />
          <Text style={styles.message}>En el siguiente paso vamos a construir tu registro profesional, con los datos adecuados para tu actividad dentro del mundo de la ópera.</Text>
          <View style={styles.rolePill}><Text style={styles.rolePillText}>{roleName.toUpperCase()}</Text></View>
        </View>
        <Pressable onPress={() => router.back()} style={styles.button}><Text style={styles.buttonText}>Volver a elegir perfil</Text></Pressable>
        <Text style={styles.note}>Registro y creación de cuenta: próxima etapa de desarrollo.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.background },
  page: { flex: 1, paddingHorizontal: 27, paddingTop: 12, paddingBottom: 24 },
  back: { alignSelf: 'flex-start', paddingVertical: 9 },
  backText: { color: C.muted, fontSize: 13 },
  content: { flex: 1, justifyContent: 'center' },
  eyebrow: { color: C.gold, fontSize: 9, fontWeight: '700', letterSpacing: 2, marginBottom: 15 },
  title: { color: C.burgundy, fontFamily: 'Georgia', fontSize: 38, lineHeight: 45 },
  subtitle: { color: C.muted, fontSize: 14, lineHeight: 22, marginTop: 17 },
  role: { color: C.burgundy, fontWeight: '700' },
  rule: { width: 48, height: 1, backgroundColor: C.gold, marginVertical: 25 },
  message: { color: C.muted, fontSize: 14, lineHeight: 24, maxWidth: 310 },
  rolePill: { alignSelf: 'flex-start', borderWidth: 1, borderColor: '#D8C9B5', paddingHorizontal: 13, paddingVertical: 9, marginTop: 25 },
  rolePillText: { color: C.burgundy, fontSize: 9, letterSpacing: 1.5, fontWeight: '700' },
  button: { minHeight: 54, borderRadius: 5, borderWidth: 1, borderColor: C.burgundy, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: C.burgundy, fontSize: 13, fontWeight: '700' },
  note: { color: '#A69A8D', fontSize: 10, textAlign: 'center', marginTop: 12 },
});
