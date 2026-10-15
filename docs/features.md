<!-- Published from PejavaDockSite (also at https://dock.pejava.com/docs/). Do not edit here: changes are overwritten. -->

# Features

Everything the system Dock does, and what it never could.

## Like the native Dock

- **Magnification and labels.** Icons grow under the pointer; turn it on or off from the dock menu and set the size in Settings.
- **Running apps.** Indicators under running apps, the bounce while an app launches, and a *Running Applications* section for apps that are not pinned.
- **Minimized windows** go to the dock, like the right side of the native Dock. Click one to restore it. With Screen Recording permission they show a thumbnail.
- **Folder stacks.** Click a folder for a menu of its contents, with subfolders as submenus and *Open in Finder* at the top.
- **The Trash.** Drag files onto it to move them to the Trash, right-click it to empty it.
- **App menus:** the app's windows (with Accessibility), Show All Windows, Options (Keep in Dock, Show in Finder), Hide, Quit and Force Quit (hold <kbd>⌥</kbd>).
- **Drag and drop:** reorder, add from Finder, drop files onto an app to open them with it, drag an icon out to remove it.
- **Auto-hide** per dock.
- **Import** a new dock from the system Dock at any time: Settings → General → Import Dock from the System Dock.

## Many docks

Make as many docks as you like: right-click a dock → New Dock, or the menu bar icon → New Dock → choose an edge. Each dock has its own items, size, magnification, behavior and look. *Duplicate Dock…* copies a dock to the same or another display.

A typical setup: the main dock at the bottom with apps, a narrow dock on the left with project folders, and a small one at the top of a second display with web links.

## Any edge, any display

A dock can stand at the top, bottom, left or right edge, anywhere along it (Settings → *Placement Along the Edge*, or drag the move handle).

Each dock remembers its display. If that display is disconnected, the dock moves to the main display; you can place it there separately, and that place is remembered too. When the display comes back, the dock returns to where it was. In Settings a dock on a disconnected display shows *Returns to “…” when connected*.

## Groups

Drop an app onto another app to make a group, like folders on an iPhone. Drop more apps onto the group to add them.

- **Up to four items:** the group icon is split into quarters, each showing one app. Click a quarter to launch that app; each quarter has its own running indicator, and you can drag an app out of its quarter.
- **More than four:** clicking the group opens a panel with all its icons. To take an icon out of the group, drag it from the panel onto a dock, or use *Move Out of Group* at the bottom.
- Right-click a group to rename it, ungroup it or remove it from the dock. Right-click an item inside to move it out of the group.

## Web links

Drag a link, the address bar or a bookmark from a browser onto a dock. PejavaDock downloads the site icon automatically.

- Click the link to open it in your default browser.
- **Open as App Window** (in the link's menu) opens it as a standalone window without the browser's toolbar and tabs, like an app. It needs Google Chrome, Microsoft Edge or Brave.
- Sites installed with Chrome's *Install page as app* are real apps in `~/Applications/Chrome Apps`: drag them in like any other app.
- `.webloc` files dropped from Finder become links too.

## Snapping and pushing

Drag a dock by its dotted handle. It sticks to the nearest edge of the display under the pointer and, along that edge:

- **Near a corner** it snaps into it and stays pinned there: a dock pinned to the right (or bottom) corner grows to the left (or up) when you add icons and shrinks back towards the corner when you remove them.
- **Near another dock** it snaps next to it, a few points apart. Snapped docks move together: drag the first one and the others follow.
- **Let go on top of another dock** and it snaps to the nearer side of it.
- Docks on one edge never overlap: when one grows, the others are pushed aside, and a dock pinned to the corner pushes back.
- **Hold Shift** while dragging to place the dock exactly where you let go, without snapping.

Dock Settings → Placement shows what a dock is snapped or pinned to, with **Detach** / **Unpin**.

## All free space

Turn on **Use all free space on this edge** (Dock Settings → Placement, or the dock menu → Use All Free Space). The dock then takes everything between the other docks on that edge; they move to the ends of the edge. Its items start at the beginning, its widgets stay at the end.

When there isn't room for everything, the items that don't fit are hidden and a **More** button (an ellipsis without a tile) appears after the last one that fits; click it for the rest.

## Without a background

**Hide the dock background** (Dock Settings → Appearance, or the dock menu → Hide Background) removes the plate: only the icons, the widgets and the move handle are left.

## Windows of one app separately

For apps you open in several windows — for example Chrome with a work, a home and a family profile, or VS Code with several projects — right-click the app → Options → **Show Windows Separately**. With two or more windows open, the app's icon is followed by one icon per window, in a frame. Each shows a badge with the window's initials (a browser's profile name), or a snapshot of the window with Screen Recording; the full title appears on hover. Click one to bring that window to the front; right-click it to minimize or close it, or to show the windows together again. Needs Accessibility. The list of such apps is in Dock Settings → Behavior.

![VS Code with four projects and Chrome with three profiles: each window has its own icon next to the app](https://dock.pejava.com/screenshots/Screenshot4-dock.png)

## Screen Apps: apps on this display

With several displays, add **Screen Apps** to a dock (Dock Settings → Items): it shows the running apps whose windows are on that dock's display, like a taskbar per monitor. Pinned apps stay as they are. If the dock also has *Running Applications*, the apps already shown by Screen Apps are left out there.

An app that is hidden, minimized or in another Space stays on the display where it was last seen, so you can still click it. Apps with no windows appear on the main display.

## ⌘Tab on the right display

The system ⌘Tab switcher opens on the display where the system Dock last was, and a hidden system Dock never moves. So PejavaDock has its own switcher that opens on the display with the active window (Settings → General, on by default). Hold ⌘ and press Tab (⇧Tab goes back), or use the arrows or the mouse; Esc cancels, Q quits and H hides the selected app. Needs Accessibility; without it the system switcher works as usual. Not available in the Mac App Store version.

## Widgets

Clock, disk space, weather and more at the end of a dock: see [Widgets](widgets.md).

## Separators and spacers

Add as many as you need: right-click between icons → Insert → Separator/Spacer, or from the dock's settings. Separators split apps into groups; drag one to resize the whole dock. Spacers leave an empty icon-sized gap.

## Appearance

Each dock has its own look (Settings → the dock → Appearance):

- **Material:** *Liquid Glass* on macOS 26 and later, or *Frosted Blur* with adjustable blur strength.
- **Tint color** and its strength, or automatic (system) color.
- **Opacity** of the background.
- **Corner radius**, or automatic like the native Dock.

*Reset Appearance* brings back the defaults.

## Keeping windows clear

A third-party dock cannot reserve screen space the way the system Dock does. Turn on **Keep windows from overlapping the dock** (Settings, or *Keep Windows from Overlapping* in the dock menu): maximized, new and resized windows are fitted next to the dock. This needs Accessibility and has no effect while the dock hides automatically.

## App settings

Settings → General:

- **Hide the system Dock** while PejavaDock is running.
- **Show PejavaDock in the menu bar.**
- **Show PejavaDock in the Dock and the ⌘-Tab switcher** (off by default: PejavaDock stays out of the way).
- **Open PejavaDock at login and after restart** (on by default).
- Permissions & Setup…, Import Dock from the System Dock, Show Settings File in Finder.

## Languages

PejavaDock follows your Mac's language: English, Русский, Українська, Deutsch, Français, Español, Italiano, Português, Nederlands, Polski, 日本語 and 简体中文.
