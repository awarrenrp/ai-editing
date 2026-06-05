const Icon = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  chevronDown: '<path d="m7 10 5 5 5-5"/>',
  chevronUp: '<path d="m7 14 5-5 5 5"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  help: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.6 5.6 4 4M18.4 5.6l-4 4M18.4 18.4l-4-4M5.6 18.4l4-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  chat: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
  barChart: '<path d="M3 20h18"/><path d="M7 16V8"/><path d="M12 16V4"/><path d="M17 16v-6"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  check: '<path d="m5 12 4 4 10-10"/>',
  close: '<path d="M6 6 18 18M18 6 6 18"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  download: '<path d="M12 3v11"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  expand: '<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="M9 21H3v-6"/><path d="m3 21 7-7"/><path d="M21 15v6h-6"/><path d="m21 21-7-7"/><path d="M3 9V3h6"/><path d="m3 3 7 7"/>',
  more: '<path fill="currentColor" stroke="none" d="M5 13.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm7 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm7 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"/>',
  org: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4"/><path d="M6 16v-4h12v4"/>',
  star: '<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M17 3.13a4 4 0 0 1 0 7.75"/>',
  dollar: '<circle cx="12" cy="12" r="9"/><path d="M12 6v12"/><path d="M16 9.5a3.8 3.8 0 0 0-3-1.3c-1.8 0-3 .8-3 2s1.2 1.7 3 2.2 3 1 3 2.4-1.2 2-3 2a4.2 4.2 0 0 1-3.6-1.8"/>',
  heart: '<path d="M20.8 8.7a5.4 5.4 0 0 0-9.2-3.8L12 5.3l.4-.4a5.4 5.4 0 0 1 7.6 7.6L12 21l-8-8.5A5.4 5.4 0 0 1 11.6 4.9l.4.4"/>',
  laptop: '<path d="M4 5h16v11H4Z"/><path d="M2 20h20"/><path d="M8 20v-1h8v1"/>',
  card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>',
  custom: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9Z"/><path d="m8 9.5 4 2.2 4-2.2"/><path d="M12 21v-9.3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a7.8 7.8 0 0 0 .1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L15 6.4h-4L10.6 9a7 7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a7.8 7.8 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1l.4 2.6h4l.4-2.6a7 7 0 0 0 1.7-1l2.4 1 2-3.5Z"/>',
  pin: '<path d="m15 4 5 5-4 1-4 7-3-3 7-4Z"/><path d="m9 14-5 5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  send: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l3 3Z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h9"/>',
  arrowDownRight: '<path d="M7 7h10v10"/><path d="m7 17 10-10"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  document: '<path d="M7 3h7l5 5v13H7Z"/><path d="M14 3v5h5"/><path d="M10 13h6"/><path d="M10 17h6"/>',
  commentPlus: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M12 8v6"/><path d="M9 11h6"/>',
  sliders: '<path d="M4 7h10"/><path d="M18 7h2"/><path d="M16 5v4"/><path d="M4 12h2"/><path d="M10 12h10"/><path d="M8 10v4"/><path d="M4 17h12"/><path d="M20 17h0"/><path d="M18 15v4"/>',
  newChat: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  sparkle: '<path fill="currentColor" stroke="none" d="M12 1.5c1.2 5 3.5 7.3 8.5 8.5-5 1.2-7.3 3.5-8.5 8.5-1.2-5-3.5-7.3-8.5-8.5 5-1.2 7.3-3.5 8.5-8.5Zm8 11.8c.6 2.4 1.7 3.5 4 4-2.3.6-3.4 1.7-4 4-.6-2.3-1.7-3.4-4-4 2.3-.5 3.4-1.6 4-4Z"/>'
};

const AiIconAsset = "assets/rippling-ai-filled.svg";

const TopNavAssets = {
  ai: AiIconAsset
};

const ArtifactTrayAssets = {
  lightning: "assets/artifact-lightning.svg",
  document: "assets/artifact-document.svg",
  chart: "assets/artifact-chart.svg",
  pin: "assets/artifact-pin.svg"
};

function svgIcon(name, size = 20) {
  return `<svg class="icon" style="--icon-size: ${size}px;" width="${size}" height="${size}" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${Icon[name]}</svg>`;
}

function pdfFileIcon(size = 14) {
  return `
    <svg class="pdf-file-icon" width="${size}" height="${size}" viewBox="0 0 14 14" aria-hidden="true" fill="none">
      <path d="M3.5 1.5h5.1l2.4 2.4v8.6H3.5v-11Z" fill="#D93025"/>
      <path d="M8.5 1.5v2.6H11" fill="#F6B4AE"/>
      <path d="M5 6.1h5M5 8h5M5 9.9h3.6" stroke="#fff" stroke-width=".8" stroke-linecap="round"/>
    </svg>
  `;
}

function googleDriveIcon(size = 22) {
  return `
    <svg class="google-drive-icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#188038" d="M8.96 3.5h5.82l6.38 11.05h-5.82L8.96 3.5Z"/>
      <path fill="#1967D2" d="M5.44 19.7h12.74l2.98-5.15H8.42L5.44 19.7Z"/>
      <path fill="#FBBC04" d="M8.96 3.5 2.84 14.55 5.44 19.7l6.38-11.05L8.96 3.5Z"/>
      <path fill="#fff" d="m8.42 14.55 3.4-5.9 3.52 5.9H8.42Z"/>
    </svg>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char];
  });
}

function iconButton(name, label, className = "", attrs = "") {
  return `<button class="icon-button ${className}" type="button" aria-label="${label}" title="${label}" ${attrs}>${svgIcon(name)}</button>`;
}

function topNavAssetIcon(source, label, className = "") {
  const sources = Array.isArray(source) ? source : [source];
  return `
    <span class="top-nav-asset-icon ${className}" aria-hidden="true">
      ${sources.map((src) => `<img src="${src}" alt="" />`).join("")}
    </span>
  `;
}

function topNavAssetButton(source, label, iconClass = "", attrs = "") {
  return `
    <button class="icon-button top-nav__icon-button" type="button" aria-label="${label}" title="${label}" ${attrs}>
      ${topNavAssetIcon(source, label, iconClass)}
    </button>
  `;
}

function RipplingMark() {
  return `
    <span class="rippling-mark__bars" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </span>
  `;
}

const artifactOpenModes = [
  { id: "onTop", label: "On top" },
  { id: "onRight", label: "On right" },
  { id: "push", label: "Push" },
  { id: "onLeft", label: "On left" }
];

const sideTrayModes = [
  { id: "tray", label: "Tray", description: "Shows artifacts inside the chat" },
  { id: "takeover", label: "Full chat", description: "Slides over the side chat" },
  { id: "bottomSheet", label: "Bottom sheet", description: "Slides up from the bottom" },
  { id: "pushUp", label: "Dropdown", description: "Opens a compact menu from the chat header" },
  { id: "sideCar", label: "Side car", description: "Opens in the right margin" }
];

const artifactSettingPresets = [
  {
    id: "nearTerm",
    label: "Near term",
    description: "Open artifacts on the left and use the dropdown tray.",
    artifactMode: "onLeft",
    sideTrayMode: "pushUp"
  },
  {
    id: "future",
    label: "Future",
    description: "Open artifacts on top and use the dropdown tray.",
    artifactMode: "onTop",
    sideTrayMode: "pushUp"
  }
];

function getCurrentArtifactPreset() {
  return artifactSettingPresets.find((preset) => preset.id === prototypeState.artifactPreset)
    || artifactSettingPresets.find((preset) => preset.artifactMode === prototypeState.artifactMode && preset.sideTrayMode === prototypeState.sideTrayMode)
    || artifactSettingPresets[1];
}

function ArtifactSettingsMenu() {
  const currentPreset = getCurrentArtifactPreset();

  return `
    <div class="artifact-settings">
      <button
        class="artifact-settings__button ${prototypeState.settingsMenuOpen ? "is-open" : ""}"
        type="button"
        data-action="toggle-settings-menu"
        aria-haspopup="true"
        aria-expanded="${prototypeState.settingsMenuOpen}"
      >
        ${svgIcon("sliders", 16)}
        <span>Artifact settings: ${escapeHtml(currentPreset.label)}</span>
        ${svgIcon("chevronDown", 14)}
      </button>
      ${
        prototypeState.settingsMenuOpen
          ? `
            <div class="artifact-settings__menu" role="menu">
              <section class="artifact-settings__section">
                <p>Preset</p>
                ${artifactSettingPresets
                  .map(
                    (preset) => `
                      <button
                        class="artifact-settings__item artifact-settings__item--stack artifact-settings__item--preset ${currentPreset.id === preset.id ? "is-selected" : ""}"
                        type="button"
                        data-artifact-preset="${preset.id}"
                        role="menuitemradio"
                        aria-checked="${currentPreset.id === preset.id}"
                      >
                        <span>
                          ${escapeHtml(preset.label)}
                          ${currentPreset.id === preset.id ? svgIcon("check", 16) : ""}
                        </span>
                        <small>${escapeHtml(preset.description)}</small>
                      </button>
                    `
                  )
                  .join("")}
              </section>
            </div>
          `
          : ""
      }
    </div>
  `;
}

function ChatArtifactMenu() {
  return `
    <div class="chat-artifact-menu">
      ${iconButton(
        "info",
        "Open artifacts",
        `artifact-trigger chat-artifact-menu__trigger ${prototypeState.artifactTrayOpen ? "is-active" : ""}`,
        `data-action="toggle-artifact-tray" aria-expanded="${prototypeState.artifactTrayOpen}"`
      )}
    </div>
  `;
}

function TopNav() {
  return `
    <header class="top-nav" data-node-id="1534:19677">
      <div class="top-nav__brand">
        <div class="rippling-mark" aria-hidden="true">
          ${RipplingMark()}
        </div>
        <div class="top-nav__product">
          <span>Analytics</span>
          <span class="top-nav-chevron" aria-hidden="true">${svgIcon("chevronDown", 16)}</span>
          <div class="top-nav__divider"></div>
        </div>
      </div>
      <label class="top-nav__search">
        ${svgIcon("search", 16)}
        <input aria-label="Search or jump to" placeholder="Search or jump to..." />
      </label>
      ${ArtifactSettingsMenu()}
      <div class="top-nav__actions">
        ${iconButton("help", "Help", "top-nav__icon-button")}
        ${iconButton("chat", "Messages", "top-nav__icon-button")}
        ${topNavAssetButton(TopNavAssets.ai, "Open AI chat", "top-nav-asset-icon--top-ai", 'data-action="open-side-chat"')}
        <div class="top-nav__divider"></div>
        <button class="top-nav__company" type="button" aria-label="Account menu">
          <span>Acme, Inc.</span>
          <span class="avatar" aria-hidden="true">N</span>
        </button>
      </div>
    </header>
  `;
}

const navItems = [
  ["org", "Org Chart", false],
  ["star", "Favorites", true],
  ["users", "HR", true],
  ["dollar", "Payroll", true],
  ["heart", "Benefits", true],
  ["star", "Talent", true],
  ["laptop", "IT", true],
  ["card", "Spend", true],
  ["custom", "Custom Apps", true]
];

const platformItems = [
  ["briefcase", "Tools", true],
  ["data", "Data", true],
  ["settings", "Global settings", true],
  ["help", "Help", false]
];

function isNavExpanded() {
  return prototypeState.navPinState === "open" || (prototypeState.navPinState === "unpinned" && prototypeState.navExpanded);
}

function getNavPinLabel() {
  if (prototypeState.navPinState === "open") return "Unpin open navigation";
  if (prototypeState.navPinState === "closed") return "Unpin closed navigation";
  return isNavExpanded() ? "Pin navigation open" : "Pin navigation closed";
}

function getAppLayoutClassName() {
  const chatClosedClass = prototypeState.chatMode === "closed" ? " app-layout--chat-closed" : "";
  return `app-layout app-layout--nav-${isNavExpanded() ? "expanded" : "collapsed"} app-layout--nav-pin-${prototypeState.navPinState}${chatClosedClass}`;
}

function NavItem([iconName, label, hasCaret], extraClass = "", attrs = "") {
  return `
    <button class="nav-item ${extraClass}" type="button" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}" ${attrs}>
      <span class="nav-item__icon">${svgIcon(iconName, 24)}</span>
      <span class="nav-item__label">${escapeHtml(label)}</span>
      ${hasCaret ? `<span class="nav-item__chevron">${svgIcon("chevronRight", 18)}</span>` : ""}
    </button>
  `;
}

function SideNav() {
  const expanded = isNavExpanded();
  const pinLabel = getNavPinLabel();
  const pinClass = prototypeState.navPinState !== "unpinned" ? "is-pinned" : "";
  return `
    <nav
      class="side-nav side-nav--${expanded ? "expanded" : "collapsed"} side-nav--pin-${prototypeState.navPinState}"
      data-node-id="6843:40644"
      data-action="nav-hover-zone"
      aria-label="Product navigation"
      aria-expanded="${expanded}"
    >
      <div class="side-nav__section">
        ${NavItem(navItems[0])}
        <div class="nav-hairline"></div>
        ${navItems.slice(1).map((item) => NavItem(item)).join("")}
      </div>
      <div class="side-nav__footer">
        <div class="nav-divider">Platform</div>
        ${platformItems.map((item) => NavItem(item)).join("")}
        <div class="nav-hairline"></div>
        ${NavItem(["pin", pinLabel, false], `nav-pin ${pinClass}`, 'data-action="toggle-nav-pin"')}
      </div>
    </nav>
  `;
}

function AIComposer({ rich = false } = {}) {
  const draft = prototypeState.composerDraft || "";
  const canSend = draft.trim().length > 0;
  const isEditing = Boolean(getEditingArtifactId());
  const editingChip = isEditing
    ? '<div class="composer-status"><span class="chat-output-editing-chip">Editing</span></div>'
    : "";

  if (rich) {
    return `
      <section class="ai-composer ai-composer--rich ${isEditing ? "ai-composer--editing" : ""}" data-node-id="1370:11582" aria-label="AI composer">
        ${editingChip}
        <div class="composer-stack">
          <div class="attachment-row">
            <div class="image-attachment">
              ${iconButton("close", "Remove image")}
            </div>
            <div class="document-chip">
              <span class="document-chip__icon">${svgIcon("document", 20)}</span>
              <span class="document-chip__text">
                <span class="document-chip__title">Employment verification</span>
                <span class="document-chip__type">PDF</span>
              </span>
            </div>
          </div>
          <div class="composer-copy">
            <p>Do something about</p>
            <span class="composer-token">@Mufasa Mercedes</span>
            <span class="skill-label">${svgIcon("pin", 14)} Skill Builder</span>
            <p>dfsdf</p>
            <p>and don't forget to add some context about</p>
          </div>
        </div>
        ${ComposerActions({ primary: true })}
      </section>
    `;
  }

  return `
    <section class="ai-composer ai-composer--compact ${isEditing ? "ai-composer--editing" : ""}" data-node-id="28:12366" aria-label="AI composer">
      ${editingChip}
      <textarea class="composer-input" data-chat-input rows="2" aria-label="Message Rippling AI" placeholder="Ask, make, or search anything...">${escapeHtml(draft)}</textarea>
      ${ComposerActions({ primary: canSend })}
    </section>
  `;
}

function ComposerActions({ primary }) {
  const sendStateClass = primary ? "icon-button--primary" : "icon-button--disabled";
  return `
    <div class="composer-actions">
      ${iconButton("plus", "Attach", "icon-button--outline")}
      <button class="speed-button" type="button" aria-label="Response speed">
        <span>Fast</span>
        ${svgIcon("chevronDown", 16)}
      </button>
      <span class="composer-spacer"></span>
      ${iconButton("send", "Send", sendStateClass, `data-action="send-chat-message" aria-disabled="${!primary}"`)}
    </div>
  `;
}

const promptItems = [
  {
    label: "Build a T&A report that shows start and finish times",
    artifactId: "time-attendance-report"
  },
  {
    label: "Show me a PDF of my benefits",
    artifactId: "benefits-pdf"
  },
  {
    label: "Show me a list of multiple links",
    artifactId: "multiple-links"
  },
  {
    label: "Show me my turnover rate for the year",
    artifactId: "turnover-rate-year"
  },
  {
    label: "Show me my under and over utilized employees",
    artifactId: "employee-utilization-review"
  },
  {
    label: "Identify employees who are not promoted in last 2 years",
    artifactId: "promotion-review"
  }
];

function PromptChip({ label, artifactId }) {
  return `
    <button class="prompt-chip" type="button" data-prompt-artifact-id="${artifactId}" aria-label="Run prompt: ${escapeHtml(label)}">
      ${svgIcon("arrowDownRight", 14)}
      <span>${escapeHtml(label)}</span>
    </button>
  `;
}

function ArtifactPreview({ artifactId, variant = "compact", interactive = false, showMoreMenu = true, promoted = null } = {}) {
  const artifact = getArtifactById(artifactId);

  if (artifact?.tablePreview) {
    return TablePreview({ artifactId, variant, interactive, showMoreMenu, promoted });
  }

  if (artifact?.workflowPreview) {
    return WorkflowPreview({ artifactId, variant, interactive, showMoreMenu });
  }

  if (artifact?.pdfPreview) {
    return PdfPreview({ artifactId, variant, interactive, showMoreMenu });
  }

  return ReportPreview({ artifactId, variant, interactive, showMoreMenu });
}

const artifactMoreActions = [
  { id: "download", label: "Download", icon: "download" },
  { id: "copy", label: "Copy", icon: "copy" },
  { id: "edit", label: "Edit", icon: "edit" },
  { type: "separator" },
  { id: "pin", label: "Pin", icon: "star" },
  { id: "viewSql", label: "View SQL", icon: "eye" }
];

function ArtifactMoreMenu({ artifactId } = {}) {
  const isOpen = prototypeState.activeArtifactActionMenuId === artifactId;

  return `
    <div class="artifact-more-menu ${isOpen ? "is-open" : ""}" data-node-id="1732:29933">
      <button
        class="icon-button chat-output-more artifact-more-menu__trigger"
        type="button"
        aria-label="More actions"
        title="More actions"
        data-action="toggle-artifact-action-menu"
        data-artifact-id="${artifactId}"
        aria-haspopup="true"
        aria-expanded="${isOpen}"
      >
        ${svgIcon("more", 18)}
      </button>
      ${
        isOpen
          ? `
            <div class="artifact-more-menu__dropdown" role="menu" aria-label="Artifact actions">
              ${artifactMoreActions
                .map((action) => {
                  if (action.type === "separator") {
                    return '<div class="artifact-more-menu__separator" role="separator"></div>';
                  }

                  return `
                    <button
                      class="artifact-more-menu__item ${action.selected ? "is-selected" : ""}"
                      type="button"
                      data-action="artifact-menu-command"
                      data-menu-command="${action.id}"
                      data-artifact-id="${artifactId}"
                      role="menuitem"
                    >
                      ${svgIcon(action.icon, 16)}
                      <span>${action.label}</span>
                      ${action.selected ? svgIcon("check", 16) : ""}
                    </button>
                  `;
                })
                .join("")}
            </div>
          `
          : ""
      }
    </div>
  `;
}

function ReportPreview({ artifactId, variant = "compact", interactive = false, showMoreMenu = true } = {}) {
  const artifact = getArtifactById(artifactId);
  const preview = artifact?.reportPreview;
  if (!preview) return "";

  const maxTick = Math.max(...preview.ticks);
  const actionAttrs = interactive ? `role="button" tabindex="0" data-action="view-chat-output" data-artifact-id="${artifactId}" aria-label="View ${escapeHtml(artifact.label)}"` : "";

  return `
    <div class="report-preview report-preview--${variant}" ${actionAttrs}>
      <div class="report-preview__header">
        <h3>${escapeHtml(preview.title)}</h3>
        ${
          interactive && showMoreMenu
            ? ArtifactMoreMenu({ artifactId })
            : ""
        }
      </div>
      <div class="report-preview__chart" aria-label="${escapeHtml(preview.title)} chart">
        <div class="report-preview__y-title">${escapeHtml(preview.yLabel)}</div>
        <div class="report-preview__plot">
          <div class="report-preview__ticks" aria-hidden="true">
            ${preview.ticks.map((tick) => `<span><b>${tick}</b><i></i></span>`).join("")}
          </div>
          <div class="report-preview__bars">
            ${preview.bars
              .map((bar) => {
                const height = Math.max(8, Math.min(100, (bar.value / maxTick) * 100));
                return `
                  <span class="report-preview__bar-column">
                    <i style="height: ${height}%"></i>
                    <b>${escapeHtml(bar.label)}</b>
                  </span>
                `;
              })
              .join("")}
          </div>
        </div>
        <div class="report-preview__x-title">${escapeHtml(preview.xLabel)}</div>
      </div>
    </div>
  `;
}

function WorkflowPreview({ artifactId, variant = "compact", interactive = false, showMoreMenu = true } = {}) {
  const artifact = getArtifactById(artifactId);
  const preview = artifact?.workflowPreview;
  if (!preview) return "";

  const actionAttrs = interactive ? `role="button" tabindex="0" data-action="view-chat-output" data-artifact-id="${artifactId}" aria-label="View ${escapeHtml(artifact.label)}"` : "";

  return `
    <div class="workflow-preview workflow-preview--${variant}" data-node-id="878:13832" ${actionAttrs}>
      <div class="workflow-preview__header">
        <h3>${escapeHtml(preview.title)}</h3>
        ${interactive && showMoreMenu ? ArtifactMoreMenu({ artifactId }) : ""}
      </div>
      <div class="workflow-preview__body">
        <section>
          <h4>${escapeHtml(preview.triggerTitle)}</h4>
          <p>${escapeHtml(preview.trigger)}</p>
        </section>
        <section>
          <h4>${escapeHtml(preview.actionTitle)}</h4>
          <p>${escapeHtml(preview.action)}</p>
        </section>
      </div>
    </div>
  `;
}

function PdfPreview({ artifactId, variant = "compact", interactive = false, showMoreMenu = true } = {}) {
  const artifact = getArtifactById(artifactId);
  const preview = artifact?.pdfPreview;
  if (!preview) return "";

  const actionAttrs = interactive ? `role="button" tabindex="0" data-action="view-chat-output" data-artifact-id="${artifactId}" aria-label="View ${escapeHtml(artifact.label)}"` : "";
  const title = preview.title || artifact.label;
  const date = preview.date || "June 4th, 2026";
  const actionLabel = preview.actionLabel || "Open";

  return `
    <div class="pdf-preview pdf-preview--${variant}" data-node-id="4170:37856" ${actionAttrs}>
      <div class="pdf-preview__type">
        <span class="pdf-preview__file-icon">
          ${pdfFileIcon(14)}
        </span>
      </div>
      <div class="pdf-preview__content">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(date)}</p>
      </div>
      <div class="pdf-preview__actions">
        <span class="pdf-preview__drive-button" aria-hidden="true">
          ${googleDriveIcon(20)}
        </span>
        <span class="pdf-preview__open">${escapeHtml(actionLabel)}</span>
        ${
          interactive && showMoreMenu && preview.showMoreMenu
            ? ArtifactMoreMenu({ artifactId })
            : ""
        }
        </div>
    </div>
  `;
}

function renderTableCell(value, column) {
  if (column.type === "status") {
    const status = typeof value === "object" ? value : { label: value, tone: "neutral" };
    return `<span class="table-status table-status--${status.tone || "neutral"}"><i></i>${escapeHtml(status.label)}</span>`;
  }

  if (column.type === "utilization") {
    const utilization = typeof value === "object" ? value : { value, trend: null };
    const trend = utilization.trend === "down" ? "down" : "up";
    return `
      <span class="table-utilization table-utilization--${trend}">
        <span>${escapeHtml(utilization.value)}</span>
        ${svgIcon(trend === "down" ? "arrowDown" : "arrowUp", 14)}
      </span>
    `;
  }

  if (column.type === "link") {
    return `<span class="table-link">${escapeHtml(value)}</span>`;
  }

  if (column.type === "delta") {
    const stringValue = String(value);
    const tone = stringValue.startsWith("+") ? "negative" : stringValue.startsWith("-") ? "positive" : "neutral";
    return `<span class="table-delta table-delta--${tone}">${escapeHtml(stringValue)}</span>`;
  }

  return escapeHtml(value);
}

function TablePreview({ artifactId, variant = "compact", interactive = false, showMoreMenu = true, promoted = null } = {}) {
  const artifact = getArtifactById(artifactId);
  const table = artifact?.tablePreview;
  if (!table) return "";

  const isCompact = variant === "compact";
  const isPromoted = promoted ?? isArtifactPromoted(artifactId);
  const isTrackerStyle = table.displayStyle === "tracker";
  const isTurnoverStyle = table.displayStyle === "turnover";
  const showColumnChevrons = isTrackerStyle || isTurnoverStyle;
  const columns = isCompact ? table.columns.filter((column) => column.compact !== false) : table.columns;
  const rows = isCompact ? table.rows.slice(0, table.compactRows || 4) : table.rows;

  return `
    <div class="table-preview table-preview--${variant} ${isPromoted ? "table-preview--promoted" : "table-preview--widget"} ${isTrackerStyle ? "table-preview--tracker" : ""} ${isTurnoverStyle ? "table-preview--turnover" : ""}" data-node-id="883:13314">
      <div class="table-preview__titlebar">
        <h3>${escapeHtml(table.title)}</h3>
        ${
          interactive
            ? `
              <button class="table-preview__open" type="button" data-action="view-chat-output" data-artifact-id="${artifactId}">
                Open
              </button>
            `
            : ""
        }
      </div>
      <div class="table-preview__scroller">
        <table aria-label="${escapeHtml(table.title)}">
          <thead>
            <tr>
              ${columns
                .map(
                  (column) => `
                    <th class="table-preview__cell--${column.type || "text"}" style="width: ${column.width || "auto"}">
                      <span>${escapeHtml(column.label)}</span>
                      ${showColumnChevrons ? svgIcon("chevronDown", 12) : ""}
                    </th>
                  `
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                  <tr>
                    ${columns
                      .map(
                        (column) => `
                          <td class="table-preview__cell--${column.type || "text"}">
                            ${renderTableCell(row[column.key], column)}
                          </td>
                        `
                      )
                      .join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function ChatOutputMetrics(metrics = []) {
  if (!metrics?.length) return "";

  return `
    <div class="chat-output-metrics" aria-label="Utilization summary">
      ${metrics
        .map(
          (metric) => `
            <div class="chat-output-metric">
              <strong>${escapeHtml(metric.value)}</strong>
              <span>${escapeHtml(metric.label)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function ChatOutputInsight(insight) {
  if (!insight) return "";

  return `
    <div class="chat-output-insight" role="note">
      <strong>Insight</strong>
      <span>${escapeHtml(insight)}</span>
    </div>
  `;
}

function TurnoverAnswer(message) {
  const narrative = message.narrative || {};
  const paragraphs = narrative.paragraphs || [];

  return `
    <div class="turnover-answer">
      <section class="turnover-answer__intro">
        <div class="turnover-answer__headline">
          <strong>${escapeHtml(narrative.metric || "14.2%")}</strong>
          <h2>${escapeHtml(narrative.title || "Turnover is currently up by 3%")}</h2>
        </div>
        <div class="turnover-answer__body">
          ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </section>
      <section class="turnover-answer__recommendation">
        <h2>${escapeHtml(narrative.recommendationTitle || "Recommended action")}</h2>
        <p>${escapeHtml(narrative.recommendation || "Worth reviewing exit reasons for Q3 and Q4 before setting targets for next year, particularly in those two departments.")}</p>
      </section>
    </div>
  `;
}

function ExternalLinksAnswer(message) {
  const artifact = getArtifactById(message.artifactId);
  const links = artifact?.externalLinks || [];

  return `
    <div class="chat-output-summary chat-output-summary--links">
      <section class="chat-output-summary__block">
        <h2>${escapeHtml(artifact?.linkListTitle || "Links")}</h2>
        <p>${escapeHtml(artifact?.linkListSummary || message.body)}</p>
      </section>
      <div class="external-link-list" aria-label="Suggested links">
        ${links
          .map(
            (link) => `
              <button class="external-link-card" type="button" aria-label="Open ${escapeHtml(link.title)}">
                <span class="external-link-card__icon" aria-hidden="true">
                  ${link.type === "pdf" ? pdfFileIcon(14) : svgIcon("document", 14)}
                </span>
                <span class="external-link-card__content">
                  <strong>${escapeHtml(link.title)}</strong>
                  <small>${escapeHtml(link.meta)}</small>
                </span>
                <span class="external-link-card__source" aria-hidden="true">
                  ${googleDriveIcon(20)}
                </span>
                <span class="external-link-card__open">Open</span>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function ChatOutputSummary(message) {
  if (message.responseLayout === "turnoverNarrative") {
    return TurnoverAnswer(message);
  }

  if (message.responseLayout === "linkList") {
    return ExternalLinksAnswer(message);
  }

  const blocks = message.summaryBlocks || (message.summaryTitle || message.summary || message.details
    ? [
        {
          title: message.summaryTitle,
          summary: message.summary,
          details: message.details
        }
      ]
    : null);

  if (!blocks && !message.metrics?.length) {
    return `<p>${escapeHtml(message.body)}</p>`;
  }

  return `
    <div class="chat-output-summary">
      ${
        blocks
          ? blocks
              .map(
                (block) => `
                  <section class="chat-output-summary__block">
                    ${block.title ? `<h2>${escapeHtml(block.title)}</h2>` : ""}
                    ${block.summary ? `<p><strong>Summary:</strong> ${escapeHtml(block.summary)}</p>` : ""}
                    ${
                      block.details?.length
                        ? `
                          <div class="chat-output-summary__details">
                            ${block.details.map((detail) => `<p>${escapeHtml(detail)}</p>`).join("")}
                          </div>
                        `
                        : ""
                    }
                  </section>
                `
              )
              .join("")
          : `<p>${escapeHtml(message.body)}</p>`
      }
      ${ChatOutputMetrics(message.metrics)}
    </div>
  `;
}

function ChatThread({ mode = "sidebar" } = {}) {
  if (!prototypeState.chatMessages.length) {
    return `
      <div class="greeting">
        <img class="ai-spark" src="${AiIconAsset}" alt="" data-node-id="11963:240" />
        <div class="greeting-copy">
          <h2>Hi Nick,</h2>
          <p>What can we help you achieve today?</p>
        </div>
      </div>
      <div class="prompt-list prompt-list--${mode}">
        ${promptItems.map(PromptChip).join("")}
      </div>
    `;
  }

  const previewVariant = mode === "fullscreen" ? "large" : "compact";
  const editingArtifactId = getEditingArtifactId();

  return `
    <div class="chat-thread" role="log" aria-live="polite" aria-label="Chat messages">
      ${prototypeState.chatMessages
        .map((message) => {
          const isPdfOutput = Boolean(getArtifactById(message.artifactId)?.pdfPreview);
          const isDashboardOutput = Boolean(message.metrics?.length);
          const isEditingOutput = message.artifactId && editingArtifactId === message.artifactId;
          const outputClassName = message.role === "assistant"
            ? [
                "chat-output",
                message.preview ? "chat-output--has-preview" : "",
                isPdfOutput ? "chat-output--pdf" : "",
                isDashboardOutput ? "chat-output--dashboard" : "",
                isEditingOutput ? "chat-output--editing" : ""
              ].filter(Boolean).join(" ")
            : "chat-bubble";
          const articleClassName = [
            "chat-message",
            `chat-message--${message.role}`,
            isEditingOutput ? "chat-message--editing" : ""
          ].filter(Boolean).join(" ");

          return `
            <article class="${articleClassName}">
              <div class="${outputClassName}">
                ${isDashboardOutput && message.artifactId && !isEditingOutput ? `<div class="chat-output-dashboard-menu">${ArtifactMoreMenu({ artifactId: message.artifactId })}</div>` : ""}
                ${message.role === "assistant" ? ChatOutputSummary(message) : `<p>${escapeHtml(message.body)}</p>`}
                ${message.preview === "report" ? ArtifactPreview({ artifactId: message.artifactId, variant: previewVariant, interactive: true, showMoreMenu: !isDashboardOutput }) : ""}
                ${message.role === "assistant" ? ChatOutputInsight(message.insight) : ""}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

const chatHistorySections = [
  {
    title: "Pinned",
    items: [
      { label: "Positions filled for 2026", conversationId: "positions-2026" },
      "Payroll update for Q3 re: bonuses?",
      "What's the status on the new hire requisitions?"
    ]
  },
  {
    title: "Today",
    items: [
      "Any updates on the benefits enrollment?",
      "How are we tracking against the annual budget?",
      "What's the latest on the IT infrastructure upgrade?",
      "Any news on the travel policy update?"
    ]
  },
  {
    title: "Yesterday",
    items: [
      "What's the deal with the employee survey results?",
      "What's the scoop on the new training modules?",
      "How's the performance review cycle coming along?",
      "What's happening with the compensation planning?"
    ]
  }
];

const conversationData = {
  "positions-2026": {
    title: "Positions filled for 2026",
    artifactIds: [
      "positions-filled-2026",
      "positions-average-time-to-fill",
      "positions-department-breakdown",
      "positions-longest-to-fill",
      "positions-merged-dataset"
    ],
    messages: [
      {
        role: "user",
        body: "Can you show me what positions were filled in 2026?"
      },
      {
        role: "assistant",
        body: "You've filled 17 positions across 6 departments so far in 2026.",
        summaryBlocks: [
          {
            title: "Positions filled in 2026",
            summary: "You've filled 17 positions across 6 departments so far in 2026."
          },
          {
            title: "Hiring by department",
            details: [
              "Administration led with 8 hires",
              "Clinical followed with 5 hires",
              "Accounting, Billing, Marketing and Sales, and Brookfield Fabrication each had 1 hire"
            ]
          }
        ],
        artifactId: "positions-filled-2026",
        preview: "report"
      },
      {
        role: "user",
        body: "What was our average time to fill?"
      },
      {
        role: "assistant",
        body: "The average time to fill was 36 days, with a 31 day median.",
        summaryBlocks: [
          {
            title: "Average time to fill",
            summary: "The average time to fill was 36 days, with a 31 day median across filled positions."
          },
          {
            title: "Time-to-fill drivers",
            details: [
              "Brookfield Fabrication had the longest average at 52 days",
              "Clinical followed at 44 days",
              "Administration moved fastest at 29 days"
            ]
          }
        ],
        artifactId: "positions-average-time-to-fill",
        preview: "report"
      },
      {
        role: "user",
        body: "Can you break the filled positions down by department?"
      },
      {
        role: "assistant",
        body: "I grouped the 17 filled positions by department using normalized HRIS department labels.",
        summaryBlocks: [
          {
            title: "Department breakdown",
            summary: "I grouped the 17 filled positions by department using normalized HRIS department labels."
          },
          {
            title: "Hiring by department",
            details: [
              "Administration accounted for 47% of filled positions",
              "Clinical accounted for 29% of filled positions",
              "The remaining 4 departments each contributed 1 hire"
            ]
          }
        ],
        artifactId: "positions-department-breakdown",
        preview: "report"
      },
      {
        role: "user",
        body: "Which two positions took the longest to fill?"
      },
      {
        role: "assistant",
        body: "The two longest-to-fill positions were Clinical Manager at 74 days and Brookfield Fabrication Specialist at 68 days.",
        summaryBlocks: [
          {
            title: "Longest-to-fill positions",
            summary: "The two longest-to-fill positions were Clinical Manager at 74 days and Brookfield Fabrication Specialist at 68 days."
          },
          {
            title: "What slowed them down",
            details: [
              "Clinical Manager slowed down during final-stage scheduling and compensation review",
              "Brookfield Fabrication Specialist slowed down because of a smaller qualified candidate pool"
            ]
          }
        ],
        artifactId: "positions-longest-to-fill",
        preview: "report"
      },
      {
        role: "user",
        body: "Can we merge the recruiting data with the HRIS data so I can trust the departments and recruiter ownership?"
      },
      {
        role: "assistant",
        body: "I merged ATS requisitions, offer acceptance dates, recruiter ownership, and HRIS worker records.",
        summaryBlocks: [
          {
            title: "Merged recruiting data",
            summary: "I merged ATS requisitions, offer acceptance dates, recruiter ownership, and HRIS worker records."
          },
          {
            title: "Merge quality",
            details: [
              "16 of 17 filled positions matched automatically",
              "1 record needs manual review because the HRIS title changed before close",
              "Department and recruiter ownership now use the merged source-of-truth labels"
            ]
          }
        ],
        artifactId: "positions-merged-dataset",
        preview: "report"
      }
    ]
  }
};

function normalizeHistoryItem(item) {
  return typeof item === "string" ? { label: item } : item;
}

function ChatHistoryPanel({ variant = "rail", closeable = false } = {}) {
  return `
    <aside class="chat-history-panel chat-history-panel--${variant}" data-node-id="1682:16966" aria-label="All chats">
      <div class="chat-history-panel__header">
        <h2>All Chats</h2>
        <div class="chat-history-panel__actions">
          ${iconButton("commentPlus", "New chat", "chat-history-panel__new-chat", 'data-action="new-chat"')}
          ${closeable ? iconButton("close", "Close chats", "chat-history-panel__close", 'data-action="close-chat-history"') : ""}
        </div>
      </div>
      <label class="chat-history-search">
        ${svgIcon("search", 20)}
        <input aria-label="Search chats" placeholder="Search chats" />
      </label>
      <div class="chat-history-panel__sections">
        ${chatHistorySections
          .map(
            (section, index) => `
              <section class="chat-history-section">
                <h3>${section.title}</h3>
                <div class="chat-history-section__items">
                  ${section.items
                    .map((item) => {
                      const historyItem = normalizeHistoryItem(item);
                      const isActive = historyItem.conversationId && prototypeState.activeConversationId === historyItem.conversationId;
                      const conversationAttr = historyItem.conversationId ? `data-conversation-id="${historyItem.conversationId}"` : "";
                      return `<button class="chat-history-item ${isActive ? "is-active" : ""}" type="button" data-action="select-chat-history" ${conversationAttr}>${escapeHtml(historyItem.label)}</button>`;
                    })
                    .join("")}
                </div>
              </section>
              ${index === 0 ? '<div class="chat-history-divider" aria-hidden="true"></div>' : ""}
            `
          )
          .join("")}
      </div>
    </aside>
  `;
}

const artifactItems = [
  {
    id: "positions-filled-2026",
    label: "Positions filled 2026",
    eyebrow: "Hiring summary",
    icon: ArtifactTrayAssets.chart,
    tone: "berry",
    summary: "A merged recruiting and HRIS summary of the 17 positions filled during 2026, grouped by quarter and source department.",
    metrics: [
      { value: "17", label: "positions filled" },
      { value: "36d", label: "average time to fill" },
      { value: "6", label: "departments represented" }
    ],
    tablePreview: {
      title: "Positions filled by quarter",
      compactRows: 4,
      columns: [
        { key: "quarter", label: "Quarter", width: "104px" },
        { key: "filled", label: "Filled", type: "link", width: "96px" },
        { key: "share", label: "Share", width: "88px", compact: false },
        { key: "topDepartment", label: "Top department", width: "164px" },
        { key: "status", label: "Status", type: "status", width: "120px", compact: false }
      ],
      rows: [
        { quarter: "Q1", filled: "3 roles", share: "18%", topDepartment: "Administration", status: { label: "Complete", tone: "success" } },
        { quarter: "Q2", filled: "5 roles", share: "29%", topDepartment: "Clinical", status: { label: "Complete", tone: "success" } },
        { quarter: "Q3", filled: "6 roles", share: "35%", topDepartment: "Administration", status: { label: "Complete", tone: "success" } },
        { quarter: "Q4", filled: "3 roles", share: "18%", topDepartment: "Clinical", status: { label: "Complete", tone: "success" } }
      ]
    },
    sections: [
      {
        title: "Scope",
        body: "Includes requisitions marked filled in 2026 and matched to active worker records created from accepted offers."
      },
      {
        title: "Merge logic",
        body: "Matched ATS requisition IDs to HRIS position IDs first, then used candidate email and start date as secondary keys for changed requisition titles."
      },
      {
        title: "Headline",
        body: "Hiring peaked in Q3 with 6 filled positions, then slowed in Q4 after the operating plan reset."
      }
    ]
  },
  {
    id: "positions-average-time-to-fill",
    label: "Average time to fill",
    eyebrow: "Time-to-fill report",
    icon: ArtifactTrayAssets.lightning,
    tone: "berry",
    summary: "A report showing average and median time to fill across the year, with department-level variance called out.",
    metrics: [
      { value: "36d", label: "average time to fill" },
      { value: "31d", label: "median time to fill" },
      { value: "+16d", label: "fabrication vs company avg" }
    ],
    tablePreview: {
      title: "Average days to fill by department",
      compactRows: 4,
      columns: [
        { key: "department", label: "Department", width: "180px" },
        { key: "avgFill", label: "Avg fill", type: "link", width: "96px" },
        { key: "variance", label: "Variance", width: "96px", compact: false },
        { key: "filled", label: "Filled", width: "88px", compact: false },
        { key: "status", label: "Status", type: "status", width: "120px" }
      ],
      rows: [
        { department: "Administration", avgFill: "29d", variance: "-7d", filled: "8 roles", status: { label: "Fastest", tone: "success" } },
        { department: "Clinical", avgFill: "44d", variance: "+8d", filled: "5 roles", status: { label: "Watch", tone: "warning" } },
        { department: "Accounting", avgFill: "33d", variance: "-3d", filled: "1 role", status: { label: "Complete", tone: "success" } },
        { department: "Billing", avgFill: "28d", variance: "-8d", filled: "1 role", status: { label: "Complete", tone: "success" } },
        { department: "Marketing and Sales", avgFill: "36d", variance: "0d", filled: "1 role", status: { label: "Complete", tone: "success" } },
        { department: "Brookfield Fabrication", avgFill: "52d", variance: "+16d", filled: "1 role", status: { label: "Watch", tone: "warning" } }
      ]
    },
    sections: [
      {
        title: "Calculation",
        body: "Measured from requisition approval date to accepted offer date, excluding paused requisitions from paused days."
      },
      {
        title: "Observation",
        body: "Brookfield Fabrication and Clinical roles created the longest cycle times, while Administration roles closed fastest due to larger qualified applicant pools."
      },
      {
        title: "Recommendation",
        body: "Separate clinical and fabrication roles from general administrative roles when reviewing hiring SLA performance."
      }
    ]
  },
  {
    id: "positions-department-breakdown",
    label: "Department breakdown",
    eyebrow: "Department report",
    icon: ArtifactTrayAssets.chart,
    tone: "berry",
    summary: "A department-level breakdown of 2026 filled positions after normalizing ATS department names to HRIS departments.",
    metrics: [
      { value: "8", label: "administration fills" },
      { value: "5", label: "clinical fills" },
      { value: "4", label: "other department fills" }
    ],
    tablePreview: {
      title: "Filled positions by department",
      compactRows: 4,
      columns: [
        { key: "department", label: "Department", width: "180px" },
        { key: "filled", label: "Filled", type: "link", width: "96px" },
        { key: "avgFill", label: "Avg fill", width: "96px" },
        { key: "share", label: "Share", width: "88px", compact: false },
        { key: "owner", label: "Recruiting owner", width: "160px", compact: false },
        { key: "status", label: "Status", type: "status", width: "132px", compact: false }
      ],
      rows: [
        { department: "Administration", filled: "8 roles", avgFill: "29d", share: "47%", owner: "Maya Lee", status: { label: "Complete", tone: "success" } },
        { department: "Clinical", filled: "5 roles", avgFill: "44d", share: "29%", owner: "Priya Shah", status: { label: "Watch", tone: "warning" } },
        { department: "Accounting", filled: "1 role", avgFill: "33d", share: "6%", owner: "Nora Kim", status: { label: "Complete", tone: "success" } },
        { department: "Billing", filled: "1 role", avgFill: "28d", share: "6%", owner: "Nora Kim", status: { label: "Complete", tone: "success" } },
        { department: "Marketing and Sales", filled: "1 role", avgFill: "36d", share: "6%", owner: "Andre Price", status: { label: "Complete", tone: "success" } },
        { department: "Brookfield Fabrication", filled: "1 role", avgFill: "52d", share: "6%", owner: "Maya Lee", status: { label: "Watch", tone: "warning" } }
      ]
    },
    sections: [
      {
        title: "Normalization",
        body: "Mapped ATS department values to HRIS departments so renamed teams and nested cost centers did not split counts."
      },
      {
        title: "Largest groups",
        body: "Administration and Clinical made up roughly three-quarters of 2026 filled positions."
      },
      {
        title: "Review note",
        body: "Accounting, Billing, Marketing and Sales, and Brookfield Fabrication each had one filled position."
      }
    ]
  },
  {
    id: "positions-longest-to-fill",
    label: "Longest-to-fill roles",
    eyebrow: "Outlier report",
    icon: ArtifactTrayAssets.lightning,
    tone: "red",
    summary: "A focused outlier report identifying the two positions that took the longest to fill and the stage delays behind them.",
    metrics: [
      { value: "74d", label: "Clinical Manager" },
      { value: "68d", label: "Fabrication Specialist" },
      { value: "52d", label: "next longest role" }
    ],
    tablePreview: {
      title: "Longest time to fill",
      compactRows: 4,
      columns: [
        { key: "position", label: "Position", width: "196px" },
        { key: "days", label: "Days", type: "link", width: "80px" },
        { key: "department", label: "Department", width: "156px" },
        { key: "driver", label: "Driver", width: "188px", compact: false },
        { key: "status", label: "Status", type: "status", width: "120px", compact: false }
      ],
      rows: [
        { position: "Clinical Manager", days: "74d", department: "Clinical", driver: "Scheduling and comp review", status: { label: "Watch", tone: "warning" } },
        { position: "Fabrication Specialist", days: "68d", department: "Brookfield Fabrication", driver: "Small candidate pool", status: { label: "Watch", tone: "warning" } },
        { position: "Registered Nurse", days: "52d", department: "Clinical", driver: "Final interview timing", status: { label: "Complete", tone: "success" } },
        { position: "Admin Coordinator", days: "45d", department: "Administration", driver: "Offer timing", status: { label: "Complete", tone: "success" } }
      ]
    },
    sections: [
      {
        title: "Top outlier",
        body: "Clinical Manager took 74 days due to final-stage scheduling gaps and a late compensation band adjustment."
      },
      {
        title: "Second outlier",
        body: "Brookfield Fabrication Specialist took 68 days, mostly from a small qualified candidate pool and offer negotiation."
      },
      {
        title: "Action",
        body: "Flag roles after 45 days open and require a recruiter and hiring manager reset on criteria, comp range, and interview availability."
      }
    ]
  },
  {
    id: "positions-merged-dataset",
    label: "Merged recruiting data",
    eyebrow: "Merged data artifact",
    icon: ArtifactTrayAssets.document,
    tone: "berry",
    summary: "A read-only merge artifact that combines ATS requisitions, offers, recruiter ownership, and HRIS worker records.",
    metrics: [
      { value: "4", label: "data sources merged" },
      { value: "16", label: "auto-matched records" },
      { value: "1", label: "manual review record" }
    ],
    tablePreview: {
      title: "Recruiting and HRIS merge",
      compactRows: 4,
      columns: [
        { key: "source", label: "Source", width: "170px" },
        { key: "records", label: "Records", type: "link", width: "96px" },
        { key: "matchRate", label: "Match rate", width: "104px", compact: false },
        { key: "status", label: "Status", type: "status", width: "130px" },
        { key: "action", label: "Action", width: "180px", compact: false }
      ],
      rows: [
        { source: "ATS requisitions", records: "17 rows", matchRate: "100%", status: { label: "Complete", tone: "success" }, action: "Primary key: requisition ID" },
        { source: "Offer acceptances", records: "17 rows", matchRate: "100%", status: { label: "Complete", tone: "success" }, action: "Matched by candidate email" },
        { source: "HRIS worker records", records: "16 rows", matchRate: "94%", status: { label: "Review", tone: "warning" }, action: "One title change needs review" },
        { source: "Recruiter ownership", records: "17 rows", matchRate: "100%", status: { label: "Complete", tone: "success" }, action: "Owner mapped from requisition" },
        { source: "Department mapping", records: "6 teams", matchRate: "100%", status: { label: "Complete", tone: "success" }, action: "Normalized to HRIS department" }
      ]
    },
    sections: [
      {
        title: "Sources",
        body: "Merged ATS requisitions, offer acceptance dates, recruiter ownership, and HRIS worker and department records."
      },
      {
        title: "Match keys",
        body: "Used requisition ID, position ID, candidate email, and start date to preserve matches when requisition titles changed."
      },
      {
        title: "Open review",
        body: "One record needs manual review because the final HRIS position title differed from the original approved requisition title."
      }
    ]
  },
  {
    id: "hours-policy",
    label: "40+ hour reduction policy",
    eyebrow: "Policy document",
    icon: ArtifactTrayAssets.document,
    tone: "berry",
    summary: "A draft policy artifact focused on reducing sustained 40+ hour workweeks while preserving urgent coverage needs.",
    metrics: [
      { value: "40", label: "weekly hour review threshold" },
      { value: "2", label: "consecutive weeks before manager review" },
      { value: "30d", label: "follow-up window" }
    ],
    sections: [
      {
        title: "Policy intent",
        body: "Flag sustained overtime early, redistribute work before it becomes normal, and require manager follow-up for employees repeatedly exceeding 40 hours."
      },
      {
        title: "Manager actions",
        body: "Review workload drivers, pause nonessential requests, adjust staffing or deadlines, and document the mitigation plan when an employee crosses the threshold."
      },
      {
        title: "Exception handling",
        body: "Allow temporary exceptions for critical business events, with an owner, end date, and recovery plan for the affected employees."
      }
    ]
  },
  {
    id: "time-attendance-report",
    label: "Start and Finish Times report",
    eyebrow: "T&A report",
    icon: ArtifactTrayAssets.chart,
    tone: "red",
    summary: "A time and attendance report artifact showing daily start times, finish times, shift duration, and exceptions.",
    metrics: [
      { value: "183", label: "shifts reviewed" },
      { value: "14", label: "missing finish times" },
      { value: "9", label: "early start exceptions" }
    ],
    reportPreview: {
      title: "Start and finish times",
      yLabel: "Average hours",
      xLabel: "This week",
      ticks: [10, 8, 6, 4, 2, 0],
      bars: [
        { label: "Mon", value: 8.5 },
        { label: "Tue", value: 7.2 },
        { label: "Wed", value: 5.5 },
        { label: "Thu", value: 8.5 },
        { label: "Fri", value: 8.5 }
      ]
    },
    sections: [
      {
        title: "Report fields",
        body: "Employee, department, work date, start time, finish time, scheduled hours, actual hours, and exception reason."
      },
      {
        title: "Suggested filters",
        body: "Pay period, location, department, hourly or salaried status, missing punches, and shifts longer than scheduled."
      },
      {
        title: "Output",
        body: "Group rows by employee with subtotals for actual hours and exception counts so payroll and managers can review quickly."
      }
    ]
  },
  {
    id: "benefits-pdf",
    label: "Benefits summary PDF",
    eyebrow: "Benefits document",
    icon: ArtifactTrayAssets.document,
    tone: "berry",
    summary: "A PDF-ready benefits summary covering current medical, dental, vision, retirement, and spending account elections.",
    responseSummaryBlocks: [
      {
        title: "Benefits PDF",
        summary: "I found your current benefits summary and prepared a PDF artifact for review."
      }
    ],
    metrics: [
      { value: "8", label: "PDF pages" },
      { value: "5", label: "benefit categories" },
      { value: "2026", label: "plan year" }
    ],
    pdfPreview: {
      title: "Benefits summary",
      typeLabel: "PDF",
      date: "June 4th, 2026",
      actionLabel: "Open",
      description: "Current plan elections, coverage levels, payroll deductions, and key enrollment dates.",
      meta: ["8 pages", "Updated Jun 4, 2026", "Benefits"]
    },
    sections: [
      {
        title: "Included sections",
        body: "Medical, dental, vision, HSA/FSA, retirement contributions, beneficiaries, and enrollment contacts."
      },
      {
        title: "Coverage summary",
        body: "Shows each elected plan, coverage tier, employee cost, employer contribution, and effective date."
      },
      {
        title: "Next step",
        body: "Open the PDF artifact to review the details before sharing or downloading."
      }
    ]
  },
  {
    id: "multiple-links",
    label: "Multiple links",
    eyebrow: "External links",
    icon: ArtifactTrayAssets.document,
    tone: "berry",
    summary: "A grouped list of external resources returned as link cards.",
    responseLayout: "linkList",
    linkListTitle: "Related links",
    linkListSummary: "Here are a few resources that may be useful.",
    externalLinks: [
      {
        title: "Benefits summary",
        meta: "PDF · Updated June 4th, 2026",
        type: "pdf"
      },
      {
        title: "Open enrollment checklist",
        meta: "PDF · 6 pages",
        type: "pdf"
      },
      {
        title: "Medical plan comparison",
        meta: "Document · Current plan year",
        type: "document"
      },
      {
        title: "HSA and FSA contribution guide",
        meta: "Document · 2026 limits",
        type: "document"
      }
    ],
    sections: [
      {
        title: "Use case",
        body: "Shows how a chat answer can return several external resources without treating every link as a generated artifact."
      }
    ]
  },
  {
    id: "turnover-rate-year",
    label: "Turnover rate, 2026",
    eyebrow: "Workforce report",
    icon: ArtifactTrayAssets.chart,
    tone: "berry",
    summary: "A yearly turnover report showing monthly turnover rate and month-over-month change so HR can spot where attrition accelerated.",
    metrics: [
      { value: "14.2%", label: "yearly turnover rate" },
      { value: "31", label: "employee exits" },
      { value: "250", label: "average headcount" }
    ],
    responseLayout: "turnoverNarrative",
    responseNarrative: {
      metric: "14.2%",
      title: "Turnover is currently up by 3%",
      paragraphs: [
        "Your turnover rate for 2026 was 14.2%, up from 11.8% in 2025. Attrition climbed steadily across the year, with the sharpest acceleration between Q2 and Q3 — suggesting the increase wasn't seasonal and may reflect something structural happening mid-year.",
        "Engineering and Operations drove most of the change. If the current trend continues into 2027, you're on pace to exceed 16% annually, which would put meaningful pressure on headcount planning and recruiting costs."
      ],
      recommendationTitle: "Recommended action",
      recommendation: "Worth reviewing exit reasons for Q3 and Q4 before setting targets for next year, particularly in those two departments."
    },
    tablePreview: {
      title: "Turnover rate, 2026",
      displayStyle: "turnover",
      compactRows: 6,
      columns: [
        { key: "month", label: "Month", width: "33%" },
        { key: "rate", label: "%", type: "number", width: "33%" },
        { key: "change", label: "Change", type: "delta", width: "34%" }
      ],
      rows: [
        { month: "January", rate: "1%", change: "-1%" },
        { month: "February", rate: "2%", change: "+1%" },
        { month: "March", rate: "1%", change: "-1%" },
        { month: "April", rate: "2%", change: "+1%" },
        { month: "May", rate: "1%", change: "-1%" },
        { month: "June", rate: "1%", change: "0%" }
      ]
    },
    sections: [
      {
        title: "Calculation",
        body: "Annual turnover is calculated as employee exits divided by average headcount, with monthly change shown against the prior month."
      },
      {
        title: "Trend",
        body: "Turnover increased most sharply between Q2 and Q3, with Engineering and Operations driving most of the change."
      },
      {
        title: "Recommended next step",
        body: "Break the Q3 and Q4 exits down by department, manager, tenure band, and regrettable attrition flag."
      }
    ]
  },
  {
    id: "employee-utilization-review",
    label: "Employee utilization review",
    eyebrow: "Utilization analysis",
    icon: ArtifactTrayAssets.document,
    tone: "berry",
    summary: "A utilization table identifying employees who are below or above target utilization based on scheduled capacity and actual assigned work.",
    responseSummaryBlocks: [
      {
        title: "Utilization review",
        summary: "I found 12 employees outside their target utilization band based on scheduled capacity versus assigned work."
      }
    ],
    responseInsight: "You'll get more from this response by logging hours consistently in T&A",
    responseMetrics: [
      { value: "7", label: "under-utilized employees" },
      { value: "5", label: "over-utilized employees" },
      { value: "82%", label: "median utilization" }
    ],
    tablePreview: {
      title: "Under and over utilized employees",
      displayStyle: "tracker",
      compactRows: 5,
      columns: [
        { key: "employee", label: "Employee", width: "168px" },
        { key: "department", label: "Department", width: "132px" },
        { key: "utilization", label: "Utilization", type: "utilization", width: "118px" },
        { key: "target", label: "Target", width: "84px", compact: false },
        { key: "status", label: "Status", type: "status", width: "118px" },
        { key: "action", label: "Action", width: "188px", compact: false }
      ],
      rows: [
        { employee: "Alex Morgan", department: "Clinical", utilization: { value: "118%", trend: "up" }, target: "85%", status: { label: "Over", tone: "warning" }, action: "Rebalance high-acuity shifts" },
        { employee: "Priya Shah", department: "Administration", utilization: { value: "112%", trend: "up" }, target: "85%", status: { label: "Over", tone: "warning" }, action: "Shift project work to open capacity" },
        { employee: "Nora Kim", department: "Billing", utilization: { value: "107%", trend: "up" }, target: "85%", status: { label: "Over", tone: "warning" }, action: "Review backlog ownership" },
        { employee: "Miles Carter", department: "Marketing and Sales", utilization: { value: "51%", trend: "down" }, target: "80%", status: { label: "Under", tone: "neutral" }, action: "Assign campaign analysis" },
        { employee: "Sam Rivera", department: "Accounting", utilization: { value: "58%", trend: "down" }, target: "80%", status: { label: "Under", tone: "neutral" }, action: "Add close support tasks" },
        { employee: "Taylor Chen", department: "Clinical", utilization: { value: "62%", trend: "down" }, target: "85%", status: { label: "Under", tone: "neutral" }, action: "Review schedule availability" }
      ]
    },
    dashboardDetail: {
      title: "Employee Utilization - Review",
      viewedAs: "Viewing as Nick (Owner)",
      lastUpdated: "about 1 month ago",
      filters: [
        { label: "Saved filters", value: "New", icon: "document" },
        { label: "Date range", value: "Current calendar year" }
      ],
      lineChart: {
        title: "Utilization, over time",
        yLabel: "Median utilization",
        xLabel: "Timestamp (Year and Month)",
        max: 120,
        ticks: ["120%", "100%", "80%", "60%", "40%", "20%", "0"],
        points: [
          { label: "Jan 2026", value: 76 },
          { label: "Feb 2026", value: 81 },
          { label: "Mar 2026", value: 84 },
          { label: "Apr 2026", value: 79 },
          { label: "May 2026", value: 82 }
        ]
      },
      barChart: {
        title: "Utilization, by department",
        yLabel: "Employee count",
        xLabel: "Department",
        max: 12,
        ticks: ["12", "9", "6", "3", "0"],
        segments: [
          { key: "target", label: "At target", color: "#ffac1a" },
          { key: "under", label: "Under-utilized", color: "#2f6fbd" },
          { key: "over", label: "Over-utilized", color: "#a10f72" }
        ],
        bars: [
          { label: "Clinical", values: { target: 7, under: 2, over: 2 } },
          { label: "Admin", values: { target: 5, under: 1, over: 1 } },
          { label: "Billing", values: { target: 4, under: 1, over: 1 } },
          { label: "Sales", values: { target: 3, under: 2, over: 1 } },
          { label: "Accounting", values: { target: 2, under: 1, over: 0 } }
        ]
      },
      tables: [
        {
          title: "Employees outside target band",
          meta: "12 rows",
          columns: ["Employee", "Department", "Utilization", "Target", "Status", "Action"],
          rows: [
            ["Alex Morgan", "Clinical", "118%", "85%", "Over", "Rebalance high-acuity shifts"],
            ["Priya Shah", "Administration", "112%", "85%", "Over", "Shift project work to open capacity"],
            ["Nora Kim", "Billing", "107%", "85%", "Over", "Review backlog ownership"],
            ["Miles Carter", "Marketing and Sales", "51%", "80%", "Under", "Assign campaign analysis"],
            ["Sam Rivera", "Accounting", "58%", "80%", "Under", "Add close support tasks"],
            ["Taylor Chen", "Clinical", "62%", "85%", "Under", "Review schedule availability"]
          ]
        },
        {
          title: "Highest utilization variance",
          meta: "Showing 1-6 of 12",
          columns: ["Group", "Variance", "Employees"],
          rows: [
            ["All", "+33 pts", "12"],
            ["Over-utilized", "+27 pts", "5"],
            ["Under-utilized", "-26 pts", "7"],
            ["Clinical", "+18 pts", "4"],
            ["Administration", "+14 pts", "2"],
            ["Marketing and Sales", "-29 pts", "2"]
          ],
          pagination: ["1", "2", "3", "...", "6"]
        }
      ]
    },
    sections: [
      {
        title: "Method",
        body: "Compared assigned work hours against planned available capacity for the current year, then flagged employees outside the utilization band."
      },
      {
        title: "Over-utilized group",
        body: "Employees above target are concentrated in Clinical, Administration, and Billing, where urgent work is pulling capacity forward."
      },
      {
        title: "Under-utilized group",
        body: "Employees below target have enough available capacity to absorb project work or coverage from over-utilized teammates."
      }
    ]
  },
  {
    id: "promotion-review",
    label: "Promotion review workflow",
    eyebrow: "Workflow",
    icon: ArtifactTrayAssets.lightning,
    tone: "berry",
    summary: "A workflow that identifies active employees who have not had a promotion recorded in the last two years and routes them into manager calibration.",
    responseSummaryBlocks: [
      {
        title: "Promotion review workflow",
        summary: "I created a workflow to identify employees who have not been promoted in the last 2 years and route them into manager review."
      }
    ],
    metrics: [
      { value: "42", label: "employees identified" },
      { value: "18", label: "over 30 months since promotion" },
      { value: "6", label: "high performers to review" }
    ],
    workflowPreview: {
      title: "Workflow",
      triggerTitle: "When it will run",
      trigger: "Talent review cycle starts and active employees have no promotion recorded in the last 24 months",
      actionTitle: "What it will do",
      action: "Creates a promotion review list, enriches each employee with performance and compensation context, and sends manager calibration tasks for high-priority candidates.",
      linkLabel: "View workflow"
    },
    workflowDetail: {
      title: "Identify employees not promoted in last 2 years",
      createdBy: "Terri Clark",
      lastVersionCreatedOn: "May 27, 2026, 2:39 PM CST",
      version: "v4",
      nodes: [
        {
          icon: "sparkle",
          title: "Workflow trigger",
          description: "Talent review cycle starts",
          meta: "Some filter(s) applied"
        },
        {
          icon: "data",
          title: "Query Rippling data",
          description: "Find active employees without promotion in 24 months"
        },
        {
          icon: "data",
          title: "Query Rippling data",
          description: "Add latest rating, level, and compa-ratio"
        },
        {
          icon: "document",
          title: "Create review artifact",
          description: "Build promotion calibration candidate list"
        },
        {
          icon: "chat",
          title: "Notify managers",
          description: "Send calibration tasks to managers"
        }
      ]
    },
    sections: [
      {
        title: "Identification logic",
        body: "Include active employees whose last promotion date is blank or older than 24 months, excluding new hires and employees already in an open promotion cycle."
      },
      {
        title: "Review columns",
        body: "Employee, manager, department, level, tenure, last promotion date, last rating, compa-ratio, and recommended next action."
      },
      {
        title: "Follow-up",
        body: "Prioritize high performers and long-tenured employees for manager calibration before the next talent review."
      }
    ]
  }
];

function getArtifactById(artifactId) {
  return artifactItems.find((item) => item.id === artifactId);
}

function isTrayArtifact(artifactId) {
  const artifact = getArtifactById(artifactId);
  return Boolean(artifact && (artifact.reportPreview || artifact.tablePreview || artifact.workflowPreview || artifact.pdfPreview || artifact.dashboardDetail));
}

function getEditingArtifactId() {
  return prototypeState.editingArtifactId || prototypeState.workbenchArtifactId || (prototypeState.artifactSurfaceMode === "edit" ? prototypeState.activeArtifactId : null);
}

function isArtifactPromoted(artifactId) {
  return Boolean(artifactId && (prototypeState.artifactTrayIds.includes(artifactId) || getEditingArtifactId() === artifactId));
}

function getTrayArtifactIds(artifactIds) {
  return getValidArtifactIds(artifactIds).filter(isTrayArtifact);
}

function getCurrentArtifactItems() {
  return prototypeState.artifactTrayIds.map(getArtifactById).filter(Boolean);
}

function ArtifactTray({ mode = "component" } = {}) {
  const items = getCurrentArtifactItems();
  const trayHeight = Math.min(88 + Math.max(items.length, 1) * 30, 360);
  const isSidebarTray = mode === "sidebar";
  return `
    <aside class="artifact-tray artifact-tray--${mode} ${items.length > 3 ? "artifact-tray--has-many" : ""}" style="--artifact-tray-height: ${trayHeight}px" data-node-id="1682:16369" aria-label="Artifacts">
      <div class="artifact-tray__content">
        <div class="artifact-tray__header">
          <h2>Artifacts</h2>
          ${isSidebarTray ? `<span class="artifact-tray__count" aria-label="${items.length} artifacts">${items.length}</span>` : ""}
        </div>
        <div class="artifact-tray__list">
          ${
            items.length
              ? items
                  .map(
                    (item) => `
                      <button class="artifact-item" type="button" data-artifact-id="${item.id}">
                        <span class="artifact-item__icon artifact-item__icon--${item.tone}">
                          <img src="${item.icon}" alt="" />
                        </span>
                        <span class="artifact-item__label">${escapeHtml(item.label)}</span>
                      </button>
                    `
                  )
                  .join("")
              : '<p class="artifact-empty">Generated artifacts will appear here.</p>'
          }
        </div>
      </div>
      ${
        isSidebarTray
          ? ""
          : `
            <button class="artifact-tray__close" type="button" aria-label="Close artifacts" title="Close artifacts" data-action="hide-artifact-tray">
              ${svgIcon("close", 18)}
            </button>
          `
      }
    </aside>
  `;
}

function ArtifactTakeoverPanel({ mode = "sidebar", variant = "takeover" } = {}) {
  const items = getCurrentArtifactItems();
  const variantClassByMode = {
    bottomSheet: " artifact-takeover--bottom-sheet",
    pushUp: " artifact-takeover--push-up",
    sideCar: " artifact-takeover--side-car"
  };
  const variantClass = variantClassByMode[variant] || "";
  const isPushUp = variant === "pushUp";
  const showArtifactCount = false;
  const toggleLabel = prototypeState.artifactTrayOpen ? "Collapse artifacts" : "Expand artifacts";
  const headerAction = isPushUp
    ? ""
    : iconButton("close", "Close artifacts", "artifact-takeover__close", 'data-action="hide-artifact-tray"');
  return `
    <aside class="artifact-takeover artifact-takeover--${mode}${variantClass} ${prototypeState.artifactTrayOpen ? "is-open" : "is-hidden"}" aria-label="Artifacts" ${isPushUp ? 'data-node-id="2014:32301"' : ""}>
      <div class="artifact-takeover__header">
        <div class="artifact-takeover__title">
          <p>Artifacts</p>
          ${showArtifactCount ? `<span class="artifact-takeover__count" aria-label="${items.length} artifacts">${items.length}</span>` : ""}
        </div>
        ${headerAction}
      </div>
      <div class="artifact-takeover__list">
        ${
          items.length
            ? items
                .map(
                  (item) => `
                    <button class="artifact-takeover-item" type="button" data-artifact-id="${item.id}">
                      ${
                        isPushUp
                          ? `<span class="artifact-dropdown-icon">${svgIcon("barChart", 16)}</span>`
                          : `
                            <span class="artifact-item__icon artifact-item__icon--${item.tone}">
                              <img src="${item.icon}" alt="" />
                            </span>
                          `
                      }
                      <span>
                        <strong>${escapeHtml(item.label)}</strong>
                        <small>${escapeHtml(item.eyebrow)}</small>
                      </span>
                    </button>
                  `
                )
                .join("")
            : '<p class="artifact-takeover__empty">Generated artifacts will appear here.</p>'
        }
      </div>
    </aside>
  `;
}

function getActiveArtifact() {
  return getArtifactById(prototypeState.activeArtifactId) || getCurrentArtifactItems()[0] || artifactItems[0];
}

function ArtifactTabs() {
  const items = getCurrentArtifactItems();
  return `
    <div class="artifact-tabs" data-node-id="1685:17063" aria-label="Open artifacts">
      <div class="artifact-tabs__list" role="tablist" aria-label="Artifacts">
        ${items
          .map(
            (item) => `
              <button
                class="artifact-tab ${prototypeState.activeArtifactId === item.id ? "is-active" : ""}"
                type="button"
                role="tab"
                aria-selected="${prototypeState.activeArtifactId === item.id}"
                data-artifact-tab-id="${item.id}"
              >
                <span class="artifact-tab__icon artifact-tab__icon--${item.tone}">
                  <img src="${item.icon}" alt="" />
                </span>
                <span class="artifact-tab__label">${escapeHtml(item.label)}</span>
              </button>
            `
          )
          .join('<span class="artifact-tab-divider" aria-hidden="true"></span>')}
      </div>
      ${iconButton("close", "Close artifact", "artifact-tabs__close", 'data-action="close-artifact"')}
    </div>
  `;
}

function ArtifactReaderFooter(artifact) {
  return `
    <div class="artifact-reader__footer" aria-label="Artifact actions">
      <div class="artifact-reader__footer-actions">
        <button class="artifact-reader__action" type="button" data-action="edit-artifact-modal" data-artifact-id="${artifact.id}">
          Edit
        </button>
        <button class="artifact-reader__action" type="button" data-action="close-artifact">
          Close
        </button>
      </div>
    </div>
  `;
}

function DashboardToolbarButton({ icon, label, variant = "" } = {}) {
  return `
    <button class="dashboard-detail__toolbar-button ${variant ? `dashboard-detail__toolbar-button--${variant}` : ""}" type="button" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}">
      ${icon ? svgIcon(icon, 16) : ""}
      ${label === "Share" ? `<span>${escapeHtml(label)}</span>` : ""}
    </button>
  `;
}

function DashboardCardMenu() {
  return `
    <div class="dashboard-card__menu" aria-hidden="true">
      <span>${svgIcon("sliders", 14)}</span>
      <span class="dashboard-card__badge">1</span>
      <span>${svgIcon("more", 14)}</span>
    </div>
  `;
}

function DashboardLineChart({ chart } = {}) {
  if (!chart) return "";

  const points = (chart.points || []).map((point, index, list) => {
    const x = list.length > 1 ? (index / (list.length - 1)) * 100 : 50;
    const y = 100 - Math.max(0, Math.min(100, (point.value / chart.max) * 100));
    return { ...point, x, y };
  });
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");

  return `
    <section class="dashboard-card dashboard-card--chart">
      <header class="dashboard-card__header">
        <h4>${escapeHtml(chart.title)}</h4>
        ${DashboardCardMenu()}
      </header>
      <div class="dashboard-line-chart" aria-label="${escapeHtml(chart.title)} chart">
        <div class="dashboard-chart__y-label">${escapeHtml(chart.yLabel)}</div>
        <div class="dashboard-chart__plot">
          <div class="dashboard-chart__ticks" aria-hidden="true">
            ${(chart.ticks || []).map((tick) => `<span><b>${escapeHtml(tick)}</b><i></i></span>`).join("")}
          </div>
          <svg class="dashboard-line-chart__svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="${pointString}" />
          </svg>
          ${points
            .map(
              (point) => `
                <span class="dashboard-line-chart__point" style="--x: ${point.x}%; --y: ${point.y}%">
                  <i>${escapeHtml(`${point.value}%`)}</i>
                </span>
              `
            )
            .join("")}
        </div>
        <div class="dashboard-chart__x-label">${escapeHtml(chart.xLabel)}</div>
        <div class="dashboard-chart__axis-labels">
          ${points.map((point) => `<span>${escapeHtml(point.label)}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function DashboardBarChart({ chart } = {}) {
  if (!chart) return "";

  return `
    <section class="dashboard-card dashboard-card--chart">
      <header class="dashboard-card__header">
        <h4>${escapeHtml(chart.title)}</h4>
        ${DashboardCardMenu()}
      </header>
      <div class="dashboard-bar-chart" aria-label="${escapeHtml(chart.title)} chart">
        <div class="dashboard-chart__y-label">${escapeHtml(chart.yLabel)}</div>
        <div class="dashboard-chart__plot">
          <div class="dashboard-chart__ticks" aria-hidden="true">
            ${(chart.ticks || []).map((tick) => `<span><b>${escapeHtml(tick)}</b><i></i></span>`).join("")}
          </div>
          <div class="dashboard-bar-chart__bars">
            ${(chart.bars || [])
              .map((bar) => {
                const total = (chart.segments || []).reduce((sum, segment) => sum + (bar.values[segment.key] || 0), 0);
                const barHeight = Math.max(8, Math.min(100, (total / chart.max) * 100));
                return `
                  <span class="dashboard-bar-chart__bar-column">
                    <span class="dashboard-bar-chart__bar" style="height: ${barHeight}%">
                      ${(chart.segments || [])
                        .map((segment) => {
                          const value = bar.values[segment.key] || 0;
                          const height = total ? (value / total) * 100 : 0;
                          return `<i title="${escapeHtml(segment.label)}" style="height: ${height}%; background: ${segment.color}">${value ? escapeHtml(value) : ""}</i>`;
                        })
                        .join("")}
                    </span>
                    <b>${escapeHtml(bar.label)}</b>
                  </span>
                `;
              })
              .join("")}
          </div>
        </div>
        <div class="dashboard-chart__x-label">${escapeHtml(chart.xLabel)}</div>
        <div class="dashboard-chart__legend">
          ${(chart.segments || [])
            .map((segment) => `<span><i style="background: ${segment.color}"></i>${escapeHtml(segment.label)}</span>`)
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function DashboardTableCard({ table } = {}) {
  if (!table) return "";

  return `
    <section class="dashboard-card dashboard-card--table">
      <header class="dashboard-card__header">
        <h4>${escapeHtml(table.title)}</h4>
        ${DashboardCardMenu()}
      </header>
      <div class="dashboard-table__meta">${escapeHtml(table.meta || "")}</div>
      <div class="dashboard-table__scroller">
        <table>
          <thead>
            <tr>
              ${(table.columns || []).map((column) => `<th><span>${escapeHtml(column)}</span></th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${(table.rows || [])
              .map(
                (row) => `
                  <tr>
                    ${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
      ${
        table.pagination?.length
          ? `
            <div class="dashboard-table__pagination" aria-label="Table pages">
              ${svgIcon("chevronRight", 14)}
              ${table.pagination
                .map((page, index) => `<span class="${index === 0 ? "is-active" : ""}">${escapeHtml(page)}</span>`)
                .join("")}
              ${svgIcon("chevronRight", 14)}
            </div>
          `
          : ""
      }
    </section>
  `;
}

function DashboardDetailView({ artifact } = {}) {
  const detail = artifact.dashboardDetail || {};

  return `
    <div class="dashboard-detail">
      <section class="dashboard-detail__top-card">
        <div class="dashboard-detail__title-row">
          <div class="dashboard-detail__title-group">
            <h3>${escapeHtml(detail.title || artifact.label)}</h3>
            <span class="dashboard-detail__viewer">
              <i aria-hidden="true">N</i>
              ${escapeHtml(detail.viewedAs || "Viewing as Owner")}
              ${svgIcon("chevronDown", 12)}
            </span>
          </div>
          <div class="dashboard-detail__toolbar">
            <span class="dashboard-detail__updated">${svgIcon("help", 14)} ${escapeHtml(detail.lastUpdated || "about 1 month ago")}</span>
            ${DashboardToolbarButton({ icon: "chat", label: "Comments" })}
            ${DashboardToolbarButton({ icon: "sliders", label: "Filters", variant: "selected" })}
            ${DashboardToolbarButton({ icon: "more", label: "More" })}
            ${DashboardToolbarButton({ icon: "users", label: "Share", variant: "share" })}
          </div>
        </div>
        <div class="dashboard-detail__filters">
          ${(detail.filters || [])
            .map(
              (filter) => `
                <div>
                  <span>${escapeHtml(filter.label)}</span>
                  <button type="button">
                    ${filter.icon ? svgIcon(filter.icon, 13) : ""}
                    ${escapeHtml(filter.value)}
                  </button>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <div class="dashboard-detail__grid">
        ${DashboardLineChart({ chart: detail.lineChart })}
        ${DashboardBarChart({ chart: detail.barChart })}
        ${(detail.tables || []).map((table) => DashboardTableCard({ table })).join("")}
      </div>
    </div>
  `;
}

function WorkflowDetailView({ artifact, includeClose = true } = {}) {
  const detail = artifact.workflowDetail || {};
  const nodes = detail.nodes || [];

  return `
    <div class="workflow-detail">
      ${
        includeClose
          ? `
            <button class="icon-button workflow-detail__close" type="button" data-action="close-artifact" aria-label="Close workflow" title="Close workflow">
              ${svgIcon("close", 18)}
            </button>
          `
          : ""
      }
      <div class="workflow-detail__breadcrumb" aria-label="Breadcrumb">
        <span>Workflows</span>
        <span aria-hidden="true">›</span>
        <strong>${escapeHtml(detail.title || artifact.label)}</strong>
      </div>

      <section class="workflow-detail__summary-card">
        <h3>${escapeHtml(detail.title || artifact.label)}</h3>
        <div class="workflow-detail__meta">
          <div>
            <span>Last time triggered</span>
            <strong>--</strong>
          </div>
          <div>
            <span>Execution history</span>
            <strong>--</strong>
          </div>
          <div>
            <span>Created by</span>
            <strong>${escapeHtml(detail.createdBy || "Terri Clark")}</strong>
          </div>
          <div>
            <span>Last version created on</span>
            <strong>${escapeHtml(detail.lastVersionCreatedOn || "May 27, 2026, 2:39 PM CST")}</strong>
          </div>
        </div>
      </section>

      <section class="workflow-detail__published">
        <h3>Last published workflow</h3>
        <div class="workflow-canvas">
          <span class="workflow-canvas__version">${escapeHtml(detail.version || "v4")}</span>
          <div class="workflow-canvas__nodes">
            ${nodes
              .map(
                (node, index) => `
                  <div class="workflow-step ${index === nodes.length - 1 ? "workflow-step--last" : ""}">
                    <div class="workflow-step__card">
                      <span class="workflow-step__icon">${svgIcon(node.icon || "custom", 18)}</span>
                      <span>
                        <strong>${escapeHtml(node.title)}</strong>
                        <small>${escapeHtml(node.description)}</small>
                        ${node.meta ? `<em>${escapeHtml(node.meta)}</em>` : ""}
                      </span>
                    </div>
                  </div>
                `
              )
              .join("")}
            <span class="workflow-canvas__end">End</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function WorkflowArtifactReader({ artifact = getActiveArtifact(), mode = prototypeState.artifactMode, showFooterActions = prototypeState.artifactMode === "onTop", includeClose = mode !== "onLeft" } = {}) {
  if (!artifact) return "";

  return `
    <section class="artifact-reader artifact-reader--${mode} artifact-reader--workflow" aria-label="${escapeHtml(artifact.label)}">
      <div class="artifact-reader__body artifact-reader__body--workflow">
        ${WorkflowDetailView({ artifact, includeClose })}
      </div>
      ${showFooterActions ? ArtifactReaderFooter(artifact) : ""}
    </section>
  `;
}

function DashboardArtifactReader({ artifact = getActiveArtifact(), mode = prototypeState.artifactMode, showFooterActions = prototypeState.artifactMode === "onTop" } = {}) {
  if (!artifact) return "";

  return `
    <section class="artifact-reader artifact-reader--${mode} artifact-reader--dashboard" aria-label="${escapeHtml(artifact.label)}">
      <div class="artifact-reader__body artifact-reader__body--dashboard">
        ${DashboardDetailView({ artifact })}
      </div>
      ${showFooterActions ? ArtifactReaderFooter(artifact) : ""}
    </section>
  `;
}

function ArtifactReader({ artifactId = null, mode = prototypeState.artifactMode, showFooterActions = prototypeState.artifactMode === "onTop", includeHeaderClose = prototypeState.artifactMode !== "push" } = {}) {
  const artifact = artifactId ? getArtifactById(artifactId) : getActiveArtifact();
  if (!artifact) return "";

  if (artifact.workflowPreview) {
    return WorkflowArtifactReader({ artifact, mode, showFooterActions });
  }
  if (artifact.dashboardDetail) {
    return DashboardArtifactReader({ artifact, mode, showFooterActions });
  }

  const metrics = artifact.metrics || [];
  const sections = artifact.sections || [];
  return `
    <section class="artifact-reader artifact-reader--${mode}" aria-label="${escapeHtml(artifact.label)}">
      <div class="artifact-reader__header">
        <div>
          <p class="artifact-reader__eyebrow">${escapeHtml(artifact.eyebrow)}</p>
          <h2>${escapeHtml(artifact.label)}</h2>
        </div>
        ${includeHeaderClose ? iconButton("close", "Close artifact", "artifact-reader__close", 'data-action="close-artifact"') : ""}
      </div>
      <div class="artifact-reader__body">
        <p class="artifact-reader__summary">${escapeHtml(artifact.summary)}</p>
        ${artifact.reportPreview || artifact.tablePreview ? ArtifactPreview({ artifactId: artifact.id, variant: "large" }) : ""}
        ${
          metrics.length
            ? `
              <section class="artifact-reader__section">
                <h3>Snapshot</h3>
                <div class="artifact-reader__metric-grid">
                  ${metrics
                    .map(
                      (metric) => `
                        <div>
                          <strong>${escapeHtml(metric.value)}</strong>
                          <span>${escapeHtml(metric.label)}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `
            : ""
        }
        ${sections
          .map(
            (section) => `
              <section class="artifact-reader__section">
                <h3>${escapeHtml(section.title)}</h3>
                <p>${escapeHtml(section.body)}</p>
              </section>
            `
          )
          .join("")}
      </div>
      ${
        showFooterActions ? ArtifactReaderFooter(artifact) : ""
      }
    </section>
  `;
}

function ArtifactEditor({ artifactId, includeClose = false } = {}) {
  const artifact = getArtifactById(artifactId);
  if (!artifact) return "";

  const metrics = artifact.metrics || [];
  const sections = artifact.sections || [];
  return `
    <section class="workspace-editor" aria-label="Edit ${escapeHtml(artifact.label)}">
      <div class="workspace-editor__header">
        <div class="workspace-editor__heading">
          <p>${escapeHtml(artifact.eyebrow)}</p>
          <h2>${escapeHtml(artifact.label)}</h2>
        </div>
        ${includeClose ? iconButton("close", "Close editor", "workspace-editor__close", 'data-action="close-artifact"') : ""}
      </div>
      <div class="workspace-editor__body">
        ${artifact.reportPreview || artifact.tablePreview ? ArtifactPreview({ artifactId: artifact.id, variant: "editor" }) : ""}
        <p class="workspace-editor__summary">${escapeHtml(artifact.summary)}</p>
        ${
          metrics.length
            ? `
              <div class="workspace-editor__metrics">
                ${metrics
                  .map(
                    (metric) => `
                      <div>
                        <strong>${escapeHtml(metric.value)}</strong>
                        <span>${escapeHtml(metric.label)}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `
            : ""
        }
        <div class="workspace-editor__sections">
          ${sections
            .map(
              (section) => `
                <label class="workspace-editor__field">
                  <span>${escapeHtml(section.title)}</span>
                  <textarea rows="3">${escapeHtml(section.body)}</textarea>
                </label>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function ArtifactSurface() {
  if (!prototypeState.activeArtifactId) return "";
  const useModalSurface = shouldUseModalArtifactSurface(prototypeState.activeArtifactId);
  if (prototypeState.artifactMode === "onLeft" && !useModalSurface) return "";
  if (!useModalSurface && prototypeState.artifactMode !== "onTop" && prototypeState.chatMode !== "fullscreen") return "";
  const isEditing = prototypeState.artifactSurfaceMode === "edit";

  if (useModalSurface) {
    return `
      <div class="artifact-surface artifact-surface--modal">
        ${ArtifactReader({
          mode: "onTop",
          showFooterActions: true,
          includeHeaderClose: true
        })}
      </div>
    `;
  }

  return `
    <div class="artifact-surface artifact-surface--side artifact-surface--${prototypeState.artifactMode} ${isEditing ? "artifact-surface--edit" : ""}">
      ${prototypeState.artifactMode === "push" && !isEditing ? ArtifactTabs() : ""}
      ${isEditing ? ArtifactEditor({ artifactId: prototypeState.activeArtifactId, includeClose: true }) : ArtifactReader()}
    </div>
  `;
}

function ChatPanel({ mode = "sidebar" } = {}) {
  const isFull = mode === "fullscreen";
  const usesSideArtifactSurface = prototypeState.activeArtifactId && prototypeState.artifactMode !== "onTop" && prototypeState.artifactMode !== "onLeft";
  const showChatHistory = isFull && !usesSideArtifactSurface;
  const showChatHistoryOverlay = !isFull && !usesSideArtifactSurface;
  const canShowArtifactTray = !usesSideArtifactSurface;
  const useTakeoverTray = !isFull && prototypeState.sideTrayMode === "takeover";
  const useBottomSheetTray = !isFull && prototypeState.sideTrayMode === "bottomSheet";
  const usePushUpTray = !isFull && prototypeState.sideTrayMode === "pushUp";
  const useSideCarTray = !isFull && prototypeState.sideTrayMode === "sideCar";
  const artifactTrayClass = prototypeState.artifactTrayOpen ? "is-open" : "is-hidden";
  const nodeId = isFull ? "298:43955" : "298:43951";
  const artifactClass = isFull && usesSideArtifactSurface ? ` ai-panel--artifact-${prototypeState.artifactMode}` : "";
  const sideTrayClass = !isFull ? ` ai-panel--side-tray-${prototypeState.sideTrayMode}` : "";
  const chatTitle = conversationData[prototypeState.activeConversationId]?.title || "{{Chat title}}";
  return `
    <div class="ai-panel-wrap ai-panel-wrap--${mode}" data-node-id="${nodeId}">
      ${showChatHistory ? ChatHistoryPanel({ variant: "rail" }) : ""}
      ${isFull ? "" : '<div class="ai-panel-handle-frame"><div class="ai-panel-handle"></div></div>'}
      <section class="ai-panel ai-panel--${mode}${artifactClass}${sideTrayClass}" aria-label="${isFull ? "AI chat full screen" : "AI chat sidebar"}">
        <div class="chat-panel-nav">
          <div class="chat-panel-nav__left">
            ${
              isFull
                ? iconButton("menu", "Menu")
                : iconButton(
                    "menu",
                    "All chats",
                    `chat-history-trigger ${prototypeState.chatHistoryOpen ? "is-active" : ""}`,
                    `data-action="toggle-chat-history" aria-pressed="${prototypeState.chatHistoryOpen}"`
                  )
            }
            <h1 class="chat-panel-title">${escapeHtml(chatTitle)}</h1>
          </div>
          <div class="chat-panel-nav__actions">
            ${canShowArtifactTray ? ChatArtifactMenu() : ""}
            ${iconButton("commentPlus", "New chat", "", 'data-action="new-chat"')}
            ${
              isFull
                ? iconButton("close", "Close full screen chat", "", 'data-action="collapse-chat"')
                : `${iconButton("expand", "Expand", "", 'data-action="expand-chat"')}
                   ${iconButton("close", "Close side chat", "", 'data-action="close-side-chat"')}`
            }
          </div>
        </div>
        ${
          canShowArtifactTray
            ? `
              ${
                useTakeoverTray
                  ? ArtifactTakeoverPanel({ mode })
                  : useBottomSheetTray
                    ? ArtifactTakeoverPanel({ mode, variant: "bottomSheet" })
                    : usePushUpTray
                      ? ArtifactTakeoverPanel({ mode, variant: "pushUp" })
                      : useSideCarTray
                        ? ArtifactTakeoverPanel({ mode, variant: "sideCar" })
                  : `
                    <div class="artifact-dock artifact-dock--${mode} ${artifactTrayClass}">
                      ${ArtifactTray({ mode })}
                    </div>
                  `
              }
              ${
                isFull
                  ? `<div class="artifact-peek-zone ${prototypeState.artifactTrayOpen ? "" : "is-visible"}" data-action="peek-artifact-tray" aria-hidden="true"></div>`
                  : ""
              }
            `
            : ""
        }
        ${
          showChatHistoryOverlay
            ? `
              <div class="chat-history-overlay ${prototypeState.chatHistoryOpen ? "is-open" : "is-hidden"}">
                ${ChatHistoryPanel({ variant: "overlay", closeable: true })}
              </div>
            `
            : ""
        }
        <div class="chat-content chat-content--${mode} ${prototypeState.chatMessages.length ? "chat-content--has-messages" : ""}">
          ${ChatThread({ mode })}
          <div class="chat-spacer"></div>
        </div>
        ${AIComposer()}
        <p class="ai-disclaimer">Rippling AI results may be inaccurate. Review before acting.</p>
      </section>
    </div>
  `;
}

function WorkbenchPage() {
  if (prototypeState.leftArtifactBuildState === "loading" && prototypeState.leftArtifactId) {
    return `
      <div class="workspace-surface workspace-surface--loading" aria-live="polite" aria-label="Building artifact">
        <div class="workspace-loader" role="status">
          <span class="workspace-loader__spinner" aria-hidden="true"></span>
          <span>Building artifact</span>
        </div>
      </div>
    `;
  }

  if (prototypeState.leftArtifactBuildState === "ready" && prototypeState.leftArtifactId) {
    const artifact = getArtifactById(prototypeState.leftArtifactId);

    if (artifact) {
      return `
        <div class="workspace-surface workspace-surface--artifact" data-left-artifact-id="${artifact.id}">
          ${ArtifactReader({
            artifactId: artifact.id,
            mode: "onLeft",
            showFooterActions: false,
            includeHeaderClose: false
          })}
        </div>
      `;
    }
  }

  const artifact = getArtifactById(prototypeState.workbenchArtifactId);

  if (!artifact) {
    return '<div class="workspace-surface workspace-surface--empty"></div>';
  }

  return `
    <div class="workspace-surface workspace-surface--editor" data-workbench-artifact-id="${artifact.id}">
      ${ArtifactEditor({ artifactId: artifact.id })}
    </div>
  `;
}

function Workbench() {
  return `
    <main class="workbench" aria-label="Workspace">
      ${WorkbenchPage()}
    </main>
  `;
}

function SnackbarHost() {
  const snackbar = prototypeState.snackbar;
  if (!snackbar) return "";

  return `
    <div class="snackbar-host" aria-live="polite" aria-atomic="true">
      <div class="snackbar snackbar--${snackbar.appearance || "success"}" data-node-id="44128:98842" role="status">
        <span class="snackbar__icon" aria-hidden="true">${svgIcon("check", 20)}</span>
        <span class="snackbar__message">${escapeHtml(snackbar.message)}</span>
        <button class="icon-button snackbar__dismiss" type="button" data-action="dismiss-snackbar" aria-label="Dismiss notification" title="Dismiss notification">
          ${svgIcon("close", 16)}
        </button>
      </div>
    </div>
  `;
}

const prototypeState = {
  chatMode: "sidebar",
  artifactPreset: "nearTerm",
  artifactMode: "onLeft",
  activeArtifactId: null,
  artifactSurfaceMode: "view",
  artifactReturnMode: null,
  artifactTrayOpen: false,
  artifactTrayUserClosed: false,
  artifactMenuOpen: false,
  activeArtifactActionMenuId: null,
  sideTrayMode: "pushUp",
  settingsMenuOpen: false,
  chatHistoryOpen: false,
  composerDraft: "",
  chatMessages: [],
  artifactTrayIds: [],
  activeConversationId: null,
  workbenchArtifactId: null,
  editingArtifactId: null,
  leftArtifactId: null,
  leftArtifactBuildState: "idle",
  snackbar: null,
  navExpanded: false,
  navPinState: "unpinned"
};

let snackbarTimer = null;
let leftArtifactBuildTimer = null;

const chatLayoutMotion = {
  duration: 200,
  easing: "cubic-bezier(0.2, 0, 0, 1)"
};

function App() {
  return `
    <div class="prototype-shell">
      ${TopNav()}
      <div class="${getAppLayoutClassName()}">
        ${AppLayout()}
      </div>
      <div id="snackbar-root">${SnackbarHost()}</div>
    </div>
  `;
}

function AppLayout() {
  const isChatClosed = prototypeState.chatMode === "closed";
  const sideTrayClass = prototypeState.chatMode === "sidebar" ? ` chat-demo--side-tray-${prototypeState.sideTrayMode}` : "";
  const sideCarOpenClass = prototypeState.chatMode === "sidebar" && prototypeState.sideTrayMode === "sideCar" && prototypeState.artifactTrayOpen
    ? " chat-demo--sidecar-open"
    : "";
  return `
    ${SideNav()}
    ${Workbench()}
    ${
      isChatClosed
        ? ""
        : `<aside class="chat-demo chat-demo--${prototypeState.chatMode}${sideTrayClass}${sideCarOpenClass}">
            ${ChatPanel({ mode: prototypeState.chatMode })}
          </aside>`
    }
    ${ArtifactSurface()}
  `;
}

function clearLeftArtifactBuildState() {
  if (leftArtifactBuildTimer) {
    window.clearTimeout(leftArtifactBuildTimer);
    leftArtifactBuildTimer = null;
  }

  prototypeState.leftArtifactId = null;
  prototypeState.leftArtifactBuildState = "idle";
}

function bindTopNavInteractions() {
  document.querySelector('[data-action="open-side-chat"]')?.addEventListener("click", () => {
    if (prototypeState.chatMode === "closed") {
      transitionChatMode("sidebar");
      return;
    }

    if (prototypeState.chatMode === "fullscreen") {
      transitionChatMode("sidebar");
    }
  });

  document.querySelector('[data-action="toggle-settings-menu"]')?.addEventListener("click", () => {
    prototypeState.settingsMenuOpen = !prototypeState.settingsMenuOpen;
    renderApp();
  });

  document.querySelectorAll("[data-artifact-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      applyArtifactPreset(button.dataset.artifactPreset);
    });
  });
}

function applyArtifactPreset(presetId) {
  const preset = artifactSettingPresets.find((item) => item.id === presetId);
  if (!preset) return;

  const activeArtifactId = prototypeState.activeArtifactId || prototypeState.leftArtifactId;
  prototypeState.artifactPreset = preset.id;
  prototypeState.artifactMode = preset.artifactMode;
  prototypeState.sideTrayMode = preset.sideTrayMode;
  prototypeState.artifactTrayOpen = false;
  prototypeState.settingsMenuOpen = false;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;

  if (preset.artifactMode === "onLeft") {
    if (activeArtifactId) {
      openArtifact(activeArtifactId);
      return;
    }

    renderApp();
    return;
  }

  clearLeftArtifactBuildState();

  if (activeArtifactId) {
    openArtifact(activeArtifactId);
    return;
  }

  renderApp();
}

function setNavExpanded(isExpanded) {
  if (prototypeState.navPinState !== "unpinned" || prototypeState.navExpanded === isExpanded) return;

  prototypeState.navExpanded = isExpanded;
  renderAppLayout();
}

function toggleNavPin() {
  if (prototypeState.navPinState === "open") {
    prototypeState.navPinState = "unpinned";
    prototypeState.navExpanded = true;
  } else if (prototypeState.navPinState === "closed") {
    prototypeState.navPinState = "unpinned";
    prototypeState.navExpanded = false;
  } else {
    const expanded = isNavExpanded();
    prototypeState.navPinState = expanded ? "open" : "closed";
    prototypeState.navExpanded = expanded;
  }

  renderAppLayout();
}

function shouldUseModalArtifactSurface(artifactId) {
  return prototypeState.artifactMode === "onTop" || (prototypeState.artifactMode === "onLeft" && artifactId === "benefits-pdf");
}

function openArtifactModal(artifactId) {
  clearLeftArtifactBuildState();

  const originMode = prototypeState.chatMode;
  prototypeState.activeArtifactId = artifactId;
  prototypeState.artifactSurfaceMode = "view";
  prototypeState.artifactReturnMode = originMode;
  prototypeState.artifactTrayOpen = false;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.editingArtifactId = null;

  renderArtifactSurfaceOnly();
}

function openArtifact(artifactId) {
  if (!getArtifactById(artifactId)) return;

  if (shouldUseModalArtifactSurface(artifactId)) {
    openArtifactModal(artifactId);
    return;
  }

  if (prototypeState.artifactMode === "onLeft") {
    openArtifactOnLeft(artifactId);
    return;
  }

  clearLeftArtifactBuildState();

  const originMode = prototypeState.chatMode;
  prototypeState.activeArtifactId = artifactId;
  prototypeState.artifactSurfaceMode = "view";
  prototypeState.artifactReturnMode = originMode;
  prototypeState.artifactTrayOpen = false;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.editingArtifactId = null;

  if (prototypeState.artifactMode !== "onTop" && prototypeState.chatMode !== "fullscreen") {
    transitionChatMode("fullscreen");
    return;
  }

  if (prototypeState.artifactMode === "onTop") {
    renderArtifactSurfaceOnly();
    return;
  }

  renderAppLayout();
}

function openArtifactOnLeft(artifactId) {
  if (!getArtifactById(artifactId)) return;

  clearLeftArtifactBuildState();

  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  prototypeState.leftArtifactId = artifactId;
  prototypeState.leftArtifactBuildState = shouldReduceMotion ? "ready" : "loading";
  prototypeState.activeArtifactId = null;
  prototypeState.artifactSurfaceMode = "view";
  prototypeState.artifactReturnMode = null;
  prototypeState.artifactTrayOpen = false;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.chatHistoryOpen = false;
  prototypeState.workbenchArtifactId = null;
  prototypeState.editingArtifactId = null;

  if (prototypeState.chatMode !== "sidebar") {
    transitionChatMode("sidebar");
  } else {
    renderAppLayout();
  }

  if (shouldReduceMotion) return;

  leftArtifactBuildTimer = window.setTimeout(() => {
    if (prototypeState.leftArtifactId !== artifactId || prototypeState.leftArtifactBuildState !== "loading") return;

    prototypeState.leftArtifactBuildState = "ready";
    leftArtifactBuildTimer = null;
    renderWorkbenchOnly();
  }, 680);
}

function resolveArtifactFromText(text) {
  const normalized = text.toLowerCase();
  const exactPrompt = promptItems.find((prompt) => prompt.label.toLowerCase() === normalized);

  if (exactPrompt) return exactPrompt.artifactId;
  if (normalized.includes("40") || normalized.includes("overtime") || (normalized.includes("policy") && normalized.includes("hour"))) return "hours-policy";
  if (normalized.includes("t&a") || normalized.includes("time and attendance") || (normalized.includes("start") && normalized.includes("finish"))) return "time-attendance-report";
  if ((normalized.includes("benefits") || normalized.includes("benefit")) && normalized.includes("pdf")) return "benefits-pdf";
  if (normalized.includes("links") && (normalized.includes("multiple") || normalized.includes("list"))) return "multiple-links";
  if (normalized.includes("turnover") || normalized.includes("attrition")) return "turnover-rate-year";
  if (normalized.includes("utilized") || normalized.includes("utilization") || (normalized.includes("under") && normalized.includes("over"))) return "employee-utilization-review";
  if (normalized.includes("promot")) return "promotion-review";

  return null;
}

function buildAssistantMessage(artifactId) {
  const artifact = getArtifactById(artifactId);

  if (!artifact) {
    return {
      role: "assistant",
      body: "I can help with that. Try one of the suggested prompts or ask for a policy, T&A report, benefits PDF, or promotion review and I will create the matching artifact."
    };
  }

  const responseByArtifactId = {
    "hours-policy": "I drafted a 40+ hour reduction policy with manager review thresholds, exception handling, and follow-up guidance. Use View to open the artifact or Edit to work on it in the canvas.",
    "time-attendance-report": "I built a T&A report outline with start times, finish times, actual hours, and exception fields. Use View to open the artifact or Edit to work on it in the canvas.",
    "benefits-pdf": "I found your current benefits summary and prepared a PDF artifact for review.",
    "multiple-links": "I found several related resources and grouped them into a link list.",
    "turnover-rate-year": "I calculated your turnover rate for the year and broke it out by quarter so you can see where attrition accelerated.",
    "employee-utilization-review": "I identified under and over utilized employees based on scheduled capacity versus assigned work, with recommended next actions for each group.",
    "promotion-review": "I created a promotion review workflow that finds employees who have not had a promotion recorded in the last 2 years and routes them into manager calibration. Use View to open the workflow."
  };

  return {
    role: "assistant",
    body: responseByArtifactId[artifactId] || `I created ${artifact.label} and opened it for review.`,
    summaryBlocks: artifact.responseSummaryBlocks || null,
    responseLayout: artifact.responseLayout || null,
    narrative: artifact.responseNarrative || null,
    artifactId,
    actionLabel: `Open ${artifact.label}`,
    preview: artifact.reportPreview || artifact.tablePreview || artifact.workflowPreview || artifact.pdfPreview ? "report" : null,
    metrics: artifact.responseMetrics || null,
    insight: artifact.responseInsight || null
  };
}

function getValidArtifactIds(artifactIds) {
  return [...new Set(artifactIds.filter((artifactId) => getArtifactById(artifactId)))];
}

function addArtifactsToTray(artifactIds) {
  const nextArtifactIds = [...prototypeState.artifactTrayIds];
  let addedArtifact = false;

  getValidArtifactIds(artifactIds).forEach((artifactId) => {
    if (!nextArtifactIds.includes(artifactId)) {
      nextArtifactIds.push(artifactId);
      addedArtifact = true;
    }
  });

  prototypeState.artifactTrayIds = nextArtifactIds;

  if (addedArtifact && !prototypeState.artifactTrayUserClosed) {
    prototypeState.artifactTrayOpen = true;
  }
}

function revealArtifactTray() {
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.chatHistoryOpen = false;
  prototypeState.artifactTrayUserClosed = false;

  if (prototypeState.sideTrayMode === "pushUp") {
    prototypeState.artifactTrayOpen = true;
    renderAppLayout();
    return;
  }

  prototypeState.artifactTrayOpen = false;
  renderAppLayout();
  window.requestAnimationFrame(() => setArtifactTrayOpen(true));
}

function loadConversation(conversationId) {
  const conversation = conversationData[conversationId];

  if (!conversation) {
    setChatHistoryOpen(false);
    return;
  }

  prototypeState.activeConversationId = conversationId;
  prototypeState.chatMessages = conversation.messages.map((message) => ({ ...message }));
  prototypeState.composerDraft = "";
  prototypeState.activeArtifactId = null;
  prototypeState.artifactSurfaceMode = "view";
  prototypeState.artifactReturnMode = null;
  clearLeftArtifactBuildState();
  prototypeState.artifactTrayIds = getTrayArtifactIds(conversation.artifactIds || conversation.messages.map((message) => message.artifactId).filter(Boolean));
  prototypeState.artifactTrayOpen = prototypeState.artifactTrayIds.length > 0 && !prototypeState.artifactTrayUserClosed;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.chatHistoryOpen = false;
  prototypeState.workbenchArtifactId = null;
  prototypeState.editingArtifactId = null;

  renderAppLayout();
}

function sendChatMessage(text, preferredArtifactId = null) {
  const body = text.trim();
  if (!body) return;

  const artifactId = preferredArtifactId || resolveArtifactFromText(body);
  const artifact = getArtifactById(artifactId);
  prototypeState.chatMessages = [
    ...prototypeState.chatMessages,
    { role: "user", body },
    buildAssistantMessage(artifactId)
  ];
  prototypeState.composerDraft = "";
  prototypeState.activeConversationId = null;
  prototypeState.chatHistoryOpen = false;
  prototypeState.activeArtifactId = null;
  prototypeState.artifactSurfaceMode = "view";
  prototypeState.artifactReturnMode = null;
  clearLeftArtifactBuildState();
  addArtifactsToTray(artifact && isTrayArtifact(artifact.id) ? [artifact.id] : []);
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.editingArtifactId = null;

  renderAppLayout();
}

function handlePromptClick(artifactId) {
  const prompt = promptItems.find((item) => item.artifactId === artifactId);
  sendChatMessage(prompt?.label || "", artifactId);
}

window.handlePromptClick = handlePromptClick;

function runPromptButton(button) {
  const artifactId = button.dataset.promptArtifactId;
  const prompt = promptItems.find((item) => item.artifactId === artifactId);
  sendChatMessage(prompt?.label || button.textContent, artifactId);
}

function editArtifactInWorkbench(artifactId) {
  if (!getArtifactById(artifactId)) return;
  clearLeftArtifactBuildState();
  prototypeState.editingArtifactId = artifactId;
  addArtifactsToTray([artifactId]);

  if (prototypeState.chatMode === "fullscreen") {
    prototypeState.chatHistoryOpen = false;

    if (prototypeState.artifactMode === "onTop") {
      prototypeState.workbenchArtifactId = artifactId;
      prototypeState.activeArtifactId = null;
      prototypeState.artifactSurfaceMode = "view";
      prototypeState.artifactReturnMode = null;
      transitionChatMode("sidebar");
      return;
    }

    prototypeState.workbenchArtifactId = null;
    prototypeState.activeArtifactId = artifactId;
    prototypeState.artifactSurfaceMode = "edit";
    prototypeState.artifactReturnMode = "fullscreen";
    renderAppLayout();
    return;
  }

  prototypeState.workbenchArtifactId = artifactId;
  prototypeState.activeArtifactId = null;
  prototypeState.artifactSurfaceMode = "view";
  prototypeState.artifactReturnMode = null;
  renderAppLayout();
}

function runChatOutputAction(source, action) {
  const artifactId = source?.dataset?.artifactId;
  if (!getArtifactById(artifactId)) return;

  prototypeState.activeArtifactActionMenuId = null;
  const output = source.closest?.(".chat-output");
  const launchClass = `is-launching-${action}`;
  output?.classList.add(launchClass);

  window.setTimeout(() => {
    output?.classList.remove(launchClass);

    if (action === "edit") {
      editArtifactInWorkbench(artifactId);
      return;
    }

    openArtifact(artifactId);
  }, 180);
}

function updateComposerSendState(input) {
  const canSend = input.value.trim().length > 0;
  const composer = input.closest(".ai-composer");
  const sendButton = composer?.querySelector('[data-action="send-chat-message"]');

  sendButton?.classList.toggle("icon-button--primary", canSend);
  sendButton?.classList.toggle("icon-button--disabled", !canSend);
  sendButton?.setAttribute("aria-disabled", `${!canSend}`);
}

function getArtifactClipboardText(artifactId) {
  const artifact = getArtifactById(artifactId);
  if (!artifact) return "";

  const lines = [artifact.label, artifact.summary];

  if (artifact.metrics?.length) {
    lines.push("", "Snapshot");
    artifact.metrics.forEach((metric) => {
      lines.push(`${metric.label}: ${metric.value}`);
    });
  }

  if (artifact.sections?.length) {
    lines.push("");
    artifact.sections.forEach((section) => {
      lines.push(section.title, section.body, "");
    });
  }

  if (artifact.tablePreview) {
    lines.push(artifact.tablePreview.title);
    lines.push(artifact.tablePreview.columns.map((column) => column.label).join("\t"));
    artifact.tablePreview.rows.forEach((row) => {
      lines.push(
        artifact.tablePreview.columns
          .map((column) => {
            const value = row[column.key];
            return typeof value === "object" ? value.label || value.value : value;
          })
          .join("\t")
      );
    });
  }

  if (artifact.pdfPreview) {
    lines.push("", artifact.pdfPreview.title || "PDF");
    lines.push(artifact.pdfPreview.description || "");
    if (artifact.pdfPreview.meta?.length) {
      lines.push(artifact.pdfPreview.meta.join(" · "));
    }
  }

  if (artifact.workflowDetail) {
    lines.push("", artifact.workflowDetail.title || "Workflow");
    artifact.workflowDetail.nodes?.forEach((node) => {
      lines.push(`${node.title}: ${node.description}`);
    });
  }

  if (artifact.dashboardDetail) {
    lines.push("", artifact.dashboardDetail.title || "Dashboard");
    artifact.dashboardDetail.tables?.forEach((table) => {
      lines.push("", table.title);
      lines.push(table.columns.join("\t"));
      table.rows.forEach((row) => {
        lines.push(row.join("\t"));
      });
    });
  }

  return lines.filter(Boolean).join("\n");
}

async function copyArtifactToClipboard(artifactId) {
  const text = getArtifactClipboardText(artifactId);
  if (!text) return;

  try {
    await navigator.clipboard?.writeText(text);
  } catch {
    // The prototype still shows the intended feedback if clipboard access is unavailable.
  }
}

function showSnackbar(message, appearance = "success") {
  prototypeState.snackbar = { message, appearance };
  renderSnackbarOnly();

  if (snackbarTimer) {
    window.clearTimeout(snackbarTimer);
  }

  snackbarTimer = window.setTimeout(() => {
    prototypeState.snackbar = null;
    snackbarTimer = null;
    renderSnackbarOnly();
  }, 3200);
}

function dismissSnackbar() {
  prototypeState.snackbar = null;

  if (snackbarTimer) {
    window.clearTimeout(snackbarTimer);
    snackbarTimer = null;
  }

  renderSnackbarOnly();
}

function bindLayoutInteractions() {
  document.querySelector(".chat-demo")?.addEventListener(
    "pointerup",
    (event) => {
      const button = event.target.closest?.("[data-prompt-artifact-id]");
      if (!button) return;
      event.preventDefault();
      runPromptButton(button);
    },
    { capture: true }
  );

  document.querySelector('[data-action="nav-hover-zone"]')?.addEventListener("mouseenter", () => {
    setNavExpanded(true);
  });

  document.querySelector('[data-action="nav-hover-zone"]')?.addEventListener("mouseleave", () => {
    setNavExpanded(false);
  });

  document.querySelector('[data-action="toggle-nav-pin"]')?.addEventListener("click", () => {
    toggleNavPin();
  });

  document.querySelectorAll("[data-artifact-tab-id]").forEach((button) => {
    button.addEventListener("click", () => {
      switchArtifactTab(button.dataset.artifactTabId);
    });
  });

  document.querySelectorAll(".artifact-item[data-artifact-id], .artifact-takeover-item[data-artifact-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openArtifact(button.dataset.artifactId);
    });
  });

  document.querySelectorAll('[data-action="view-chat-output"]').forEach((button) => {
    button.addEventListener("click", () => {
      runChatOutputAction(button, "view");
    });

    button.addEventListener("keydown", (event) => {
      if (button.tagName === "BUTTON") return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      runChatOutputAction(button, "view");
    });
  });

  document.querySelectorAll('[data-action="toggle-artifact-action-menu"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const artifactId = button.dataset.artifactId;
      prototypeState.artifactMenuOpen = false;
      prototypeState.activeArtifactActionMenuId = prototypeState.activeArtifactActionMenuId === artifactId ? null : artifactId;
      renderAppLayout();
    });

    button.addEventListener("keydown", (event) => {
      event.stopPropagation();
    });
  });

  document.querySelectorAll('[data-action="artifact-menu-command"]').forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.stopPropagation();
      const command = button.dataset.menuCommand;
      const artifactId = button.dataset.artifactId;

      if (command === "edit") {
        prototypeState.activeArtifactActionMenuId = null;
        runChatOutputAction(button, "edit");
        return;
      }

      prototypeState.activeArtifactActionMenuId = null;
      renderAppLayout();

      if (command === "download") {
        showSnackbar("Downloaded");
        return;
      }

      if (command === "copy") {
        await copyArtifactToClipboard(artifactId);
        showSnackbar("Copied to clipboard");
      }
    });
  });

  document.querySelectorAll(".chat-output-more").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    button.addEventListener("keydown", (event) => {
      event.stopPropagation();
    });
  });

  document.querySelectorAll("[data-prompt-artifact-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      runPromptButton(button);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      runPromptButton(button);
    });
  });

  document.querySelectorAll("[data-chat-input]").forEach((input) => {
    input.addEventListener("input", () => {
      prototypeState.composerDraft = input.value;
      updateComposerSendState(input);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || event.shiftKey) return;
      event.preventDefault();
      sendChatMessage(input.value);
    });
  });

  document.querySelectorAll('[data-action="send-chat-message"]').forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.querySelector("[data-chat-input]");
      sendChatMessage(input?.value || prototypeState.composerDraft);
    });
  });

  document.querySelectorAll('[data-action="new-chat"]').forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.chatMessages = [];
      prototypeState.composerDraft = "";
      prototypeState.activeConversationId = null;
      prototypeState.activeArtifactId = null;
      prototypeState.artifactSurfaceMode = "view";
      prototypeState.artifactReturnMode = null;
      prototypeState.artifactTrayIds = [];
      prototypeState.artifactTrayOpen = false;
      prototypeState.artifactTrayUserClosed = false;
      prototypeState.artifactMenuOpen = false;
      prototypeState.activeArtifactActionMenuId = null;
      prototypeState.chatHistoryOpen = false;
      prototypeState.workbenchArtifactId = null;
      prototypeState.editingArtifactId = null;
      clearLeftArtifactBuildState();
      renderAppLayout();
    });
  });

  document.querySelectorAll('[data-action="see-artifacts"]').forEach((button) => {
    button.addEventListener("click", () => {
      revealArtifactTray();
    });
  });

  document.querySelectorAll('[data-action="share-chat"]').forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.artifactMenuOpen = false;
      renderAppLayout();
    });
  });

  document.querySelectorAll('[data-action="toggle-artifact-tray"]').forEach((button) => {
    button.addEventListener("click", () => {
      setArtifactTrayOpen(!prototypeState.artifactTrayOpen, { userInitiated: true });
    });
  });

  document.querySelectorAll('[data-action="hide-artifact-tray"]').forEach((button) => {
    button.addEventListener("click", () => {
      setArtifactTrayOpen(false, { userInitiated: true });
    });
  });

  document.querySelector('[data-action="peek-artifact-tray"]')?.addEventListener("mouseenter", () => {
    setArtifactTrayOpen(true, { userInitiated: true });
  });

  document.querySelector('[data-action="toggle-chat-history"]')?.addEventListener("click", () => {
    setChatHistoryOpen(!prototypeState.chatHistoryOpen);
  });

  document.querySelector('[data-action="close-chat-history"]')?.addEventListener("click", () => {
    setChatHistoryOpen(false);
  });

  document.querySelectorAll('[data-action="select-chat-history"]').forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.conversationId) {
        loadConversation(button.dataset.conversationId);
        return;
      }

      setChatHistoryOpen(false);
    });
  });

  document.querySelector('[data-action="expand-chat"]')?.addEventListener("click", () => {
    transitionChatMode("fullscreen");
  });

  document.querySelector('[data-action="close-side-chat"]')?.addEventListener("click", () => {
    prototypeState.activeArtifactId = null;
    prototypeState.artifactSurfaceMode = "view";
    prototypeState.artifactReturnMode = null;
    prototypeState.artifactTrayOpen = false;
    prototypeState.artifactMenuOpen = false;
    prototypeState.activeArtifactActionMenuId = null;
    prototypeState.chatHistoryOpen = false;
    transitionChatMode("closed");
  });

  document.querySelector('[data-action="collapse-chat"]')?.addEventListener("click", () => {
    prototypeState.activeArtifactId = null;
    prototypeState.artifactSurfaceMode = "view";
    prototypeState.artifactReturnMode = null;
    prototypeState.chatHistoryOpen = false;
    if (prototypeState.artifactMode !== "onLeft") {
      clearLeftArtifactBuildState();
    }
    transitionChatMode("sidebar");
  });

  bindArtifactSurfaceActions();
}

function bindArtifactSurfaceActions(root = document) {
  root.querySelectorAll('[data-action="close-artifact"]').forEach((button) => {
    button.addEventListener("click", () => {
      closeArtifactWithTransition();
    });
  });

  root.querySelectorAll('[data-action="edit-artifact-modal"]').forEach((button) => {
    button.addEventListener("click", () => {
      editArtifactInWorkbench(button.dataset.artifactId);
    });
  });

}

function bindInteractions() {
  bindTopNavInteractions();
  bindLayoutInteractions();
  bindSnackbarInteractions();
}

function bindSnackbarInteractions() {
  document.querySelectorAll('[data-action="dismiss-snackbar"]').forEach((button) => {
    button.addEventListener("click", () => {
      dismissSnackbar();
    });
  });
}

function setArtifactTrayOpen(isOpen, { userInitiated = false } = {}) {
  prototypeState.artifactTrayOpen = isOpen;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;

  if (userInitiated) {
    prototypeState.artifactTrayUserClosed = !isOpen;
  }

  const chatDemo = document.querySelector(".chat-demo");
  const dock = document.querySelector(".artifact-dock");
  const takeover = document.querySelector(".artifact-takeover");
  const trigger = document.querySelector('.chat-artifact-menu [data-action="toggle-artifact-tray"]');
  const peekZone = document.querySelector('[data-action="peek-artifact-tray"]');
  const pushUpToggle = document.querySelector('.artifact-takeover--push-up [data-action="toggle-artifact-tray"]');
  const shouldExpandSideCar = isOpen && prototypeState.chatMode === "sidebar" && prototypeState.sideTrayMode === "sideCar";
  const pushUpToggleLabel = isOpen ? "Collapse artifacts" : "Expand artifacts";

  chatDemo?.classList.toggle("chat-demo--sidecar-open", shouldExpandSideCar);
  dock?.classList.toggle("is-open", isOpen);
  dock?.classList.toggle("is-hidden", !isOpen);
  takeover?.classList.toggle("is-open", isOpen);
  takeover?.classList.toggle("is-hidden", !isOpen);
  trigger?.classList.toggle("is-active", isOpen);
  trigger?.setAttribute("aria-expanded", `${isOpen}`);
  peekZone?.classList.toggle("is-visible", !isOpen);
  if (pushUpToggle) {
    pushUpToggle.setAttribute("aria-label", pushUpToggleLabel);
    pushUpToggle.setAttribute("title", pushUpToggleLabel);
    pushUpToggle.setAttribute("aria-expanded", `${isOpen}`);
    pushUpToggle.innerHTML = svgIcon(isOpen ? "chevronUp" : "chevronDown");
  }
}

function setChatHistoryOpen(isOpen) {
  prototypeState.chatHistoryOpen = isOpen;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;

  const overlay = document.querySelector(".chat-history-overlay");
  const trigger = document.querySelector('[data-action="toggle-chat-history"]');

  overlay?.classList.toggle("is-open", isOpen);
  overlay?.classList.toggle("is-hidden", !isOpen);
  trigger?.classList.toggle("is-active", isOpen);
  trigger?.setAttribute("aria-pressed", `${isOpen}`);
}

function switchArtifactTab(artifactId) {
  if (prototypeState.activeArtifactId === artifactId) return;

  prototypeState.activeArtifactId = artifactId;

  document.querySelectorAll("[data-artifact-tab-id]").forEach((button) => {
    const isActive = button.dataset.artifactTabId === artifactId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", `${isActive}`);
  });

  const reader = document.querySelector(".artifact-surface--push .artifact-reader");
  if (!reader) {
    renderAppLayout();
    return;
  }

  reader.outerHTML = ArtifactReader();
}

function renderArtifactSurfaceOnly() {
  const layout = document.querySelector(".app-layout");
  const existingSurface = document.querySelector(".artifact-surface");
  existingSurface?.remove();

  if (!layout) {
    renderApp();
    return;
  }

  layout.insertAdjacentHTML("beforeend", ArtifactSurface());
  bindArtifactSurfaceActions(layout);
}

function closeArtifactWithTransition() {
  const surface = document.querySelector(".artifact-surface");
  const panel = document.querySelector(".ai-panel");
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const returnMode = prototypeState.artifactReturnMode || prototypeState.chatMode;
  const isModalSurface = shouldUseModalArtifactSurface(prototypeState.activeArtifactId);
  const closeDuration = isModalSurface ? 200 : 360;

  if (!surface || shouldReduceMotion) {
    prototypeState.activeArtifactId = null;
    prototypeState.artifactSurfaceMode = "view";
    prototypeState.artifactReturnMode = null;
    prototypeState.editingArtifactId = null;

    if (returnMode !== prototypeState.chatMode) {
      transitionChatMode(returnMode);
      return;
    }

    if (isModalSurface) {
      surface?.remove();
    } else {
      renderAppLayout();
    }
    return;
  }

  surface.classList.add("artifact-surface--closing");

  if (!isModalSurface) {
    panel?.classList.add("ai-panel--artifact-closing");
  }

  window.setTimeout(() => {
    prototypeState.activeArtifactId = null;
    prototypeState.artifactSurfaceMode = "view";
    prototypeState.artifactReturnMode = null;
    prototypeState.editingArtifactId = null;

    if (returnMode !== prototypeState.chatMode) {
      transitionChatMode(returnMode);
      return;
    }

    if (isModalSurface) {
      surface.remove();
    } else {
      renderAppLayout();
    }
  }, closeDuration);
}

function transitionChatMode(nextMode) {
  if (prototypeState.chatMode === nextMode) return;

  const sourcePanel = document.querySelector(".chat-demo");
  const sourceRect = sourcePanel?.getBoundingClientRect();
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (nextMode === "fullscreen" && !prototypeState.activeArtifactId && !prototypeState.artifactTrayUserClosed) {
    prototypeState.artifactTrayOpen = true;
  }

  if (nextMode === "sidebar") {
    prototypeState.artifactTrayOpen = false;
  }

  prototypeState.chatHistoryOpen = false;

  prototypeState.chatMode = nextMode;
  renderAppLayout();

  const targetPanel = document.querySelector(".chat-demo");
  if (!sourceRect || !targetPanel || shouldReduceMotion) return;

  const targetRect = targetPanel.getBoundingClientRect();

  targetPanel.style.setProperty("--chat-motion-duration", `${chatLayoutMotion.duration}ms`);
  targetPanel.style.setProperty("--chat-motion-ease", chatLayoutMotion.easing);
  targetPanel.style.top = `${sourceRect.top}px`;
  targetPanel.style.left = `${sourceRect.left}px`;
  targetPanel.style.right = "auto";
  targetPanel.style.width = `${sourceRect.width}px`;
  targetPanel.style.height = `${sourceRect.height}px`;
  targetPanel.style.pointerEvents = "none";

  targetPanel.getBoundingClientRect();
  requestAnimationFrame(() => {
    targetPanel.classList.add("chat-demo--animating");
    targetPanel.style.top = `${targetRect.top}px`;
    targetPanel.style.left = `${targetRect.left}px`;
    targetPanel.style.width = `${targetRect.width}px`;
    targetPanel.style.height = `${targetRect.height}px`;

    const finish = () => {
      targetPanel.classList.remove("chat-demo--animating");
      targetPanel.style.removeProperty("--chat-motion-duration");
      targetPanel.style.removeProperty("--chat-motion-ease");
      targetPanel.style.removeProperty("top");
      targetPanel.style.removeProperty("left");
      targetPanel.style.removeProperty("right");
      targetPanel.style.removeProperty("width");
      targetPanel.style.removeProperty("height");
      targetPanel.style.removeProperty("pointer-events");
    };

    window.setTimeout(finish, chatLayoutMotion.duration + 120);
  });
}

function syncChatViewport() {
  const content = document.querySelector(".chat-content");
  if (!content) return;

  content.scrollTop = content.scrollHeight;
}

function renderApp() {
  document.getElementById("app").innerHTML = App();
  bindInteractions();
  syncChatViewport();
  positionSnackbarHost();
}

function renderAppLayout() {
  const layout = document.querySelector(".app-layout");
  if (!layout) {
    renderApp();
    return;
  }

  layout.className = getAppLayoutClassName();
  layout.innerHTML = AppLayout();
  bindLayoutInteractions();
  syncChatViewport();
  positionSnackbarHost();
}

function renderSnackbarOnly() {
  const root = document.getElementById("snackbar-root");
  if (!root) {
    renderApp();
    return;
  }

  root.innerHTML = SnackbarHost();
  bindSnackbarInteractions();
  positionSnackbarHost();
}

function positionSnackbarHost() {
  const host = document.querySelector(".snackbar-host");
  const composer = document.querySelector(".ai-composer--compact") || document.querySelector(".ai-composer");
  if (!host || !composer) return;

  const rect = composer.getBoundingClientRect();
  host.style.setProperty("--snackbar-left", `${Math.round(rect.left)}px`);
  host.style.setProperty("--snackbar-width", `${Math.round(rect.width)}px`);
  host.style.setProperty("--snackbar-bottom", `${Math.round(Math.max(16, window.innerHeight - rect.top + 10))}px`);
  host.style.setProperty("--snackbar-x-offset", "0");
}

function renderWorkbenchOnly() {
  const workbench = document.querySelector(".workbench");
  if (!workbench) {
    renderAppLayout();
    return;
  }

  workbench.innerHTML = WorkbenchPage();
}

function initializeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const shouldRunPrompt = params.get("runPrompt") === "true";
  const promptId = params.get("prompt");
  if (!shouldRunPrompt) return;
  if (!promptId || prototypeState.chatMessages.length) return;

  const prompt = promptItems.find((item) => item.artifactId === promptId);
  if (!prompt) return;

  const artifact = getArtifactById(prompt.artifactId);
  prototypeState.chatMessages = [
    { role: "user", body: prompt.label },
    buildAssistantMessage(prompt.artifactId)
  ];
  prototypeState.artifactTrayIds = getTrayArtifactIds(artifact ? [artifact.id] : []);
  prototypeState.artifactTrayOpen = prototypeState.artifactTrayIds.length > 0 && !prototypeState.artifactTrayUserClosed;
  prototypeState.activeConversationId = null;
}

initializeFromUrl();
renderApp();
window.addEventListener("resize", positionSnackbarHost);
