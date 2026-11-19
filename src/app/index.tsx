import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const C = {
  background: '#F6F1E8',
  burgundy: '#6D2638',
  ink: '#2D2526',
  muted: '#81756D',
  gold: '#B8955A',
  line: '#E4D9CA',
};

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" backgroundColor={C.background} />
      <View style={styles.page}>
        <View style={styles.topline}>
          <View style={styles.brandMark}><Text style={styles.brandMarkText}>O</Text></View>
          <Text style={styles.brandName}>OPERACONNECT</Text>
        </View>

        <View style={styles.hero}>
          <View style={styles.artwork}>
            <View style={styles.outerRing} />
            <View style={styles.innerRing} />
            <View style={styles.artworkCenter}>
              <Text style={styles.artworkO}>O</Text>
              <View style={styles.artworkLine} />
              <Text style={styles.artworkCaption}>THE ART OF CONNECTION</Text>
            </View>
            <View style={styles.goldDot} />
          </View>

          <Text style={styles.eyebrow}>EL ESCENARIO ES TUYO</Text>
          <Text style={styles.title}>Donde el talento{ '\n' }encuentra su escenario.</Text>
          <Text style={styles.description}>
            Conectamos voces extraordinarias con teatros, compañías y oportunidades en todo el mundo.
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push('/role-selection')}
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
            <Text style={styles.primaryButtonText}>Comenzar</Text>
            <Text style={styles.buttonArrow}>→</Text>
          </Pressable>
          <Pressable onPress={() => router.push('/sign-in')} style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>Ya tengo una cuenta <Text style={styles.signIn}>Iniciar sesión</Text></Text>
          </Pressable>
          <Text style={styles.footer}>UNA RED PROFESIONAL PARA EL MUNDO DE LA ÓPERA</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.background },
  page: { flex: 1, paddingHorizontal: 28, paddingTop: 12, paddingBottom: 18, justifyContent: 'space-between' },
  topline: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandMark: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: C.gold, alignItems: 'center', justifyContent: 'center' },
  brandMarkText: { color: C.burgundy, fontFamily: 'Georgia', fontSize: 23, lineHeight: 27 },
  brandName: { color: C.ink, fontSize: 11, letterSpacing: 2.8, fontWeight: '700' },
  hero: { alignItems: 'center', paddingVertical: 18 },
  artwork: { width: 238, height: 238, alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  outerRing: { position: 'absolute', width: 226, height: 226, borderRadius: 113, borderWidth: 1, borderColor: '#D8C9B5' },
  innerRing: { position: 'absolute', width: 190, height: 190, borderRadius: 95, borderWidth: 1, borderColor: C.gold, opacity: 0.75 },
  artworkCenter: { width: 160, height: 160, borderRadius: 80, backgroundColor: '#EEE5D8', alignItems: 'center', justifyContent: 'center' },
  artworkO: { fontFamily: 'Georgia', fontSize: 100, lineHeight: 112, color: C.burgundy, marginTop: -7 },
  artworkLine: { width: 45, height: 1, backgroundColor: C.gold, marginTop: -4 },
  artworkCaption: { fontSize: 7, letterSpacing: 1.7, color: C.muted, marginTop: 9 },
  goldDot: { position: 'absolute', width: 9, height: 9, borderRadius: 5, backgroundColor: C.gold, top: 18, right: 39 },
  eyebrow: { color: C.gold, fontSize: 10, fontWeight: '700', letterSpacing: 3, marginBottom: 13 },
  title: { color: C.burgundy, fontFamily: 'Georgia', fontSize: 35, lineHeight: 43, textAlign: 'center', letterSpacing: -0.8 },
  description: { color: C.muted, fontSize: 14, lineHeight: 23, textAlign: 'center', maxWidth: 310, marginTop: 17 },
  actions: { gap: 14 },
  primaryButton: { backgroundColor: C.burgundy, minHeight: 58, borderRadius: 5, paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: '#FFFDF9', fontSize: 14, fontWeight: '700', letterSpacing: 0.5 },
  buttonArrow: { color: '#FFFDF9', fontSize: 20, position: 'absolute', right: 22 },
  pressed: { opacity: 0.86, transform: [{ scale: 0.99 }] },
  secondaryButton: { alignItems: 'center', paddingVertical: 8 },
  secondaryText: { color: C.muted, fontSize: 12 },
  signIn: { color: C.burgundy, fontWeight: '700' },
  footer: { textAlign: 'center', color: '#A69A8D', fontSize: 8, letterSpacing: 1.6, marginTop: 8 },
});
