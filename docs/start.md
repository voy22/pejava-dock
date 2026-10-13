<!-- Published from PejavaDockSite (also at https://dock.pejava.com/docs/). Do not edit here: changes are overwritten. -->

# Getting started

PejavaDock is an alternative Dock for macOS 14 and later. It runs next to the system Dock, starts with the same apps and folders, and lets you add as many docks as you like.

## Install

1. [Download](https://dock.pejava.com/download/) the `.dmg` (one build for Apple Silicon and Intel), open it and drag **PejavaDock** to **Applications**.
2. Start PejavaDock from the Applications folder, Launchpad or Spotlight.
3. The first time, macOS asks whether to open an app downloaded from the internet: click **Open**. PejavaDock is signed with an Apple Developer ID and notarized by Apple.

**Or with [Homebrew](https://brew.sh):**

```bash
brew install --cask voy22/tap/pejava-dock
```

It installs the same build. Update with `brew upgrade --cask pejava-dock`; remove with `brew uninstall --cask pejava-dock` (add `--zap` to also delete your docks and settings).

On the first launch PejavaDock builds your first dock, *Main Dock*, from the system Dock: the same apps, folders, size, magnification and edge. It adds the running apps section, minimized windows and the Trash, like the native Dock.

## Hide the system Dock

macOS does not let another app turn the system Dock off. PejavaDock can hide it for you: turn on **Hide the system Dock** in Settings → General, or in the PejavaDock menu in the menu bar. While PejavaDock is running, the system Dock auto-hides with a very long delay, so it never shows up. When PejavaDock quits (or crashes), your previous Dock settings are restored.

## Where things are

- **Right-click an empty area of a dock** for the dock menu: Dock Settings…, Insert, Turn Magnification On/Off, Turn Hiding On/Off, Keep Windows from Overlapping, Move Dock, Duplicate Dock…, New Dock, Delete This Dock….
- **The PejavaDock icon in the menu bar** lists your docks, makes a new one at any edge, hides the system Dock and opens Permissions & Setup… and Settings… (<kbd>⌘</kbd> <kbd>,</kbd>).
- **The move handle** in the corner of a dock: click it for the app menu, drag it to move the dock to another edge or display. You can hide it per dock.
- **Settings** has a page for every dock (items, placement, size, behavior, appearance) and a *General* page for the whole app.

If you hid the menu bar icon, open PejavaDock again from the Applications folder to get to Settings.

## Add, arrange and remove

- **Add:** drag apps, files, folders and links from Finder or a browser onto a dock, or use the **+** menu in the dock's settings (App…, Folder…, File…, Separator, Spacer, Running Applications, Downloads, Minimized Windows, Trash).
- **Reorder:** drag icons along the dock, or between docks.
- **Group:** drop an app onto another app. See [Features → Groups](features.md#groups).
- **Remove:** drag an icon out of the dock until a puff appears and let go, or right-click it → Remove from Dock.
- **Resize:** drag a separator up or down (left or right on a vertical dock).
- **Keep a running app:** right-click it → Options → Keep in Dock, or drag it to the pinned part of the dock.

## Permissions

PejavaDock works without any permissions. Some features need one; the setup window (menu bar icon → Permissions & Setup…) shows what is missing and opens the right place in System Settings.

| Permission | What it is for |
|---|---|
| Accessibility | The list of an app's windows in its menu, bringing a specific window to the front, restoring minimized windows, minimized windows in the dock, keeping windows from going under a dock |
| Full Disk Access | Showing whether the Trash is full or empty |
| Screen Recording (optional) | Thumbnails of minimized windows. Without it they show the app icon. PejavaDock only takes small snapshots of app windows when you switch apps; nothing is recorded or sent |

After turning on Full Disk Access or Screen Recording, relaunch PejavaDock.

## Your settings file

Docks are kept in `~/Library/Application Support/PejavaDock/config.json` (Settings → General → Show Settings File in Finder), site icons of web links in the `Icons` folder next to it. Reinstalling or updating never touches them. To start over, quit PejavaDock and delete that folder.
