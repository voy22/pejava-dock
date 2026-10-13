// PejavaDock weather widget: open-meteo.com (geocoding + forecast), no key.
// The dock passes everything in the query string (see the app's HTMLWidget.swift).
const q = new URLSearchParams(location.search);
const settings = JSON.parse(q.get('settings') || '{}');
const lang = (q.get('lang') || 'en').toLowerCase();
const short = lang.split('-')[0];
document.documentElement.dataset.dark = q.get('dark') === '1' ? '1' : '0';
document.documentElement.dataset.orientation = q.get('orientation') || 'h';

// WMO weather codes → [icon, text group]
const GROUPS = {
  clear: [0], mostly: [1, 2], cloudy: [3], fog: [45, 48], drizzle: [51, 53, 55, 56, 57],
  rain: [61, 63, 65, 66, 67, 80, 81, 82], snow: [71, 73, 75, 77, 85, 86], storm: [95, 96, 99],
};
const ICONS = { clear: ['☀️', '🌙'], mostly: ['🌤️', '☁️'], cloudy: ['☁️', '☁️'], fog: ['🌫️', '🌫️'], drizzle: ['🌦️', '🌧️'], rain: ['🌧️', '🌧️'], snow: ['🌨️', '🌨️'], storm: ['⛈️', '⛈️'] };
const T = {
  en: { clear: 'Clear', mostly: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', snow: 'Snow', storm: 'Thunderstorm', notFound: 'City not found', offline: 'No connection', today: 'Today', week: '7 days', source: 'Data: open-meteo.com' },
  ru: { clear: 'Ясно', mostly: 'Переменная облачность', cloudy: 'Облачно', fog: 'Туман', drizzle: 'Морось', rain: 'Дождь', snow: 'Снег', storm: 'Гроза', notFound: 'Город не найден', offline: 'Нет связи', today: 'Сегодня', week: '7 дней', source: 'Данные: open-meteo.com' },
  uk: { clear: 'Ясно', mostly: 'Мінлива хмарність', cloudy: 'Хмарно', fog: 'Туман', drizzle: 'Мряка', rain: 'Дощ', snow: 'Сніг', storm: 'Гроза', notFound: 'Місто не знайдено', offline: 'Немає зв’язку', today: 'Сьогодні', week: '7 днів', source: 'Дані: open-meteo.com' },
  de: { clear: 'Klar', mostly: 'Teils bewölkt', cloudy: 'Bewölkt', fog: 'Nebel', drizzle: 'Nieselregen', rain: 'Regen', snow: 'Schnee', storm: 'Gewitter', notFound: 'Stadt nicht gefunden', offline: 'Keine Verbindung', today: 'Heute', week: '7 Tage', source: 'Daten: open-meteo.com' },
  fr: { clear: 'Dégagé', mostly: 'Partiellement nuageux', cloudy: 'Nuageux', fog: 'Brouillard', drizzle: 'Bruine', rain: 'Pluie', snow: 'Neige', storm: 'Orage', notFound: 'Ville introuvable', offline: 'Pas de connexion', today: 'Aujourd’hui', week: '7 jours', source: 'Données : open-meteo.com' },
  es: { clear: 'Despejado', mostly: 'Parcialmente nublado', cloudy: 'Nublado', fog: 'Niebla', drizzle: 'Llovizna', rain: 'Lluvia', snow: 'Nieve', storm: 'Tormenta', notFound: 'Ciudad no encontrada', offline: 'Sin conexión', today: 'Hoy', week: '7 días', source: 'Datos: open-meteo.com' },
  it: { clear: 'Sereno', mostly: 'Parzialmente nuvoloso', cloudy: 'Nuvoloso', fog: 'Nebbia', drizzle: 'Pioviggine', rain: 'Pioggia', snow: 'Neve', storm: 'Temporale', notFound: 'Città non trovata', offline: 'Nessuna connessione', today: 'Oggi', week: '7 giorni', source: 'Dati: open-meteo.com' },
  pt: { clear: 'Céu limpo', mostly: 'Parcialmente nublado', cloudy: 'Nublado', fog: 'Neblina', drizzle: 'Garoa', rain: 'Chuva', snow: 'Neve', storm: 'Tempestade', notFound: 'Cidade não encontrada', offline: 'Sem conexão', today: 'Hoje', week: '7 dias', source: 'Dados: open-meteo.com' },
  nl: { clear: 'Helder', mostly: 'Half bewolkt', cloudy: 'Bewolkt', fog: 'Mist', drizzle: 'Motregen', rain: 'Regen', snow: 'Sneeuw', storm: 'Onweer', notFound: 'Stad niet gevonden', offline: 'Geen verbinding', today: 'Vandaag', week: '7 dagen', source: 'Gegevens: open-meteo.com' },
  pl: { clear: 'Bezchmurnie', mostly: 'Częściowe zachmurzenie', cloudy: 'Pochmurno', fog: 'Mgła', drizzle: 'Mżawka', rain: 'Deszcz', snow: 'Śnieg', storm: 'Burza', notFound: 'Nie znaleziono miasta', offline: 'Brak połączenia', today: 'Dziś', week: '7 dni', source: 'Dane: open-meteo.com' },
  ja: { clear: '晴れ', mostly: '晴れ時々曇り', cloudy: '曇り', fog: '霧', drizzle: '霧雨', rain: '雨', snow: '雪', storm: '雷雨', notFound: '都市が見つかりません', offline: '接続できません', today: '今日', week: '7日間', source: 'データ：open-meteo.com' },
  zh: { clear: '晴', mostly: '多云间晴', cloudy: '多云', fog: '雾', drizzle: '毛毛雨', rain: '雨', snow: '雪', storm: '雷暴', notFound: '找不到城市', offline: '无法连接', today: '今天', week: '7 天', source: '数据：open-meteo.com' },
};
const t = T[short] || T.en;
const group = (code) => Object.keys(GROUPS).find((g) => GROUPS[g].includes(code)) || 'cloudy';
const icon = (code, day = 1) => ICONS[group(code)][day ? 0 : 1];
const fahrenheit = settings.units === 'f';
const deg = (v) => `${Math.round(v)}°`;

function cityFromTimeZone() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/London';
  return tz.split('/').pop().replace(/_/g, ' ');
}

async function load() {
  const name = (settings.city || '').trim() || cityFromTimeZone();
  const cacheKey = `pd-weather:${name}:${fahrenheit}`;
  try {
    const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?count=1&language=${short}&name=${encodeURIComponent(name)}`).then((r) => r.json());
    const place = geo.results && geo.results[0];
    if (!place) return { error: t.notFound, name };
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}`
      + '&current=temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m,relative_humidity_2m'
      + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto'
      + (fahrenheit ? '&temperature_unit=fahrenheit&wind_speed_unit=mph' : '');
    const data = await fetch(url).then((r) => r.json());
    const result = { place, data };
    try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch {}
    return result;
  } catch {
    try { const c = JSON.parse(localStorage.getItem(cacheKey)); if (c) return c; } catch {}
    return { error: t.offline, name };
  }
}

window.PDWeather = { load, t, icon, group, deg, lang, short, fahrenheit };
