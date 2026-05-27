const Icon = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  chevronDown: '<path d="m7 10 5 5 5-5"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  help: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.6 5.6 4 4M18.4 5.6l-4 4M18.4 18.4l-4-4M5.6 18.4l4-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  chat: '<path d="M5 5h14v10H9l-4 4V5Z"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  check: '<path d="m5 12 4 4 10-10"/>',
  close: '<path d="M6 6 18 18M18 6 6 18"/>',
  copy: '<rect x="8" y="8" width="11" height="11" rx="1.5"/><path d="M5 15H4a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v1"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  expand: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"/><path d="M3 3l7 7M21 3l-7 7M3 21l7-7M21 21l-7-7"/>',
  more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
  org: '<path d="M12 4v5M6 20v-5h12v5M6 15V9h12v6"/><rect x="9" y="2" width="6" height="4"/><rect x="3" y="18" width="6" height="4"/><rect x="15" y="18" width="6" height="4"/>',
  star: '<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M17 3.13a4 4 0 0 1 0 7.75"/>',
  dollar: '<circle cx="12" cy="12" r="9"/><path d="M12 6v12M15 9.5c-.6-1-1.7-1.5-3-1.5-1.7 0-3 1-3 2.4 0 3 6 1.8 6 5.1 0 1.4-1.3 2.5-3 2.5-1.4 0-2.7-.6-3.4-1.8"/>',
  heart: '<path d="M20.8 8.6a5.5 5.5 0 0 0-9.5-3.8L12 5.5l.7-.7a5.5 5.5 0 0 1 7.8 7.8L12 21 3.5 12.6a5.5 5.5 0 0 1 7.8-7.8l.7.7"/>',
  laptop: '<path d="M4 6h16v10H4z"/><path d="M2 20h20M8 10h8"/>',
  card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/>',
  custom: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="m8 9 4 2 4-2M8 15l4-2 4 2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>',
  data: '<path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a8 8 0 0 0 .1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L15 6.4h-4L10.6 9a7 7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a8 8 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1l.4 2.6h4l.4-2.6a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2.1-1.5Z"/>',
  pin: '<path d="m15 4 5 5-4 1-4 7-3-3 7-4-1-6ZM9 14l-5 5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  send: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  save: '<path d="M5 3h12l2 2v16H5V3Z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/>',
  arrowDownRight: '<path d="M7 7h10v10M7 17 17 7"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="m14.5 4.5 5 5L8 21l-5 1 1-5L15.5 5.5Z"/><path d="m13 7 4 4"/>',
  document: '<path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h5"/><path d="M10 12h6M10 15h6M10 18h4"/>',
  commentPlus: '<path d="M4 5h16v12H9l-5 4V5Z"/><path d="M12 8v6M9 11h6"/>',
  sliders: '<path d="M4 7h10M18 7h2M16 5v4M4 12h2M10 12h10M8 10v4M4 17h12M20 17h0M18 15v4"/>',
  newChat: '<path d="m14.5 4.5 5 5L10 19l-5 1 1-5 9.5-9.5Z"/><path d="m13 6 5 5"/>',
  sparkle: '<path fill="currentColor" stroke="none" d="M12 1.5c1.2 5 3.5 7.3 8.5 8.5-5 1.2-7.3 3.5-8.5 8.5-1.2-5-3.5-7.3-8.5-8.5 5-1.2 7.3-3.5 8.5-8.5Zm8 11.8c.6 2.4 1.7 3.5 4 4-2.3.6-3.4 1.7-4 4-.6-2.3-1.7-3.4-4-4 2.3-.5 3.4-1.6 4-4Z"/>'
};

const AiIconAsset = "assets/rippling-ai-filled.svg";

const TopNavAssets = {
  avatar: "https://www.figma.com/api/mcp/asset/9ffec698-d94d-44c4-9eb3-33d07e1ad60f",
  logo: "https://www.figma.com/api/mcp/asset/03096164-b238-442e-8448-3d28d487c4b7",
  search: "https://www.figma.com/api/mcp/asset/cf77c5f7-120d-411d-be9d-30b7b27d2c01",
  help: "https://www.figma.com/api/mcp/asset/1b8622d4-e2ae-4586-a010-fd97b3308049",
  messages: "https://www.figma.com/api/mcp/asset/151e7229-df95-4ef2-a2d6-f010dcbbf6c1",
  ai: AiIconAsset
};

const ArtifactTrayAssets = {
  lightning: "assets/artifact-lightning.svg",
  document: "assets/artifact-document.svg",
  chart: "assets/artifact-chart.svg",
  pin: "assets/artifact-pin.svg"
};

function svgIcon(name, size = 20) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${Icon[name]}</svg>`;
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

function topNavAssetButton(source, label, iconClass = "") {
  return `
    <button class="icon-button top-nav__icon-button" type="button" aria-label="${label}" title="${label}">
      ${topNavAssetIcon(source, label, iconClass)}
    </button>
  `;
}

const artifactOpenModes = [
  { id: "onTop", label: "On top" },
  { id: "onRight", label: "On right" },
  { id: "push", label: "Push" }
];

const sideTrayModes = [
  { id: "tray", label: "Tray", description: "Opens as the right drawer" },
  { id: "takeover", label: "Full chat", description: "Slides over the side chat" }
];

function getArtifactModeLabel() {
  return artifactOpenModes.find((mode) => mode.id === prototypeState.artifactMode)?.label || "On top";
}

function getSideTrayModeLabel() {
  return sideTrayModes.find((mode) => mode.id === prototypeState.sideTrayMode)?.label || "Tray";
}

function ArtifactSettingsMenu() {
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
        <span>Artifact settings</span>
        ${svgIcon("chevronDown", 14)}
      </button>
      ${
        prototypeState.settingsMenuOpen
          ? `
            <div class="artifact-settings__menu" role="menu">
              <section class="artifact-settings__section">
                <p>Artifact open</p>
                ${artifactOpenModes
                  .map(
                    (mode) => `
                      <button
                        class="artifact-settings__item ${prototypeState.artifactMode === mode.id ? "is-selected" : ""}"
                        type="button"
                        data-artifact-mode="${mode.id}"
                        role="menuitemradio"
                        aria-checked="${prototypeState.artifactMode === mode.id}"
                      >
                        <span>${mode.label}</span>
                        ${prototypeState.artifactMode === mode.id ? svgIcon("check", 16) : ""}
                      </button>
                    `
                  )
                  .join("")}
              </section>
              <section class="artifact-settings__section">
                <p>Side panel artifacts</p>
                ${sideTrayModes
                  .map(
                    (mode) => `
                      <button
                        class="artifact-settings__item artifact-settings__item--stack ${prototypeState.sideTrayMode === mode.id ? "is-selected" : ""}"
                        type="button"
                        data-side-tray-mode="${mode.id}"
                        role="menuitemradio"
                        aria-checked="${prototypeState.sideTrayMode === mode.id}"
                      >
                        <span>${mode.label}</span>
                        <small>${mode.description}</small>
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
        "more",
        "Artifact actions",
        `artifact-trigger chat-artifact-menu__trigger ${prototypeState.artifactMenuOpen ? "is-active" : ""}`,
        `data-action="toggle-artifact-menu" aria-haspopup="true" aria-expanded="${prototypeState.artifactMenuOpen}"`
      )}
      ${
        prototypeState.artifactMenuOpen
          ? `
            <div class="chat-artifact-menu__panel" role="menu" aria-label="Artifact actions">
              <button class="chat-artifact-menu__item" type="button" data-action="see-artifacts" role="menuitem">
                <span>See artifacts</span>
              </button>
              <button class="chat-artifact-menu__item" type="button" data-action="share-chat" role="menuitem">
                <span>Share</span>
              </button>
            </div>
          `
          : ""
      }
    </div>
  `;
}

function TopNav() {
  return `
    <header class="top-nav" data-node-id="1534:19677">
      <div class="top-nav__brand">
        <div class="rippling-mark" aria-hidden="true">
          <img class="top-nav__logo-img" src="${TopNavAssets.logo}" alt="" />
        </div>
        <div class="top-nav__product">
          <span>Analytics</span>
          <span class="top-nav-chevron" aria-hidden="true">${svgIcon("chevronDown", 16)}</span>
          <div class="top-nav__divider"></div>
        </div>
      </div>
      <label class="top-nav__search">
        ${topNavAssetIcon(TopNavAssets.search, "Search", "top-nav-asset-icon--search")}
        <input aria-label="Search or jump to" placeholder="Search or jump to..." />
      </label>
      ${ArtifactSettingsMenu()}
      <div class="top-nav__actions">
        ${topNavAssetButton(TopNavAssets.help, "Help", "top-nav-asset-icon--help")}
        ${topNavAssetButton(TopNavAssets.messages, "Messages")}
        ${topNavAssetButton(TopNavAssets.ai, "AI", "top-nav-asset-icon--top-ai")}
        <div class="top-nav__divider"></div>
        <button class="top-nav__company" type="button" aria-label="Account menu">
          <span>Acme, Inc.</span>
          <span class="avatar"><img src="${TopNavAssets.avatar}" alt="" /></span>
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
  return `app-layout app-layout--nav-${isNavExpanded() ? "expanded" : "collapsed"} app-layout--nav-pin-${prototypeState.navPinState}`;
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
    label: "create a policy to reduce people working 40+ hrs a week",
    artifactId: "hours-policy"
  },
  {
    label: "Build a T&A report that shows start and Finish Times",
    artifactId: "time-attendance-report"
  },
  {
    label: "show me my turnover rate for the year",
    artifactId: "turnover-rate-year"
  },
  {
    label: "show me my under and over utilized employees",
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

  return escapeHtml(value);
}

function TablePreview({ artifactId, variant = "compact", interactive = false, showMoreMenu = true, promoted = null } = {}) {
  const artifact = getArtifactById(artifactId);
  const table = artifact?.tablePreview;
  if (!table) return "";

  const isCompact = variant === "compact";
  const isPromoted = promoted ?? isArtifactPromoted(artifactId);
  const isTrackerStyle = table.displayStyle === "tracker";
  const columns = isCompact ? table.columns.filter((column) => column.compact !== false) : table.columns;
  const rows = isCompact ? table.rows.slice(0, table.compactRows || 4) : table.rows;
  const actionAttrs = interactive ? `role="button" tabindex="0" data-action="view-chat-output" data-artifact-id="${artifactId}" aria-label="View ${escapeHtml(artifact.label)}"` : "";

  return `
    <div class="table-preview table-preview--${variant} ${isPromoted ? "table-preview--promoted" : "table-preview--widget"} ${isTrackerStyle ? "table-preview--tracker" : ""}" data-node-id="883:13314" ${actionAttrs}>
      ${interactive && showMoreMenu ? `<div class="table-preview__more">${ArtifactMoreMenu({ artifactId })}</div>` : ""}
      ${isTrackerStyle ? `<div class="table-preview__titlebar"><h3>${escapeHtml(table.title)}</h3></div>` : ""}
      <div class="table-preview__scroller">
        <table aria-label="${escapeHtml(table.title)}">
          <thead>
            <tr>
              ${columns
                .map(
                  (column) => `
                    <th class="table-preview__cell--${column.type || "text"}" style="width: ${column.width || "auto"}">
                      <span>${escapeHtml(column.label)}</span>
                      ${isTrackerStyle ? svgIcon("chevronDown", 12) : ""}
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
  if (!metrics.length) return "";

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

function ChatOutputSummary(message) {
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
          const canSaveWidget = isTableWidgetArtifact(message.artifactId);
          const isSavedWidget = canSaveWidget && prototypeState.savedArtifactIds.includes(message.artifactId);
          const isDashboardOutput = Boolean(message.metrics?.length);
          const isEditingOutput = message.artifactId && editingArtifactId === message.artifactId;
          const outputClassName = message.role === "assistant"
            ? [
                "chat-output",
                message.preview ? "chat-output--has-preview" : "",
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
                ${
                  message.artifactId && !isEditingOutput
                    ? `
                      ${message.preview === "report" ? "" : `<button class="icon-button chat-output-more" type="button" aria-label="More actions" title="More actions">${svgIcon("more", 18)}</button>`}
                      <div class="chat-output-action-row" aria-label="Output actions">
                        <div class="chat-output-actions">
                          <button class="chat-output-action" type="button" data-action="view-chat-output" data-artifact-id="${message.artifactId}">
                            ${svgIcon("eye", 14)}
                            <span>View</span>
                          </button>
                        </div>
                        ${
                          canSaveWidget
                            ? `
                              <button
                                class="chat-output-action chat-output-action--save ${isSavedWidget ? "is-saved" : ""}"
                                type="button"
                                data-action="save-chat-output"
                                data-artifact-id="${message.artifactId}"
                                aria-label="${isSavedWidget ? `Saved ${escapeHtml(getArtifactById(message.artifactId).label)}` : `Save ${escapeHtml(getArtifactById(message.artifactId).label)}`}"
                                ${isSavedWidget ? 'aria-pressed="true"' : ""}
                              >
                                <span>${isSavedWidget ? "Saved" : "Save"}</span>
                              </button>
                            `
                            : ""
                        }
                      </div>
                    `
                    : ""
                }
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
    id: "turnover-rate-year",
    label: "Turnover rate by quarter",
    eyebrow: "Workforce report",
    icon: ArtifactTrayAssets.chart,
    tone: "berry",
    summary: "A yearly turnover report showing quarterly turnover rate, exits, and average headcount so HR can spot where attrition accelerated.",
    metrics: [
      { value: "12.4%", label: "yearly turnover rate" },
      { value: "31", label: "employee exits" },
      { value: "250", label: "average headcount" }
    ],
    reportPreview: {
      title: "Turnover rate for the year",
      yLabel: "Turnover rate",
      xLabel: "2026",
      ticks: [16, 12, 8, 4, 0],
      bars: [
        { label: "Q1", value: 9.6 },
        { label: "Q2", value: 11.8 },
        { label: "Q3", value: 14.2 },
        { label: "Q4", value: 13.7 }
      ]
    },
    sections: [
      {
        title: "Calculation",
        body: "Annual turnover is calculated as employee exits divided by average headcount, with voluntary and involuntary exits kept in the detail view."
      },
      {
        title: "Trend",
        body: "Turnover increased in the second half of the year, peaking in Q3 before easing slightly in Q4."
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
    label: "Promotion review candidates",
    eyebrow: "Talent analysis",
    icon: ArtifactTrayAssets.lightning,
    tone: "berry",
    summary: "A talent artifact identifying employees who have not had a promotion recorded in the last two years.",
    metrics: [
      { value: "42", label: "employees identified" },
      { value: "18", label: "over 30 months since promotion" },
      { value: "6", label: "high performers to review" }
    ],
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

function isTableWidgetArtifact(artifactId) {
  return Boolean(getArtifactById(artifactId)?.tablePreview);
}

function isAutoSavedArtifact(artifactId) {
  const artifact = getArtifactById(artifactId);
  return Boolean(artifact && !artifact.tablePreview);
}

function getEditingArtifactId() {
  return prototypeState.editingArtifactId || prototypeState.workbenchArtifactId || (prototypeState.artifactSurfaceMode === "edit" ? prototypeState.activeArtifactId : null);
}

function isArtifactPromoted(artifactId) {
  return Boolean(artifactId && (prototypeState.savedArtifactIds.includes(artifactId) || getEditingArtifactId() === artifactId));
}

function getAutoSavedArtifactIds(artifactIds) {
  return getValidArtifactIds(artifactIds).filter(isAutoSavedArtifact);
}

function getCurrentArtifactItems() {
  return prototypeState.savedArtifactIds.map(getArtifactById).filter(Boolean);
}

function ArtifactTray({ mode = "component" } = {}) {
  const items = getCurrentArtifactItems();
  const trayHeight = Math.min(88 + Math.max(items.length, 1) * 30, 360);
  return `
    <aside class="artifact-tray artifact-tray--${mode} ${items.length > 3 ? "artifact-tray--has-many" : ""}" style="--artifact-tray-height: ${trayHeight}px" data-node-id="1682:16369" aria-label="Artifacts">
      <div class="artifact-tray__content">
        <h2>Artifacts</h2>
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
              : '<p class="artifact-empty">Saved artifacts will appear here.</p>'
          }
        </div>
      </div>
      <button class="artifact-tray__pin" type="button" aria-label="Hide artifacts tray" title="Hide artifacts tray" data-action="hide-artifact-tray">
        <img src="${ArtifactTrayAssets.pin}" alt="" />
      </button>
    </aside>
  `;
}

function ArtifactTakeoverPanel({ mode = "sidebar" } = {}) {
  const items = getCurrentArtifactItems();
  return `
    <aside class="artifact-takeover artifact-takeover--${mode} ${prototypeState.artifactTrayOpen ? "is-open" : "is-hidden"}" aria-label="Artifacts">
      <div class="artifact-takeover__header">
        <div>
          <p>Artifacts</p>
          <h2>Open artifacts</h2>
        </div>
        ${iconButton("close", "Close artifacts", "artifact-takeover__close", 'data-action="hide-artifact-tray"')}
      </div>
      <div class="artifact-takeover__list">
        ${
          items.length
            ? items
                .map(
                  (item) => `
                    <button class="artifact-takeover-item" type="button" data-artifact-id="${item.id}">
                      <span class="artifact-item__icon artifact-item__icon--${item.tone}">
                        <img src="${item.icon}" alt="" />
                      </span>
                      <span>
                        <strong>${escapeHtml(item.label)}</strong>
                        <small>${escapeHtml(item.eyebrow)}</small>
                      </span>
                    </button>
                  `
                )
                .join("")
            : '<p class="artifact-takeover__empty">Saved artifacts will appear here.</p>'
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

function ArtifactReader() {
  const artifact = getActiveArtifact();
  const showHeaderClose = prototypeState.artifactMode !== "push";
  const showFooterActions = prototypeState.artifactMode === "onTop";
  const metrics = artifact.metrics || [];
  const sections = artifact.sections || [];
  return `
    <section class="artifact-reader artifact-reader--${prototypeState.artifactMode}" aria-label="${escapeHtml(artifact.label)}">
      <div class="artifact-reader__header">
        <div>
          <p class="artifact-reader__eyebrow">${escapeHtml(artifact.eyebrow)}</p>
          <h2>${escapeHtml(artifact.label)}</h2>
        </div>
        ${showHeaderClose ? iconButton("close", "Close artifact", "artifact-reader__close", 'data-action="close-artifact"') : ""}
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
        showFooterActions
          ? `
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
          `
          : ""
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
  if (prototypeState.artifactMode !== "onTop" && prototypeState.chatMode !== "fullscreen") return "";
  const isEditing = prototypeState.artifactSurfaceMode === "edit";

  if (prototypeState.artifactMode === "onTop") {
    return `
      <div class="artifact-surface artifact-surface--modal">
        ${ArtifactReader()}
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
  const showChatHistory = isFull && !(prototypeState.activeArtifactId && prototypeState.artifactMode !== "onTop");
  const showChatHistoryOverlay = !isFull && !(prototypeState.activeArtifactId && prototypeState.artifactMode !== "onTop");
  const canShowArtifactTray = !(prototypeState.activeArtifactId && prototypeState.artifactMode !== "onTop");
  const useTakeoverTray = !isFull && prototypeState.sideTrayMode === "takeover";
  const artifactTrayClass = prototypeState.artifactTrayOpen ? "is-open" : "is-hidden";
  const nodeId = isFull ? "298:43955" : "298:43951";
  const artifactClass = isFull && prototypeState.activeArtifactId ? ` ai-panel--artifact-${prototypeState.artifactMode}` : "";
  const chatTitle = conversationData[prototypeState.activeConversationId]?.title || "{{Chat title}}";
  return `
    <div class="ai-panel-wrap ai-panel-wrap--${mode}" data-node-id="${nodeId}">
      ${showChatHistory ? ChatHistoryPanel({ variant: "rail" }) : ""}
      ${isFull ? "" : '<div class="ai-panel-handle-frame"><div class="ai-panel-handle"></div></div>'}
      <section class="ai-panel ai-panel--${mode}${artifactClass}" aria-label="${isFull ? "AI chat full screen" : "AI chat sidebar"}">
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
            ${isFull ? "" : iconButton("expand", "Expand", "", 'data-action="expand-chat"')}
            ${iconButton("close", isFull ? "Collapse chat" : "Close", "", isFull ? 'data-action="collapse-chat"' : "")}
          </div>
        </div>
        ${
          canShowArtifactTray
            ? `
              ${
                useTakeoverTray
                  ? ArtifactTakeoverPanel({ mode })
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
  artifactMode: "onTop",
  activeArtifactId: null,
  artifactSurfaceMode: "view",
  artifactReturnMode: null,
  artifactTrayOpen: false,
  artifactMenuOpen: false,
  activeArtifactActionMenuId: null,
  sideTrayMode: "takeover",
  settingsMenuOpen: false,
  chatHistoryOpen: false,
  composerDraft: "",
  chatMessages: [],
  savedArtifactIds: [],
  activeConversationId: null,
  workbenchArtifactId: null,
  editingArtifactId: null,
  snackbar: null,
  navExpanded: false,
  navPinState: "unpinned"
};

let snackbarTimer = null;

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
  return `
    ${SideNav()}
    ${Workbench()}
    <aside class="chat-demo chat-demo--${prototypeState.chatMode}">
      ${ChatPanel({ mode: prototypeState.chatMode })}
    </aside>
    ${ArtifactSurface()}
  `;
}

function bindTopNavInteractions() {
  document.querySelector('[data-action="toggle-settings-menu"]')?.addEventListener("click", () => {
    prototypeState.settingsMenuOpen = !prototypeState.settingsMenuOpen;
    renderApp();
  });

  document.querySelectorAll("[data-artifact-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.artifactMode = button.dataset.artifactMode;
      prototypeState.settingsMenuOpen = false;

      if (prototypeState.activeArtifactId && prototypeState.chatMode !== "fullscreen" && prototypeState.artifactMode !== "onTop") {
        prototypeState.artifactReturnMode = "sidebar";
        transitionChatMode("fullscreen");
        return;
      }

      renderApp();
    });
  });

  document.querySelectorAll("[data-side-tray-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.sideTrayMode = button.dataset.sideTrayMode;
      prototypeState.artifactTrayOpen = false;
      prototypeState.settingsMenuOpen = false;
      renderApp();
    });
  });
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

function openArtifact(artifactId) {
  if (!getArtifactById(artifactId)) return;

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

function resolveArtifactFromText(text) {
  const normalized = text.toLowerCase();
  const exactPrompt = promptItems.find((prompt) => prompt.label.toLowerCase() === normalized);

  if (exactPrompt) return exactPrompt.artifactId;
  if (normalized.includes("40") || normalized.includes("overtime") || (normalized.includes("policy") && normalized.includes("hour"))) return "hours-policy";
  if (normalized.includes("t&a") || normalized.includes("time and attendance") || (normalized.includes("start") && normalized.includes("finish"))) return "time-attendance-report";
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
      body: "I can help with that. Try one of the suggested prompts or ask for a policy, T&A report, or promotion review and I will create the matching artifact."
    };
  }

  const responseByArtifactId = {
    "hours-policy": "I drafted a 40+ hour reduction policy with manager review thresholds, exception handling, and follow-up guidance. Use View to open the artifact or Edit to work on it in the canvas.",
    "time-attendance-report": "I built a T&A report outline with start times, finish times, actual hours, and exception fields. Use View to open the artifact or Edit to work on it in the canvas.",
    "turnover-rate-year": "I calculated your turnover rate for the year and broke it out by quarter so you can see where attrition accelerated.",
    "employee-utilization-review": "I identified under and over utilized employees based on scheduled capacity versus assigned work, with recommended next actions for each group.",
    "promotion-review": "I identified employees who have not had a promotion recorded in the last two years and included review columns for manager calibration. Use View to open the artifact or Edit to work on it in the canvas."
  };

  return {
    role: "assistant",
    body: responseByArtifactId[artifactId] || `I created ${artifact.label} and opened it for review.`,
    summaryBlocks: artifact.responseSummaryBlocks || null,
    artifactId,
    actionLabel: `Open ${artifact.label}`,
    preview: artifact.reportPreview || artifact.tablePreview ? "report" : null,
    metrics: artifact.responseMetrics || null,
    insight: artifact.responseInsight || null
  };
}

function getValidArtifactIds(artifactIds) {
  return [...new Set(artifactIds.filter((artifactId) => getArtifactById(artifactId)))];
}

function addArtifactsToTray(artifactIds) {
  const nextArtifactIds = [...prototypeState.savedArtifactIds];

  getValidArtifactIds(artifactIds).forEach((artifactId) => {
    if (!nextArtifactIds.includes(artifactId)) {
      nextArtifactIds.push(artifactId);
    }
  });

  prototypeState.savedArtifactIds = nextArtifactIds;
}

function saveTableWidgetToTray(artifactId) {
  if (!isTableWidgetArtifact(artifactId)) return;

  addArtifactsToTray([artifactId]);
  revealArtifactTray();
}

function revealArtifactTray() {
  prototypeState.artifactTrayOpen = false;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.chatHistoryOpen = false;
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
  prototypeState.savedArtifactIds = getAutoSavedArtifactIds(conversation.artifactIds || conversation.messages.map((message) => message.artifactId).filter(Boolean));
  prototypeState.artifactTrayOpen = prototypeState.savedArtifactIds.length > 0;
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
  addArtifactsToTray(artifact && isAutoSavedArtifact(artifact.id) ? [artifact.id] : []);
  prototypeState.artifactTrayOpen = false;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;
  prototypeState.editingArtifactId = null;

  renderAppLayout();
}

function editArtifactInWorkbench(artifactId) {
  if (!getArtifactById(artifactId)) return;
  prototypeState.editingArtifactId = artifactId;
  addArtifactsToTray([artifactId]);

  if (prototypeState.chatMode === "fullscreen") {
    prototypeState.artifactTrayOpen = false;
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

  document.querySelectorAll('[data-action="save-chat-output"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      saveTableWidgetToTray(button.dataset.artifactId);
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
    button.addEventListener("click", () => {
      const prompt = promptItems.find((item) => item.artifactId === button.dataset.promptArtifactId);
      sendChatMessage(prompt?.label || button.textContent, button.dataset.promptArtifactId);
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
      prototypeState.savedArtifactIds = [];
      prototypeState.artifactTrayOpen = false;
      prototypeState.artifactMenuOpen = false;
      prototypeState.activeArtifactActionMenuId = null;
      prototypeState.chatHistoryOpen = false;
      prototypeState.workbenchArtifactId = null;
      prototypeState.editingArtifactId = null;
      renderAppLayout();
    });
  });

  document.querySelectorAll('[data-action="toggle-artifact-menu"]').forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.artifactMenuOpen = !prototypeState.artifactMenuOpen;
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
      setArtifactTrayOpen(!prototypeState.artifactTrayOpen);
    });
  });

  document.querySelectorAll('[data-action="hide-artifact-tray"]').forEach((button) => {
    button.addEventListener("click", () => {
      setArtifactTrayOpen(false);
    });
  });

  document.querySelector('[data-action="peek-artifact-tray"]')?.addEventListener("mouseenter", () => {
    setArtifactTrayOpen(true);
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

  document.querySelector('[data-action="collapse-chat"]')?.addEventListener("click", () => {
    prototypeState.activeArtifactId = null;
    prototypeState.artifactSurfaceMode = "view";
    prototypeState.artifactReturnMode = null;
    prototypeState.chatHistoryOpen = false;
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

function setArtifactTrayOpen(isOpen) {
  prototypeState.artifactTrayOpen = isOpen;
  prototypeState.artifactMenuOpen = false;
  prototypeState.activeArtifactActionMenuId = null;

  const dock = document.querySelector(".artifact-dock");
  const takeover = document.querySelector(".artifact-takeover");
  const trigger = document.querySelector('[data-action="toggle-artifact-menu"]');
  const peekZone = document.querySelector('[data-action="peek-artifact-tray"]');

  dock?.classList.toggle("is-open", isOpen);
  dock?.classList.toggle("is-hidden", !isOpen);
  takeover?.classList.toggle("is-open", isOpen);
  takeover?.classList.toggle("is-hidden", !isOpen);
  trigger?.classList.toggle("is-active", isOpen);
  trigger?.setAttribute("aria-expanded", "false");
  peekZone?.classList.toggle("is-visible", !isOpen);
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
  const isOnTop = prototypeState.artifactMode === "onTop";
  const closeDuration = prototypeState.artifactMode === "onTop" ? 200 : 360;

  if (!surface || shouldReduceMotion) {
    prototypeState.activeArtifactId = null;
    prototypeState.artifactSurfaceMode = "view";
    prototypeState.artifactReturnMode = null;
    prototypeState.editingArtifactId = null;

    if (returnMode !== prototypeState.chatMode) {
      transitionChatMode(returnMode);
      return;
    }

    if (isOnTop) {
      surface?.remove();
    } else {
      renderAppLayout();
    }
    return;
  }

  surface.classList.add("artifact-surface--closing");

  if (!isOnTop) {
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

    if (isOnTop) {
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

  if (nextMode === "fullscreen" && !prototypeState.activeArtifactId && getCurrentArtifactItems().length) {
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
}

function renderSnackbarOnly() {
  const root = document.getElementById("snackbar-root");
  if (!root) {
    renderApp();
    return;
  }

  root.innerHTML = SnackbarHost();
  bindSnackbarInteractions();
}

function renderWorkbenchOnly() {
  const workbench = document.querySelector(".workbench");
  if (!workbench) {
    renderAppLayout();
    return;
  }

  workbench.innerHTML = WorkbenchPage();
}

renderApp();
