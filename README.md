# Rockstar Extension - Firefox Version

This is the Firefox-compatible version of the rockstar Okta extension.

## Changes from Chrome Version

### Manifest V2 Compatibility
- Uses `manifest_version: 2` instead of V3
- Uses `browser_action` instead of `action`
- Uses background scripts instead of service workers
- Added `tabs` and `activeTab` permissions

### Browser API Compatibility
- Uses `browser` API when available (Firefox), falls back to `chrome` API
- Enhanced error handling for Firefox-specific behaviors
- Compatible background script (`background.js`) instead of service worker
- Removed `declarativeContent` permission (not supported in Firefox Manifest V2)

### Files Modified
- `manifest.json` - Converted to Manifest V2 format, removed unsupported permissions
- `background.js` - New background script (replaces `service_worker.js`)
- `rockstar.js` - Updated to use browser API for cross-browser compatibility

## Installation in Firefox

1. Open Firefox
2. Go to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from this folder

## Features

rockstar is an extension that adds these features to Okta:
- Export Objects to CSV: eg, Users, Groups, Group Members, Directory Users, App Users, App Groups, Apps, App Notes.
- Administrators page: Export Admins
- User home page: Show SSO (SAML assertion, etc)
- People page: enhanced search
- Person page: show login/email and AD info, show user detail, enhance menus/title, manage user's admin roles
- Events: Expand All and Expand Each Row
- API: API Explorer, Pretty Print JSON
- Many: enhanced menus

...and more to come

see also https://gabrielsroka.github.io/rockstar

## Original Chrome Installation
# Install as extension
1. Create a folder on your hard drive called "rockstar". Download the files to the "rockstar" folder.
2. Open Chrome.
3. Go to the Extensions tab.
4. Click to enable Developer Mode.
5. Drag the "rockstar" folder to the Chrome Extensions tab.

To test:
1. Temporarily turn off the Chrome store version while you test/debug.
2. After each change to your dev version of rockstar, click the reload button on the Extensions tab, then reload the okta.com page, then test, and repeat.
3. When you're done testing, you can turn the Chrome store version back on, and turn off the dev version.

# Greasemonkey script
https://gabrielsroka.github.io/rockstar/rockstar.user.js

# Bookmarklet
https://github.com/gabrielsroka/gabrielsroka.github.io/blob/master/rockstar/rockstar_bm.js
