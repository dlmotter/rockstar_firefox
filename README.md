# Rockstar Extension - Firefox Version

This is the Firefox-compatible version of the [Rockstar Okta extension](https://github.com/gabrielsroka/gabrielsroka.github.io/tree/master/rockstar).

## Changes from Chrome Version
- **Draggable Popups**: Key popups are now draggable for better user experience
  - Main rockstar popup can be dragged anywhere on the screen
  - API Explorer popup is fully draggable
  - Export popups (CSV exports) are draggable
  - SSO popup (SAML assertions, etc.) is draggable
  - Configuration popup is draggable
- **Position Memory**: Popups remember their position across page navigation
  - Each popup type saves its position independently in localStorage
  - Position is restored when reopening the same popup type on any Okta page
  - Works across different Okta admin pages and user sessions
- **Customizable Popup Themes**: Personalize popup appearance with custom background colors
  - Click the settings gear icon to choose from preset colors or enter custom hex values
  - Automatic text color adaptation (white text on dark backgrounds, black on light)
  - Adaptive border colors for better visibility on all theme combinations
  - Theme preferences persist across sessions and apply to all popups
  - Comprehensive CSS overrides ensure consistent theming throughout the interface
  - Useful for visually distinguishing different Okta environments (e.g., red for production, blue for staging, green for development)
- **Enhanced Experimental Searches**: "Search Users (experimental)" and "Search Groups (experimental)" now open in their own draggable popup
  - No longer hijacks the page's existing search interface
  - Self-contained with real-time search functionality
  - Clean table display with working profile links
  - Better error handling and visual feedback
- **Expanded API Explorer**: Comprehensive autocomplete suggestions for Okta APIs
  - 200+ endpoint suggestions covering all major Okta API categories
  - Includes Management API endpoints (users, groups, apps, policies, etc.)
  - OAuth 2.0 and OpenID Connect endpoints with proper naming conventions
  - Well-known discovery endpoints and organization metadata
  - Smart variable placeholders (${userId}, ${groupId}, ${clientId}, etc.)
  - Covers authentication, authorization, security policies, and system management

## Temporary installation in Firefox (for development or debugging purposes)

1. Open Firefox
2. Go to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from this folder


