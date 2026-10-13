<!-- Published from PejavaDockSite (also at https://dock.pejava.com/docs/). Do not edit here: changes are overwritten. -->

# Widgets

Widgets show information right in a dock: the time, free disk space, the weather. They always sit at the end of a dock (on the right of a horizontal dock, at the bottom of a vertical one), after the items and after the “More” button, and each one is drawn for both horizontal and vertical docks.

## Add, change and remove

- **Add:** right-click an empty area of a dock → **Add Widget**, or Dock Settings → **Widgets** tab → Add Widget.
- **Change:** Dock Settings → Widgets → select the widget; its settings are below the list (which disk to watch, seconds on the clock, the city for the weather…). Right-click a widget → **Widget Settings…** goes straight there.
- **Order:** drag widgets in the list.
- **Remove:** right-click the widget → **Remove Widget**, or the minus button in the list.
- **Click a widget** to see more: all disks with their free space, a calendar, a 7-day forecast.

## Built-in widgets

| Widget | Shows | Settings | Click |
|---|---|---|---|
| Disk Space | Free (or used) space and a ring with the used share; the ring turns orange at 75 % and red at 90 % | Disk, free or used | All disks, Show in Finder, Disk Utility |
| Clock | Time and date (hours over minutes in a vertical dock) | Seconds, date | A calendar |

## More widgets

More widgets are on the [Widgets page](https://dock.pejava.com/widgets/). **Install** opens PejavaDock and asks before installing; or download the `.zip` and choose Settings → Widgets → **Install from File…**. Installed widgets are listed in Settings → Widgets, where they can be removed.

Widgets from packages can show information from the internet (the Weather widget asks open-meteo.com for the forecast). Install only widgets you trust.

## Make your own widget

A widget is a folder with a `manifest.json` and web pages, packed into a `.zip`:

```text
my-widget/
  manifest.json
  widget.html     shown in the dock
  detail.html     shown on click (optional)
  style.css, script.js, images…
```

```json
{
  "id": "com.example.quote",
  "name": { "en": "Quote", "ru": "Цитата" },
  "description": { "en": "A quote of the day." },
  "version": "1.0.0",
  "author": "Your name",
  "symbol": "quote.bubble",
  "size": { "horizontal": 3, "vertical": 1.3 },
  "entry": "widget.html",
  "detail": "detail.html",
  "refresh": 3600,
  "settings": [
    { "key": "topic", "type": "text", "label": { "en": "Topic" }, "default": "life" },
    { "key": "large", "type": "toggle", "label": { "en": "Large text" }, "default": false },
    { "key": "style", "type": "choice", "label": { "en": "Style" }, "default": "light",
      "options": [ { "value": "light", "label": "Light" }, { "value": "bold", "label": "Bold" } ] }
  ]
}
```

- `id`: letters, digits, dots, dashes; it is also the folder name after installing.
- `name`, `description`, labels: a string, or one per language (`en`, `ru`, `uk`, `de`, `fr`, `es`, `it`, `pt`, `nl`, `pl`, `ja`, `zh-Hans`); English is the fallback.
- `symbol`: an [SF Symbol](https://developer.apple.com/sf-symbols/) name for the settings list.
- `size`: the widget's length along the dock, in icon sizes, for horizontal and vertical docks (it is always one icon size thick).
- `refresh`: seconds between reloads of the page (at least 30).
- `settings`: shown in Dock Settings → Widgets; the values reach the page.

The pages get everything in the query string:

| Parameter | Value |
|---|---|
| `orientation` | `h` or `v` |
| `size` | icon size of the dock, in points |
| `width`, `height` | the widget's size in points |
| `dark` | `1` in Dark Mode |
| `lang` | the app's language, e.g. `ru` |
| `detail` | `1` on the click page |
| `settings` | the settings as JSON |

```js
const q = new URLSearchParams(location.search);
const settings = JSON.parse(q.get('settings') || '{}');
const vertical = q.get('orientation') === 'v';
```

Rules: keep the page background transparent (the dock is behind it); scripts run, and `fetch` can reach web APIs that allow it (CORS); links open in the browser; the page cannot leave its folder. The title of the page (`document.title`) is shown when the pointer is over the widget. The Weather widget in the [public repository](https://github.com/voy22/pejava-dock/tree/main/widgets/weather) is a complete example, and pack yours with `zip -r my-widget.zip .` inside its folder.
