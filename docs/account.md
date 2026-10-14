<!-- Published from PejavaDockSite (also at https://dock.pejava.com/docs/). Do not edit here: changes are overwritten. -->

# Account and sync

An account keeps your docks and settings on our server, so a new Mac, or the same Mac after a reinstall, gets them back in a second. PejavaDock works fully without an account.

## Sign in

Settings → Account → **Sign in with GitHub** or **Sign in with Google**. Your browser opens the provider's page; after you confirm, it returns to PejavaDock and you are signed in. PejavaDock never sees your password. The sign-in token on your Mac is kept in the macOS keychain.

One person, one account: if you sign in with GitHub and Google using the same verified e-mail, it is the same account. If you signed in with Google and want your GitHub sponsorship to count, use **Link GitHub**.

## What is synced

- Every dock: its name, items (apps, folders, files, web links, groups, separators and spacers), size, magnification, auto-hide, indicators and the other behavior options, and its look.
- Where each dock is: edge, position, display (and its place on the main display while that display is disconnected).
- App settings: menu bar icon, the Dock and ⌘-Tab switcher, launch at login, hiding the system Dock.
- Your plan: Free or Supporter.

Apps, folders and files are synced as their locations (for example `/Applications/Safari.app`), not as files. An app that is not installed on the other Mac stays in the dock and starts working once you install it there. Displays are recognized by their ID; a dock whose display is not connected to this Mac shows on the main display, as usual.

Not synced: permissions (each Mac grants them itself), downloaded site icons (they are fetched again) and anything outside PejavaDock.

## How sync works

- A change is sent a few seconds after you make it. PejavaDock checks for changes from your other Macs when it starts, after you sign in and every 15 minutes.
- If two Macs changed things at the same time, the changes are merged dock by dock; nothing is silently overwritten.
- When you sign in on a Mac that already has its own docks, PejavaDock asks whether to use the docks from your account or keep the ones on this Mac (and upload them).

## Sign out and delete

- **Sign out** (Settings → Account) ends the session on this Mac. Your docks stay on the Mac and in your account.
- **Delete Account** removes your profile, sign-in methods, sessions and synced settings from our server. Your docks stay on your Mac. See the [Privacy Policy](https://dock.pejava.com/privacy/).

## Supporter

A donation of $1 or more through [GitHub Sponsors](https://dock.pejava.com/donate/) makes your account a **Supporter** on all your Macs: no donation reminders and no news messages, unless you turn them on in Settings → Notifications. The status does not expire.

Sponsor with the GitHub account you use in PejavaDock, or link it first. If you sponsored before signing in, sign in with that GitHub account later and the status appears.

## Usage statistics

Once a day PejavaDock sends an anonymous ping: a random installation ID (not linked to your account), the app version, macOS version, processor type, language and the number of docks. The country is taken from the connection; the IP address is not stored. It helps us see which macOS versions and languages to support. Turn it off in Settings → General → *Send anonymous usage statistics*.

## Messages in the free version

During the first week after installation PejavaDock shows nothing. After that, the free version may show a short news message (once per message) and a donation reminder (at most once a week), never more often than one window in 30 minutes. The pages come from dock.pejava.com in your Mac's language. Supporters choose in **Settings → Notifications** what to see: news, update offers and donation reminders. A new Supporter starts with only update offers on. In the free version these options are on and locked.
