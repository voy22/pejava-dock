<!-- Published from PejavaDockSite (also at https://dock.pejava.com/docs/). Do not edit here: changes are overwritten. -->

# FAQ and limits

## Can I turn the system Dock off completely?

No: macOS does not allow it. **Hide the system Dock** (Settings → General) sets it to auto-hide with a very long delay, so it does not appear while PejavaDock is running, and restores your settings when PejavaDock quits.

To do it by hand: System Settings → Desktop & Dock → turn on *Automatically hide and show the Dock*. To make it never appear, run in Terminal:

```bash
defaults write com.apple.dock autohide -bool true; defaults write com.apple.dock autohide-delay -float 1000; killall Dock
```

To bring it back:

```bash
defaults delete com.apple.dock autohide-delay; defaults write com.apple.dock autohide -bool false; killall Dock
```

## Maximized windows go under my dock

A third-party dock cannot reserve screen space the way the system Dock does, so macOS does not know about it when it sizes windows. Turn on **Keep windows from overlapping the dock** for that dock (needs Accessibility), or use auto-hide.

## Minimized windows show the app icon instead of a thumbnail

Thumbnails need the optional Screen Recording permission: System Settings → Privacy & Security → Screen & System Audio Recording → turn on PejavaDock, then relaunch it. PejavaDock only takes small snapshots of app windows when you switch apps; nothing is recorded or sent.

## The Trash icon is always empty

Seeing the contents of the Trash needs Full Disk Access: System Settings → Privacy & Security → Full Disk Access → **+** → choose PejavaDock in Applications, turn it on and relaunch PejavaDock.

## The window list is missing from an app's menu

That needs Accessibility: System Settings → Privacy & Security → Accessibility → turn on PejavaDock.

## I updated PejavaDock and the permissions are gone

macOS ties permissions to the app's signature. If you replaced the app with a build signed differently, turn the permissions off and on again (or remove PejavaDock from the list with **−** and add it again).

## “Open as App Window” does nothing

It needs Google Chrome, Microsoft Edge or Brave. Safari and Firefox have no app-window mode; for Safari, use *File → Add to Dock* to make a web app, then drag it from `~/Applications` into PejavaDock.

## A dock disappeared after I unplugged a display

It moved to the main display. Look at the edge where it was; if it overlaps another dock there, drag its move handle. It returns to its display when you plug it in again.

## How do I get PejavaDock settings back?

Right-click an empty area of any dock → Dock Settings…, use the menu bar icon, or open PejavaDock again from the Applications folder.

## How do I uninstall it?

Installed with Homebrew: `brew uninstall --cask --zap pejava-dock`. Otherwise: quit PejavaDock (menu bar icon → Quit PejavaDock; the system Dock comes back), drag the app from Applications to the Trash and, if you want, delete `~/Library/Application Support/PejavaDock`.

## Is PejavaDock free?

Yes, with every feature, for personal and work use. [Donations](https://dock.pejava.com/donate/) are welcome and turn off the reminders. See the [license](https://dock.pejava.com/license/).

## Something else is wrong

[Open an issue](https://github.com/voy22/pejava-dock/issues/new/choose) on GitHub: describe what happened, your macOS version and PejavaDock version (Finder → Applications → PejavaDock → Get Info).
