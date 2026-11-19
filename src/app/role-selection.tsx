import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const C = { background: '#F6F1E8', burgundy: '#6D2638', ink: '#2D2526', muted: '#81756D', gold: '#B8955A', line: '#E4D9CA', white: '#FFFCF7' };
const roles = [
  { id: 'singer', number: '01', title: 'Soy cantante', detail: 'Quiero mostrar mi trabajo y descubrir nuevas oportunidades.' },
  { id: 'company', number: '02', title: 'Soy una compañía', detail: 'Busco talento para producciones y proyectos artísticos.' },
  { id: 'casting', number: '03', title: 'Soy profesional de casting', detail: 'Quiero descubrir voces y gestionar convocatorias.' },
];

export default function RoleSelectionScreen() {
  const [selected, setSelected] = useState('singer');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.page}>
        <Pressable onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>←  Volver</Text></Pressable>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>PRIMER PASO</Text>
          <Text style={styles.title}>¿Cómo querés{ '\n' }formar parte?</Text>
          <Text style={styles.subtitle}>Elegí el perfil que mejor representa tu actividad profesional.</Text>
        </View>
        <View style={styles.cards}>
          {roles.map((role) => {
            const active = selected === role.id;
            return (
              <Pressable key={role.id} onPress={() => setSelected(role.id)} style={[styles.card, active && styles.cardActive]}>
                <View style={styles.cardTop}>
                  <Text style={[styles.number, active && styles.activeText]}>{role.number}</Text>
                  <View style={[styles.radio, active && styles.radioActive]}>{active ? <View style={styles.radioDot} /> : null}</View>
                </View>
                <Text style={[styles.cardTitle, active && styles.activeText]}>{role.title}</Text>
                <Text style={styles.cardDetail}>{role.detail}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.bottom}>
          <Pressable onPress={() => router.push({ pathname: '/sign-up', params: { role: selected } })} style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text><Text style={styles.arrow}>→</Text>
          </Pressable>
          <Text style={styles.note}>Podrás completar y editar tu perfil más adelante.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.background },
  page: { flex: 1, paddingHorizontal: 25, paddingTop: 12, paddingBottom: 18 },
  back: { alignSelf: 'flex-start', paddingVertical: 9, paddingRight: 16 },
  backText: { color: C.muted, fontSize: 13 },
  heading: { marginTop: 27, marginBottom: 28 },
  eyebrow: { color: C.gold, fontSize: 10, fontWeight: '700', letterSpacing: 2.5, marginBottom: 12 },
  title: { color: C.burgundy, fontFamily: 'Georgia', fontSize: 34, lineHeight: 41 },
  subtitle: { color: C.muted, fontSize: 13, lineHeight: 21, marginTop: 12, maxWidth: 300 },
  cards: { gap: 12, flex: 1 },
  card: { borderWidth: 1, borderColor: C.line, backgroundColor: C.white, borderRadius: 6, padding: 17, minHeight: 130 },
  cardActive: { borderColor: C.burgundy, backgroundColor: '#F2E8E2' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 13 },
  number: { color: '#B4A79A', fontSize: 10, letterSpacing: 1.5, fontWeight: '700' },
  radio: { width: 19, height: 19, borderRadius: 10, borderWidth: 1, borderColor: '#CFC3B5', alignItems: 'center', justifyContent: 'center' },
  radioActive: { borderColor: C.burgundy },
  radioDot: { width: 9, height: 9, borderRadius: 5, backgroundColor: C.burgundy },
  cardTitle: { color: C.ink, fontFamily: 'Georgia', fontSize: 20, marginBottom: 6 },
  activeText: { color: C.burgundy },
  cardDetail: { color: C.muted, fontSize: 12, lineHeight: 18, maxWidth: 285 },
  bottom: { paddingTop: 18 },
  button: { backgroundColor: C.burgundy, minHeight: 56, borderRadius: 5, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#FFFDF9', fontSize: 14, fontWeight: '700' },
  arrow: { color: '#FFFDF9', fontSize: 20, position: 'absolute', right: 20 },
  note: { color: '#A69A8D', fontSize: 10, textAlign: 'center', marginTop: 12 },
});
