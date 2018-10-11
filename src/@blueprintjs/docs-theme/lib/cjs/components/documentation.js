"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var client_1 = require("documentalist/dist/client");
var React = tslib_1.__importStar(require("react"));
var core_1 = require("@blueprintjs/core");
var context_1 = require("../common/context");
var utils_1 = require("../common/utils");
var tags_1 = require("../tags");
var block_1 = require("./block");
var navButton_1 = require("./navButton");
var navigator_1 = require("./navigator");
var navMenu_1 = require("./navMenu");
var page_1 = require("./page");
var scrollbar_1 = require("./scrollbar");
var apiLink_1 = require("./typescript/apiLink");
var Documentation = /** @class */ (function (_super) {
    tslib_1.__extends(Documentation, _super);
    function Documentation(props) {
        var _this = _super.call(this, props) || this;
        _this.refHandlers = {
            content: function (ref) { return (_this.contentElement = ref); },
            nav: function (ref) { return (_this.navElement = ref); },
        };
        _this.handleHashChange = function () {
            if (location.hostname.indexOf("blueprint") !== -1) {
                // captures a pageview for new location hashes that are dynamically rendered without a full page request
                window.ga("send", "pageview", { page: location.pathname + location.search + location.hash });
            }
            // Don't call componentWillMount since the HotkeysTarget decorator will be invoked on every hashchange.
            _this.updateHash();
        };
        _this.handleCloseNavigator = function () { return _this.setState({ isNavigatorOpen: false }); };
        _this.handleOpenNavigator = function () { return _this.setState({ isNavigatorOpen: true }); };
        _this.handleNavigation = function (activeSectionId) {
            // only update state if this section reference is valid
            var activePageId = _this.routeToPage[activeSectionId];
            if (activeSectionId !== undefined && activePageId !== undefined) {
                _this.setState({ activePageId: activePageId, activeSectionId: activeSectionId, isNavigatorOpen: false });
                _this.scrollToActiveSection();
            }
        };
        _this.handleNextSection = function () { return _this.shiftSection(1); };
        _this.handlePreviousSection = function () { return _this.shiftSection(-1); };
        _this.handleScroll = function () {
            var activeSectionId = getScrolledReference(100, _this.props.scrollParent);
            if (activeSectionId == null) {
                return;
            }
            // use the longer (deeper) name to avoid jumping up between sections
            _this.setState({ activeSectionId: activeSectionId });
        };
        _this.handleApiBrowserOpen = function (activeApiMember) {
            return _this.setState({ activeApiMember: activeApiMember, isApiBrowserOpen: true });
        };
        _this.handleApiBrowserClose = function () { return _this.setState({ isApiBrowserOpen: false }); };
        _this.state = {
            activeApiMember: "",
            activePageId: props.defaultPageId,
            activeSectionId: props.defaultPageId,
            isApiBrowserOpen: false,
            isNavigatorOpen: false,
        };
        // build up static map of all references to their page, for navigation / routing
        _this.routeToPage = {};
        utils_1.eachLayoutNode(_this.props.docs.nav, function (node, parents) {
            var reference = (client_1.isPageNode(node) ? node : parents[0]).reference;
            _this.routeToPage[node.route] = reference;
        });
        return _this;
    }
    Documentation.prototype.getChildContext = function () {
        var _this = this;
        var _a = this.props, docs = _a.docs, renderViewSourceLinkText = _a.renderViewSourceLinkText;
        return {
            getDocsData: function () { return docs; },
            renderBlock: function (block) { return block_1.renderBlock(block, _this.props.tagRenderers); },
            renderType: context_1.hasTypescriptData(docs)
                ? function (type) {
                    return client_1.linkify(type, docs.typescript, function (name, _d, idx) { return React.createElement(apiLink_1.ApiLink, { key: name + "-" + idx, name: name }); });
                }
                : function (type) { return type; },
            renderViewSourceLinkText: core_1.Utils.isFunction(renderViewSourceLinkText)
                ? renderViewSourceLinkText
                : function () { return "View source"; },
            showApiDocs: this.handleApiBrowserOpen,
        };
    };
    Documentation.prototype.render = function () {
        var _a = this.state, activeApiMember = _a.activeApiMember, activePageId = _a.activePageId, activeSectionId = _a.activeSectionId, isApiBrowserOpen = _a.isApiBrowserOpen;
        var _b = this.props.docs, nav = _b.nav, pages = _b.pages;
        var rootClasses = classnames_1.default("docs-root", { "docs-examples-only": location.search === "?examples" }, this.props.className);
        var apiClasses = classnames_1.default("docs-api-overlay", this.props.className);
        return (React.createElement("div", { className: rootClasses },
            this.props.banner,
            React.createElement("div", { className: "docs-app" },
                React.createElement("div", { className: "docs-nav-wrapper" },
                    React.createElement("div", { className: "docs-nav", ref: this.refHandlers.nav },
                        this.props.header,
                        React.createElement("div", { className: "docs-nav-divider" }),
                        React.createElement(navButton_1.NavButton, { icon: "search", hotkey: "shift + s", text: "Search...", onClick: this.handleOpenNavigator }),
                        React.createElement("div", { className: "docs-nav-divider" }),
                        React.createElement(navMenu_1.NavMenu, { activePageId: activePageId, activeSectionId: activeSectionId, items: nav, level: 0, onItemClick: this.handleNavigation, renderNavMenuItem: this.props.renderNavMenuItem }),
                        this.props.footer)),
                React.createElement("main", { className: classnames_1.default("docs-content-wrapper", core_1.Classes.FILL), ref: this.refHandlers.content, role: "main" },
                    React.createElement(page_1.Page, { page: pages[activePageId], renderActions: this.props.renderPageActions, tagRenderers: this.props.tagRenderers }))),
            React.createElement(core_1.Overlay, { className: apiClasses, isOpen: isApiBrowserOpen, onClose: this.handleApiBrowserClose },
                React.createElement(tags_1.TypescriptExample, { tag: "typescript", value: activeApiMember })),
            React.createElement(navigator_1.Navigator, { isOpen: this.state.isNavigatorOpen, items: nav, itemExclude: this.props.navigatorExclude, onClose: this.handleCloseNavigator })));
    };
    Documentation.prototype.renderHotkeys = function () {
        return (React.createElement(core_1.Hotkeys, null,
            React.createElement(core_1.Hotkey, { global: true, combo: "shift+s", label: "Open navigator", onKeyDown: this.handleOpenNavigator, preventDefault: true }),
            React.createElement(core_1.Hotkey, { global: true, combo: "[", label: "Previous section", onKeyDown: this.handlePreviousSection }),
            React.createElement(core_1.Hotkey, { global: true, combo: "]", label: "Next section", onKeyDown: this.handleNextSection })));
    };
    Documentation.prototype.componentWillMount = function () {
        scrollbar_1.addScrollbarStyle();
        this.updateHash();
    };
    Documentation.prototype.componentDidMount = function () {
        var _this = this;
        // hooray! so you don't have to!
        core_1.FocusStyleManager.onlyShowFocusOnTabs();
        this.scrollToActiveSection();
        core_1.Utils.safeInvoke(this.props.onComponentUpdate, this.state.activePageId);
        // whoa handling future history...
        window.addEventListener("hashchange", this.handleHashChange);
        document.addEventListener("scroll", this.handleScroll);
        requestAnimationFrame(function () { return _this.maybeScrollToActivePageMenuItem(); });
    };
    Documentation.prototype.componentWillUnmount = function () {
        window.removeEventListener("hashchange", this.handleHashChange);
        document.removeEventListener("scroll", this.handleScroll);
    };
    Documentation.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var activePageId = this.state.activePageId;
        // only scroll to heading when switching pages, but always check if nav item needs scrolling.
        if (prevState.activePageId !== activePageId) {
            this.scrollToActiveSection();
            this.maybeScrollToActivePageMenuItem();
        }
        core_1.Utils.safeInvoke(this.props.onComponentUpdate, activePageId);
    };
    Documentation.prototype.updateHash = function () {
        // update state based on current hash location
        var sectionId = location.hash.slice(1);
        this.handleNavigation(sectionId === "" ? this.props.defaultPageId : sectionId);
    };
    Documentation.prototype.maybeScrollToActivePageMenuItem = function () {
        var activeSectionId = this.state.activeSectionId;
        // only scroll nav menu if active item is not visible in viewport.
        // using activeSectionId so you can see the page title in nav (may not be visible in document).
        var navItemElement = this.navElement.querySelector("a[href=\"#" + activeSectionId + "\"]");
        var scrollOffset = navItemElement.offsetTop - this.navElement.scrollTop;
        if (scrollOffset < 0 || scrollOffset > this.navElement.offsetHeight) {
            // reveal two items above this item in list
            this.navElement.scrollTop = navItemElement.offsetTop - navItemElement.offsetHeight * 2;
        }
    };
    Documentation.prototype.scrollToActiveSection = function () {
        if (this.contentElement != null) {
            scrollToReference(this.state.activeSectionId, this.props.scrollParent);
        }
    };
    Documentation.prototype.shiftSection = function (direction) {
        // use the current hash instead of `this.state.activeSectionId` to avoid cases where the
        // active section cannot actually be selected in the nav (often a short one at the end).
        var currentSectionId = location.hash.slice(1);
        // this map is built by an in-order traversal so the keys are actually sorted correctly!
        var sections = Object.keys(this.routeToPage);
        var index = sections.indexOf(currentSectionId);
        var newIndex = index === -1 ? 0 : (index + direction + sections.length) % sections.length;
        // updating hash triggers event listener which sets new state.
        location.hash = sections[newIndex];
    };
    Documentation.childContextTypes = context_1.DocumentationContextTypes;
    Documentation = tslib_1.__decorate([
        core_1.HotkeysTarget
    ], Documentation);
    return Documentation;
}(React.PureComponent));
exports.Documentation = Documentation;
/** Shorthand for element.querySelector() + cast to HTMLElement */
function queryHTMLElement(parent, selector) {
    return parent.querySelector(selector);
}
/**
 * Returns the reference of the closest section within `offset` pixels of the top of the viewport.
 */
function getScrolledReference(offset, scrollContainer) {
    if (scrollContainer === void 0) { scrollContainer = document.documentElement; }
    var headings = Array.from(scrollContainer.querySelectorAll(".docs-title"));
    while (headings.length > 0) {
        // iterating in reverse order (popping from end / bottom of page)
        // so the first element below the threshold is the one we want.
        var element = headings.pop();
        if (element.offsetTop < scrollContainer.scrollTop + offset) {
            // relying on DOM structure to get reference
            return element.querySelector("[data-route]").getAttribute("data-route");
        }
    }
    return undefined;
}
/**
 * Scroll the scroll container such that the reference heading appears at the top of the viewport.
 */
function scrollToReference(reference, scrollContainer) {
    if (scrollContainer === void 0) { scrollContainer = document.documentElement; }
    // without rAF, on initial load this would scroll to the bottom because the CSS had not been applied.
    // with rAF, CSS is applied before updating scroll positions so all elements are in their correct places.
    requestAnimationFrame(function () {
        var headingAnchor = queryHTMLElement(scrollContainer, "a[data-route=\"" + reference + "\"]");
        if (headingAnchor != null && headingAnchor.parentElement != null) {
            var scrollOffset = headingAnchor.parentElement.offsetTop + headingAnchor.offsetTop;
            scrollContainer.scrollTop = scrollOffset;
        }
    });
}
//# sourceMappingURL=documentation.js.map