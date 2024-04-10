/*!
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */ (function () {
  var e = {
      1970: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return u;
          },
        });
        var r = function () {
            var e = this,
              t = e._self._c;
            return t(
              "SVGIcon",
              {
                staticClass: "close-icon",
                attrs: { viewBox: "0 0 14 14", themeId: "close" },
              },
              [
                t("path", {
                  attrs: {
                    d: "M12.73,0l1.27,1.27-5.74,5.73,5.72,5.72-1.27,1.27-5.72-5.72L1.28,13.99,.01,12.72,5.72,7.01,0,1.28,1.27,.01,6.99,5.73,12.73,0Z",
                  },
                }),
              ]
            );
          },
          o = [],
          i = n(3453),
          a = { name: "CloseIcon", components: { SVGIcon: i.Z } },
          s = a,
          c = n(1001),
          l = (0, c.Z)(s, r, o, !1, null, null, null),
          u = l.exports;
      },
      8785: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return u;
          },
        });
        var r = function () {
            var e = this,
              t = e._self._c;
            return t(
              "SVGIcon",
              {
                staticClass: "inline-chevron-right-icon",
                attrs: {
                  viewBox: "0 0 14 14",
                  themeId: "inline-chevron-right",
                },
              },
              [
                t("path", {
                  attrs: {
                    d: "M2.964 1.366l0.649-0.76 7.426 6.343-7.423 6.445-0.655-0.755 6.545-5.683-6.542-5.59z",
                  },
                }),
              ]
            );
          },
          o = [],
          i = n(3453),
          a = { name: "InlineChevronRightIcon", components: { SVGIcon: i.Z } },
          s = a,
          c = n(1001),
          l = (0, c.Z)(s, r, o, !1, null, null, null),
          u = l.exports;
      },
      3453: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return u;
          },
        });
        var r = function () {
            var e = this,
              t = e._self._c;
            return t(
              "svg",
              {
                staticClass: "svg-icon",
                attrs: {
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
              },
              [
                e.themeOverrideURL
                  ? t("use", {
                      attrs: {
                        href: `${e.themeOverrideURL}#${e.themeId}`,
                        width: "100%",
                        height: "100%",
                      },
                    })
                  : e._t("default"),
              ],
              2
            );
          },
          o = [],
          i = n(9089),
          a = {
            name: "SVGIcon",
            props: {
              themeId: { type: String, required: !1 },
              iconUrl: { type: String, default: null },
            },
            computed: {
              themeOverrideURL: ({ iconUrl: e, themeId: t }) =>
                e || (0, i.$8)(["theme", "icons", t], void 0),
            },
          },
          s = a,
          c = n(1001),
          l = (0, c.Z)(s, r, o, !1, null, "979a134a", null),
          u = l.exports;
      },
      5670: function (e, t, n) {
        "use strict";
        n(647);
        var r = n(144),
          o = n(7152),
          i = n(8345),
          a = function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                class: {
                  fromkeyboard: e.fromKeyboard,
                  hascustomheader: e.hasCustomHeader,
                },
                attrs: { id: "app" },
              },
              [
                t("div", { attrs: { id: e.AppTopID } }),
                e.isTargetIDE
                  ? e._e()
                  : t("a", { attrs: { href: "#main", id: "skip-nav" } }, [
                      e._v(e._s(e.$t("accessibility.skip-navigation"))),
                    ]),
                t("InitialLoadingPlaceholder"),
                e._t(
                  "header",
                  function () {
                    return [
                      e.enablei18n ? t("SuggestLang") : e._e(),
                      e.hasCustomHeader
                        ? t("custom-header", {
                            attrs: {
                              "data-color-scheme": e.preferredColorScheme,
                            },
                          })
                        : e._e(),
                    ];
                  },
                  { isTargetIDE: e.isTargetIDE }
                ),
                t("div", { attrs: { id: e.baseNavStickyAnchorId } }),
                e._t(
                  "default",
                  function () {
                    return [
                      t("router-view", { staticClass: "router-content" }),
                      e.hasCustomFooter
                        ? t("custom-footer", {
                            attrs: {
                              "data-color-scheme": e.preferredColorScheme,
                            },
                          })
                        : e.isTargetIDE
                        ? e._e()
                        : t("Footer", {
                            scopedSlots: e._u([
                              {
                                key: "default",
                                fn: function ({ className: n }) {
                                  return [
                                    e.enablei18n
                                      ? t(
                                          "div",
                                          { class: n },
                                          [t("LocaleSelector")],
                                          1
                                        )
                                      : e._e(),
                                  ];
                                },
                              },
                            ]),
                          }),
                    ];
                  },
                  { isTargetIDE: e.isTargetIDE }
                ),
                e._t("footer", null, { isTargetIDE: e.isTargetIDE }),
              ],
              2
            );
          },
          s = [],
          c = n(4030),
          l = n(9804),
          u = function () {
            var e = this,
              t = e._self._c;
            return t(
              "footer",
              { staticClass: "footer" },
              [
                t("div", { staticClass: "row" }, [t("ColorSchemeToggle")], 1),
                e._t("default", null, { className: "row" }),
              ],
              2
            );
          },
          d = [],
          m = function () {
            var e = this,
              t = e._self._c;
            return t(
              "fieldset",
              {
                staticClass: "color-scheme-toggle",
                attrs: { role: "radiogroup" },
              },
              [
                t("legend", { staticClass: "visuallyhidden" }, [
                  e._v(e._s(e.$t("color-scheme.select"))),
                ]),
                e._l(e.options, function (n) {
                  return t("label", { key: n }, [
                    t("input", {
                      attrs: { type: "radio" },
                      domProps: {
                        checked: n == e.preferredColorScheme,
                        value: n,
                      },
                      on: { input: e.setPreferredColorScheme },
                    }),
                    t("div", { staticClass: "text" }, [
                      e._v(e._s(e.$t(`color-scheme.${n}`))),
                    ]),
                  ]);
                }),
              ],
              2
            );
          },
          f = [],
          h = {
            name: "ColorSchemeToggle",
            data: () => ({ appState: c["default"].state }),
            computed: {
              options: ({ supportsAutoColorScheme: e }) => [
                l.Z.light,
                l.Z.dark,
                ...(e ? [l.Z.auto] : []),
              ],
              preferredColorScheme: ({ appState: e }) => e.preferredColorScheme,
              supportsAutoColorScheme: ({ appState: e }) =>
                e.supportsAutoColorScheme,
            },
            methods: {
              setPreferredColorScheme: (e) => {
                c["default"].setPreferredColorScheme(e.target.value);
              },
            },
            watch: {
              preferredColorScheme: {
                immediate: !0,
                handler(e) {
                  document.body.dataset.colorScheme = e;
                },
              },
            },
          },
          p = h,
          g = n(1001),
          v = (0, g.Z)(p, m, f, !1, null, "78690df2", null),
          b = v.exports,
          w = { name: "Footer", components: { ColorSchemeToggle: b } },
          y = w,
          S = (0, g.Z)(y, u, d, !1, null, "4e049dbd", null),
          C = S.exports,
          _ = function () {
            var e = this,
              t = e._self._c;
            return e.loaded
              ? e._e()
              : t("div", {
                  staticClass: "InitialLoadingPlaceholder",
                  attrs: { id: "loading-placeholder" },
                });
          },
          E = [],
          L = {
            name: "InitialLoadingPlaceholder",
            data() {
              return { loaded: !1 };
            },
            created() {
              const e = () => {
                this.loaded = !0;
              };
              this.$router.onReady(e, e);
            },
          },
          P = L,
          A = (0, g.Z)(P, _, E, !1, null, "35c356b6", null),
          k = A.exports,
          T = n(1716),
          j = n(9089);
        function I(e, t) {
          return (
            e &&
            "object" === typeof e &&
            Object.prototype.hasOwnProperty.call(e, t) &&
            "string" === typeof e[t]
          );
        }
        function x(e, t, n, r) {
          if (
            !t ||
            "object" !== typeof t ||
            (r && (I(t, "light") || I(t, "dark")))
          ) {
            let o = t;
            if ((I(t, r) && (o = t[r]), "object" === typeof o)) return;
            n[e] = o;
          } else
            Object.entries(t).forEach(([t, o]) => {
              const i = [e, t].join("-");
              x(i, o, n, r);
            });
        }
        function N(e, t = "light") {
          const n = {},
            r = e || {};
          return x("-", r, n, t), n;
        }
        var $ = n(2717),
          O = function () {
            var e = this,
              t = e._self._c;
            return e.displaySuggestLang
              ? t("div", { staticClass: "suggest-lang" }, [
                  t(
                    "div",
                    { staticClass: "suggest-lang__wrapper" },
                    [
                      t(
                        "router-link",
                        {
                          staticClass: "suggest-lang__link",
                          attrs: {
                            to: e.getLocaleParam(e.preferredLocale),
                            lang: e.getCodeForSlug(e.preferredLocale),
                          },
                          nativeOn: {
                            click: function (t) {
                              return e.setPreferredLocale(e.preferredLocale);
                            },
                          },
                        },
                        [
                          e._v(
                            e._s(e.$i18n.messages[e.preferredLocale]["view-in"])
                          ),
                          t("InlineChevronRightIcon", {
                            staticClass: "icon-inline",
                          }),
                        ],
                        1
                      ),
                      t(
                        "div",
                        { staticClass: "suggest-lang__close-icon-wrapper" },
                        [
                          t(
                            "button",
                            {
                              staticClass: "suggest-lang__close-icon-button",
                              attrs: { "aria-label": e.$t("continue-viewing") },
                              on: {
                                click: function (t) {
                                  return e.setPreferredLocale(e.$i18n.locale);
                                },
                              },
                            },
                            [t("CloseIcon", { staticClass: "icon-inline" })],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ])
              : e._e();
          },
          D = [],
          Z = n(8785),
          R = n(1970),
          q = n(2412),
          U = n(9030),
          V = {
            name: "SuggestLang",
            components: { InlineChevronRightIcon: Z.Z, CloseIcon: R.Z },
            computed: {
              preferredLocale: () => {
                const e = c["default"].state.preferredLocale;
                if (e) return e;
                const t = q.find((e) => {
                  const t = e.code.split("-")[0],
                    n = window.navigator.language.split("-")[0];
                  return n === t;
                });
                return t ? t.slug : null;
              },
              displaySuggestLang: ({ preferredLocale: e, $i18n: t }) =>
                e && t.locale !== e,
            },
            methods: {
              setPreferredLocale: (e) => {
                c["default"].setPreferredLocale(e);
              },
              getCodeForSlug: U.dZ,
              getLocaleParam: U.KP,
            },
          },
          B = V,
          M = (0, g.Z)(B, O, D, !1, null, "768a347b", null),
          H = M.exports,
          F = function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "locale-selector" },
              [
                t(
                  "select",
                  {
                    attrs: { "aria-label": e.$t("select-language") },
                    domProps: { value: e.$i18n.locale },
                    on: { change: e.updateRouter },
                  },
                  e._l(e.locales, function ({ slug: n, name: r, code: o }) {
                    return t(
                      "option",
                      { key: n, attrs: { lang: o }, domProps: { value: n } },
                      [e._v(" " + e._s(r) + " ")]
                    );
                  }),
                  0
                ),
                t("ChevronThickIcon", { staticClass: "icon-inline" }),
              ],
              1
            );
          },
          W = [],
          J = function () {
            var e = this,
              t = e._self._c;
            return t(
              "SVGIcon",
              {
                staticClass: "chevron-thick-icon",
                attrs: { viewBox: "0 0 14 10.5", themeId: "chevron-thick" },
              },
              [
                t("path", {
                  attrs: {
                    d: "M12.43,0l1.57,1.22L7,10.5,0,1.23,1.58,0,7,7,12.43,0Z",
                  },
                }),
              ]
            );
          },
          G = [],
          K = n(3453),
          z = { name: "ChevronThickIcon", components: { SVGIcon: K.Z } },
          X = z,
          Y = (0, g.Z)(X, J, G, !1, null, null, null),
          Q = Y.exports,
          ee = {
            name: "LocaleSelector",
            components: { ChevronThickIcon: Q },
            methods: {
              updateRouter({ target: { value: e } }) {
                this.$router.push((0, U.KP)(e)),
                  c["default"].setPreferredLocale(e),
                  (0, U.jk)(e, this);
              },
            },
            computed: {
              availableLocales: () => c["default"].state.availableLocales,
              locales: ({ availableLocales: e }) =>
                q.filter(({ code: t }) => e.includes(t)),
            },
          },
          te = ee,
          ne = (0, g.Z)(te, F, W, !1, null, "d21858a2", null),
          re = ne.exports,
          oe = {
            name: "CoreApp",
            components: {
              Footer: C,
              InitialLoadingPlaceholder: k,
              SuggestLang: H,
              LocaleSelector: re,
            },
            provide() {
              return {
                isTargetIDE: this.isTargetIDE,
                performanceMetricsEnabled:
                  "true" ===
                  {
                    NODE_ENV: "production",
                    VUE_APP_TITLE: "Documentation",
                    BASE_URL: "{{BASE_PATH}}/",
                  }.VUE_APP_PERFORMANCE_ENABLED,
              };
            },
            data() {
              return {
                AppTopID: $.$,
                appState: c["default"].state,
                fromKeyboard: !1,
                isTargetIDE:
                  "ide" ===
                  {
                    NODE_ENV: "production",
                    VUE_APP_TITLE: "Documentation",
                    // BASE_URL: "{{BASE_PATH}}/",
                  }.VUE_APP_TARGET,
                themeSettings: j.S3,
                baseNavStickyAnchorId: T.EA,
              };
            },
            computed: {
              currentColorScheme: ({ appState: e }) => e.systemColorScheme,
              preferredColorScheme: ({ appState: e }) => e.preferredColorScheme,
              availableLocales: ({ appState: e }) => e.availableLocales,
              CSSCustomProperties: ({
                currentColorScheme: e,
                preferredColorScheme: t,
                themeSettings: n,
              }) => N(n.theme, t === l.Z.auto ? e : t),
              hasCustomHeader: () =>
                !!window.customElements.get("custom-header"),
              hasCustomFooter: () =>
                !!window.customElements.get("custom-footer"),
              enablei18n: ({ availableLocales: e }) =>
                (0, j.$8)(["features", "docs", "i18n", "enable"], !1) &&
                e.length > 1,
            },
            props: { enableThemeSettings: { type: Boolean, default: !0 } },
            watch: {
              CSSCustomProperties: {
                immediate: !0,
                handler(e) {
                  this.detachStylesFromRoot(e), this.attachStylesToRoot(e);
                },
              },
            },
            async created() {
              window.addEventListener("keydown", this.onKeyDown),
                this.$bridge.on("navigation", this.handleNavigationRequest),
                this.enableThemeSettings &&
                  Object.assign(this.themeSettings, await (0, j.Kx)()),
                window.addEventListener(
                  "pageshow",
                  this.syncPreferredColorScheme
                ),
                this.$once("hook:beforeDestroy", () => {
                  window.removeEventListener(
                    "pageshow",
                    this.syncPreferredColorScheme
                  );
                });
            },
            mounted() {
              ((
                document.querySelector(".footer-current-year") || {}
              ).innerText = new Date().getFullYear()),
                this.attachColorSchemeListeners();
            },
            beforeDestroy() {
              this.fromKeyboard
                ? window.removeEventListener("mousedown", this.onMouseDown)
                : window.removeEventListener("keydown", this.onKeyDown),
                this.$bridge.off("navigation", this.handleNavigationRequest),
                this.detachStylesFromRoot(this.CSSCustomProperties);
            },
            methods: {
              onKeyDown() {
                (this.fromKeyboard = !0),
                  window.addEventListener("mousedown", this.onMouseDown),
                  window.removeEventListener("keydown", this.onKeyDown);
              },
              onMouseDown() {
                (this.fromKeyboard = !1),
                  window.addEventListener("keydown", this.onKeyDown),
                  window.removeEventListener("mousedown", this.onMouseDown);
              },
              handleNavigationRequest(e) {
                this.$router.push(e);
              },
              attachColorSchemeListeners() {
                if (!window.matchMedia) return;
                const e = window.matchMedia("(prefers-color-scheme: dark)");
                e.addListener(this.onColorSchemePreferenceChange),
                  this.$once("hook:beforeDestroy", () => {
                    e.removeListener(this.onColorSchemePreferenceChange);
                  }),
                  this.onColorSchemePreferenceChange(e);
              },
              onColorSchemePreferenceChange({ matches: e }) {
                const t = e ? l.Z.dark : l.Z.light;
                c["default"].setSystemColorScheme(t);
              },
              attachStylesToRoot(e) {
                const t = document.body;
                Object.entries(e)
                  .filter(([, e]) => Boolean(e))
                  .forEach(([e, n]) => {
                    t.style.setProperty(e, n);
                  });
              },
              detachStylesFromRoot(e) {
                const t = document.body;
                Object.entries(e).forEach(([e]) => {
                  t.style.removeProperty(e);
                });
              },
              syncPreferredColorScheme() {
                c["default"].syncPreferredColorScheme();
              },
            },
          },
          ie = oe,
          ae = (0, g.Z)(ie, a, s, !1, null, "3742c1d7", null),
          se = ae.exports;
        class ce {
          constructor() {
            this.$send = () => {};
          }
          send(e) {
            this.$send(e);
          }
        }
        class le {
          constructor() {
            const {
              webkit: { messageHandlers: { bridge: e = {} } = {} } = {},
            } = window;
            this.bridge = e;
            const { postMessage: t = () => {} } = e;
            this.$send = t.bind(e);
          }
          send(e) {
            this.$send(e);
          }
        }
        class ue {
          constructor(e = new ce()) {
            (this.backend = e), (this.listeners = {});
          }
          send(e) {
            this.backend.send(e);
          }
          receive(e) {
            this.emit(e.type, e.data);
          }
          emit(e, t) {
            this.listeners[e] && this.listeners[e].forEach((e) => e(t));
          }
          on(e, t) {
            this.listeners[e] || (this.listeners[e] = new Set()),
              this.listeners[e].add(t);
          }
          off(e, t) {
            this.listeners[e] && this.listeners[e].delete(t);
          }
        }
        var de = {
          install(e, t) {
            let n;
            (n =
              t.performanceMetricsEnabled || "ide" === t.appTarget
                ? new le()
                : new ce()),
              (e.prototype.$bridge = new ue(n));
          },
        };
        function me(e) {
          return `custom-${e}`;
        }
        function fe(e) {
          return class extends HTMLElement {
            constructor() {
              super();
              const t = this.attachShadow({ mode: "open" }),
                n = e.content.cloneNode(!0);
              t.appendChild(n);
            }
          };
        }
        function he(e) {
          const t = me(e),
            n = document.getElementById(t);
          n && window.customElements.define(t, fe(n));
        }
        function pe(e, t = { names: ["header", "footer"] }) {
          const { names: n } = t;
          (e.config.ignoredElements = /^custom-/), n.forEach(he);
        }
        function ge(e, t) {
          const { value: n = !1 } = t;
          e.style.display = n ? "none" : "";
        }
        var ve = { hide: ge };
        function be(e, { performanceMetrics: t = !1 } = {}) {
          (e.config.productionTip = !1),
            e.use(pe),
            e.directive("hide", ve.hide),
            e.use(de, {
              appTarget: {
                NODE_ENV: "production",
                VUE_APP_TITLE: "Documentation",
                BASE_URL: "{{BASE_PATH}}/",
              }.VUE_APP_TARGET,
              performanceMetricsEnabled: t,
            }),
            (window.bridge = e.prototype.$bridge),
            (e.config.performance = t);
        }
        var we = n(4589),
          ye = n(5381),
          Se = n(5657),
          Ce = n(3208),
          _e = n(2449);
        const Ee = 10;
        function Le(e) {
          const { name: t } = e,
            n = t.includes(we.J_);
          return n ? Ee : 0;
        }
        function Pe() {
          const { location: e } = window;
          return e.pathname + e.search + e.hash;
        }
        function Ae() {
          const e = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          );
          return e < ye.kB.nav.small.maxWidth ? T.L$ : T.RS;
        }
        async function ke(e, t, n) {
          if (n) return await this.app.$nextTick(), n;
          if (e.meta && e.meta.preventScrolling) return !1;
          if (e.hash) {
            const { name: t, query: n, hash: r } = e,
              o = t.includes(we.J_),
              i = !!n.changes,
              a = Ae(),
              s = o && i ? a : 0,
              c = a + s + Le(e),
              l =
                "ide" ===
                {
                  NODE_ENV: "production",
                  VUE_APP_TITLE: "Documentation",
                  BASE_URL: "{{BASE_PATH}}/",
                }.VUE_APP_TARGET
                  ? 0
                  : c;
            return { selector: (0, Ce.sj)(r), offset: { x: 0, y: l } };
          }
          return !(0, _e.Lp)(e, t) && { x: 0, y: 0 };
        }
        async function Te() {
          let e = window.sessionStorage.getItem("scrollPosition");
          if (e) {
            try {
              e = JSON.parse(e);
            } catch (t) {
              return void console.error(
                "Error parsing scrollPosition from sessionStorage",
                t
              );
            }
            Pe() === e.location &&
              (await (0, Se.J)(2), window.scrollTo(e.x, e.y));
          }
        }
        function je() {
          window.location.hash ||
            sessionStorage.setItem(
              "scrollPosition",
              JSON.stringify({
                x: window.pageXOffset,
                y: window.pageYOffset,
                location: Pe(),
              })
            );
        }
        var Ie = function () {
            var e = this,
              t = e._self._c;
            return t("GenericError");
          },
          xe = [],
          Ne = function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "generic-error" }, [
              t(
                "div",
                { staticClass: "container" },
                [
                  t("h1", { staticClass: "title error-content" }, [
                    e._v(e._s(e.message || e.$t("error.unknown"))),
                  ]),
                  e._t("default"),
                ],
                2
              ),
            ]);
          },
          $e = [],
          Oe = {
            name: "GenericError",
            props: { message: { type: String, required: !1 } },
          },
          De = Oe,
          Ze = (0, g.Z)(De, Ne, $e, !1, null, "1f05d9ec", null),
          Re = Ze.exports,
          qe = {
            name: "ServerError",
            components: { GenericError: Re },
            created() {
              c["default"].setAllLocalesAreAvailable();
            },
          },
          Ue = qe,
          Ve = (0, g.Z)(Ue, Ie, xe, !1, null, null, null),
          Be = Ve.exports,
          Me = function () {
            var e = this,
              t = e._self._c;
            return t(
              "GenericError",
              { attrs: { message: e.$t("error.not-found") } },
              [e._t("default")],
              2
            );
          },
          He = [],
          Fe = {
            name: "NotFound",
            components: { GenericError: Re },
            created() {
              c["default"].setAllLocalesAreAvailable();
            },
          },
          We = Fe,
          Je = (0, g.Z)(We, Me, He, !1, null, null, null),
          Ge = Je.exports,
          Ke = [
            {
              path: "/tutorials/:id",
              name: "tutorials-overview",
              component: () =>
                Promise.all([n.e(523), n.e(843)]).then(n.bind(n, 4586)),
            },
            {
              path: "/tutorials/:id/*",
              name: "topic",
              component: () =>
                Promise.all([n.e(523), n.e(903), n.e(162)]).then(
                  n.bind(n, 8032)
                ),
            },
            {
              path: "/documentation/*",
              name: we.J_,
              component: () =>
                Promise.all([n.e(523), n.e(37), n.e(903), n.e(982)]).then(
                  n.bind(n, 5840)
                ),
            },
            { path: "*", name: we.vL, component: Ge },
            { path: "*", name: we.Rp, component: Be },
          ];
        const ze = [{ pathPrefix: "/:locale?", nameSuffix: "-locale" }];
        function Xe(e, t = [], n = ze) {
          return n.reduce(
            (n, r) =>
              n.concat(
                e
                  .filter((e) => !t.includes(e.name))
                  .map((e) => ({
                    ...e,
                    path: r.pathPrefix + e.path,
                    name: e.name + r.nameSuffix,
                  }))
              ),
            []
          );
        }
        const Ye = [...Ke, ...Xe(Ke, [we.vL, we.Rp])];
        function Qe(e = {}) {
          const t = new i.Z({
            mode: "history",
            base: j.FH,
            scrollBehavior: ke,
            ...e,
            routes: e.routes || Ye,
          });
          return (
            t.onReady(() => {
              "scrollRestoration" in window.history &&
                (window.history.scrollRestoration = "manual"),
                Te();
            }),
            "ide" !==
              {
                NODE_ENV: "production",
                VUE_APP_TITLE: "Documentation",
                BASE_URL: "{{BASE_PATH}}/",
              }.VUE_APP_TARGET &&
              t.onError((e) => {
                const { route: n = { path: "/" } } = e;
                t.replace({ name: "server-error", params: [n.path] });
              }),
            window.addEventListener("unload", je),
            t
          );
        }
        var et = n(5559);
        function tt(e = et) {
          const { defaultLocale: t, messages: n, dateTimeFormats: r = {} } = e,
            i = new o.Z({
              dateTimeFormats: r,
              locale: t,
              fallbackLocale: t,
              messages: n,
            });
          return i;
        }
        r["default"].use(be),
          r["default"].use(i.Z),
          r["default"].use(o.Z),
          new r["default"]({
            router: Qe(),
            render: (e) => e(se),
            i18n: tt(),
          }).$mount("#app");
      },
      2717: function (e, t, n) {
        "use strict";
        n.d(t, {
          $: function () {
            return r;
          },
        });
        const r = "app-top";
      },
      9804: function (e, t) {
        "use strict";
        t["Z"] = { auto: "auto", dark: "dark", light: "light" };
      },
      1265: function (e, t) {
        "use strict";
        t["Z"] = { eager: "eager", lazy: "lazy" };
      },
      1716: function (e, t, n) {
        "use strict";
        n.d(t, {
          EA: function () {
            return i;
          },
          L$: function () {
            return o;
          },
          MenuLinkModifierClasses: function () {
            return s;
          },
          RS: function () {
            return r;
          },
          Yj: function () {
            return a;
          },
        });
        const r = 52,
          o = 48,
          i = "nav-sticky-anchor",
          a = "nav-open-navigator",
          s = { noClose: "noclose" };
      },
      4589: function (e, t, n) {
        "use strict";
        n.d(t, {
          J_: function () {
            return i;
          },
          Rp: function () {
            return o;
          },
          vL: function () {
            return r;
          },
        });
        const r = "not-found",
          o = "server-error",
          i = "documentation-topic";
      },
      5559: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            defaultLocale: function () {
              return a;
            },
            messages: function () {
              return s;
            },
          });
        var r = JSON.parse(
            '{"view-in":"View in English","continue-viewing":"Continue viewing in English","language":"Language","video":{"replay":"Replay","play":"Play","pause":"Pause","watch":"Watch intro video"},"tutorials":{"title":"Tutorial | Tutorials","step":"Step {number}","submit":"Submit","next":"Next","preview":{"title":"No Preview | Preview | Previews","no-preview-available-step":"No preview available for this step."},"nav":{"chapters":"Chapters","current":"Current {thing}"},"assessment":{"check-your-understanding":"Check Your Understanding","success-message":"Great job, you\'ve answered all the questions for this tutorial.","answer-result":"Answer {answer} is {result}","correct":"correct","incorrect":"incorrect","next-question":"Next question","legend":"Possible answers"},"project-files":"Project files","estimated-time":"Estimated Time","sections":{"chapter":"Chapter {number}"},"question-of":"Question {index} of {total}","section-of":"{number} of {total}","overriding-title":"{newTitle} with {title}","time":{"format":"{number} {minutes}","minutes":{"full":"minute | minutes | {count} minutes","short":"min | mins"},"hours":{"full":"hour | hours"}}},"documentation":{"title":"Documentation","nav":{"breadcrumbs":"Breadcrumbs","menu":"Menu","open-menu":"Open Menu","close-menu":"Close Menu"},"current-page":"Current page is {title}","card":{"learn-more":"Learn More","read-article":"Read article","start-tutorial":"Start tutorial","view-api":"View API collection","view-symbol":"View symbol","view-sample-code":"View sample code"},"view-more":"View more"},"aside-kind":{"beta":"Beta","experiment":"Experiment","important":"Important","note":"Note","tip":"Tip","warning":"Warning","deprecated":"Deprecated"},"change-type":{"added":"Added","modified":"Modified","deprecated":"Deprecated"},"verbs":{"hide":"Hide","show":"Show","close":"Close"},"sections":{"title":"Section {number}","on-this-page":"On this page","topics":"Topics","default-implementations":"Default Implementations","relationships":"Relationships","see-also":"See Also","declaration":"Declaration","details":"Details","parameters":"Parameters","possible-values":"Possible Values","parts":"Parts","availability":"Availability","resources":"Resources"},"metadata":{"details":{"name":"Name","key":"Key","type":"Type"},"beta":{"legal":"This documentation refers to beta software and may be changed.","software":"Beta Software"},"default-implementation":"Default implementation provided. | Default implementations provided."},"availability":{"introduced-and-deprecated":"Introduced in {name} {introducedAt} and deprecated in {name} {deprecatedAt}","available-on":"Available on {name} {introducedAt} and later"},"more":"More","less":"Less","api-reference":"API Reference","filter":{"title":"Filter","search-symbols":"Search symbols in {technology}","suggested-tags":"Suggested tag | Suggested tags","selected-tags":"Selected tag | Selected tags","add-tag":"Add tag","tag-select-remove":"Tag. Select to remove from list.","navigate":"To navigate the symbols, press Up Arrow, Down Arrow, Left Arrow or Right Arrow","siblings-label":"{number-siblings} of {total-siblings} symbols inside {parent-siblings}","parent-label":"{number-siblings} of {total-siblings} symbols inside {parent-siblings} containing one symbol | {number-siblings} of {total-siblings} symbols inside {parent-siblings} containing {number-parent} symbols","reset-filter":"Reset Filter"},"navigator":{"title":"Documentation Navigator","open-navigator":"Open Documentation Navigator","close-navigator":"Close Documentation Navigator","no-results":"No results found.","no-children":"No data available.","error-fetching":"There was an error fetching the data.","items-found":"No items were found | 1 item was found | {number} items were found. Tab back to navigate through them.","navigator-is":"Navigator is {state}","state":{"loading":"loading","ready":"ready"},"tags":{"hide-deprecated":"Hide Deprecated"}},"tab":{"request":"Request","response":"Response"},"required":"Required","parameters":{"default":"Default","minimum":"Minimum","maximum":"Maximum","possible-types":"Type | Possible types","possible-values":"Value | Possible Values"},"content-type":"Content-Type: {value}","read-only":"Read-only","error":{"unknown":"An unknown error occurred.","image":"Image failed to load","not-found":"The page you\'re looking for can\'t be found."},"color-scheme":{"select":"Select a color scheme preference","auto":"Auto","dark":"Dark","light":"Light"},"accessibility":{"strike":{"start":"start of stricken text","end":"end of stricken text"},"code":{"start":"start of code block","end":"end of code block"},"skip-navigation":"Skip Navigation","in-page-link":"in page link"},"select-language":"Select the language for this page","icons":{"clear":"Clear","web-service-endpoint":"Web Service Endpoint","search":"Search"},"formats":{"parenthesis":"({content})","colon":"{content}: "},"quicknav":{"button":{"label":"Open Quick Navigation","title":"Click or type / for quick navigation"},"preview-unavailable":"Preview unavailable"}}'
          ),
          o = JSON.parse(
            '{"view-in":"以中文查看","continue-viewing":"继续以中文查看","language":"语言","video":{"replay":"重新播放","play":"播放","pause":"暂停","watch":"观看介绍视频"},"tutorials":{"title":"教程","step":"第 {number} 步","submit":"提交","next":"下一步","preview":{"title":"无预览 | 预览","no-preview-available-step":"这一步没有预览。"},"nav":{"chapters":"章节","current":"当前{thing}"},"assessment":{"check-your-understanding":"检查你的理解程度","success-message":"很棒，你回答了此教程的所有问题。","answer-number-is":"第 {index} 个答案","correct":"正确","incorrect":"错误","next-question":"下一个问题"},"project-files":"项目文件","estimated-time":"预计时间","sections":{"chapter":"第 {number} 章"},"question-of":"第 {index} 个问题（共 {total} 个）","section-of":"{number}/{total}","overriding-title":"{newTitle}{title}","time":{"format":"{number} {minutes}","minutes":{"full":"分钟 | {count} 分钟","short":"分钟"},"hours":{"full":"小时"}}},"documentation":{"title":"文档","nav":{"breadcrumbs":"面包屑导航","menu":"菜单","open-menu":"打开菜单","close-menu":"关闭菜单"},"current-page":"当前页面为：{title}","card":{"learn-more":"进一步了解","read-article":"阅读文章","start-tutorial":"开始教程","view-api":"查看 API 集合","view-symbol":"查看符号","view-sample-code":"查看示例代码"}},"aside-kind":{"beta":"Beta 版","experiment":"试验","important":"重要事项","note":"注","tip":"提示","warning":"警告","deprecated":"已弃用"},"change-type":{"added":"已添加","modified":"已修改","deprecated":"已弃用"},"verbs":{"hide":"隐藏","show":"显示","close":"关闭"},"sections":{"title":"第 {number} 部分","on-this-page":"在此页面上","topics":"主题","default-implementations":"默认实现","relationships":"关系","see-also":"另请参阅","declaration":"声明","details":"详细信息","parameters":"参数","possible-values":"可能值","parts":"部件","availability":"可用性","resources":"资源"},"metadata":{"details":{"name":"名称","key":"密钥","type":"类型"},"beta":{"legal":"此文档涉及 Beta 版软件且可能会改动。","software":"Beta 版软件"},"default-implementation":"提供默认实现。| 提供默认实现方法。"},"availability":{"introduced-and-deprecated":"{name} {introducedAt} 中引入，{name} {deprecatedAt} 中弃用","available-on":"{name} {introducedAt} 及更高版本中可用"},"more":"更多","less":"更少","api-reference":"API 参考","filter":{"title":"过滤","search-symbols":"在 {technology} 搜索符号","suggested-tags":"建议标签","selected-tags":"所选标签","add-tag":"添加标签","tag-select-remove":"标签。选择以从列表中移除。","navigate":"若要导航符号，请按下上箭头、下箭头、左箭头或右箭头。","siblings-label":"{parent-siblings} 内含 {number-siblings} 个符号（共 {total-siblings} 个）","parent-label":"{parent-siblings} 内含 {number-siblings} 个符号（共 {total-siblings} 个）包含一个符号 | {parent-siblings} 内含 {number-siblings} 个符号（共 {total-siblings} 个）包含 {number-parent} 个符号","reset-filter":"还原过滤条件"},"navigator":{"title":"文档导航器","open-navigator":"打开文档导航器","close-navigator":"关闭文档导航器","no-results":"未找到结果。","no-children":"无可用数据。","error-fetching":"获取数据时出错。","items-found":"未找到任何项目 | 找到 1 个项目 | 找到 {number} 个项目。按下 Tab 键导航。","navigator-is":"导航器{state}","state":{"loading":"正在载入","ready":"准备就绪"},"tags":{"hide-deprecated":"隐藏已弃用"}},"tab":{"request":"请求","response":"回复"},"required":"必需","parameters":{"default":"默认","minimum":"最小值","maximum":"最大值","possible-types":"类型 | 可能类型","possible-values":"值 | 可能值"},"content-type":"内容类型：{value}","read-only":"只读","error":{"unknown":"出现未知错误。","image":"图像无法载入"},"color-scheme":{"select":"选择首选颜色方案","auto":"自动","dark":"深色","light":"浅色"},"accessibility":{"strike":{"start":"删除线文本开始","end":"删除线文本结束"},"code":{"start":"代码块开头","end":"代码块结尾"},"skip-navigation":"跳过导航"},"select-language":"选择此页面的语言","icons":{"clear":"清除","web-service-endpoint":"网络服务端点","search":"搜索"},"formats":{"parenthesis":"({content})","colon":"{content}： "},"quicknav":{"button":{"label":"打开快速导航","title":"点按或键入 / 进行快速导航"}}}'
          ),
          i = JSON.parse(
            '{"view-in":"日本語で表示","continue-viewing":"日本語で表示を続ける","language":"言語","video":{"replay":"リプレイ","play":"再生","pause":"一時停止","watch":"概要のビデオを観る"},"tutorials":{"title":"チュートリアル | チュートリアル","step":"手順{number}","submit":"送信","next":"次へ","preview":{"title":"プレビューなし | プレビュー | プレビュー","no-preview-available-step":"この手順では利用可能なプレビューがありません。"},"nav":{"chapters":"章","current":"現在の{thing}"},"assessment":{"check-your-understanding":"理解度を確認する","success-message":"よくできました。このチュートリアルの問題にすべて回答しました。","answer-number-is":"問題番号{index}は","correct":"正解です","incorrect":"不正解です","next-question":"次の問題"},"project-files":"プロジェクトファイル","estimated-time":"予測時間","sections":{"chapter":"{number}章"},"question-of":"{total}問中の{index}問","section-of":"{total}件中の{number}件","overriding-title":"{title}の{newTitle}","time":{"format":"{number} {minutes}","minutes":{"full":"分 | 分 | {count}分","short":"分 | 分"},"hours":{"full":"時間 | 時間"}}},"documentation":{"title":"ドキュメント","nav":{"breadcrumbs":"パンくずリスト","menu":"メニュー","open-menu":"メニューを開く","close-menu":"メニューを閉じる"},"current-page":"現在のページは{title}です","card":{"learn-more":"詳しい情報","read-article":"記事を読む","start-tutorial":"チュートリアルを開始","view-api":"APIのコレクションを表示","view-symbol":"記号を表示","view-sample-code":"サンプルコードを表示"}},"aside-kind":{"beta":"ベータ版","experiment":"試験運用版","important":"重要","note":"注意","tip":"ヒント","warning":"警告","deprecated":"非推奨"},"change-type":{"added":"追加","modified":"変更","deprecated":"非推奨"},"verbs":{"hide":"非表示","show":"表示","close":"閉じる"},"sections":{"title":"セクション{number}","on-this-page":"このページの内容","topics":"トピック","default-implementations":"デフォルト実装","relationships":"関連項目","see-also":"参照","declaration":"宣言","details":"詳細","parameters":"パラメータ","possible-values":"使用できる値","parts":"パーツ","availability":"利用可能","resources":"リソース"},"metadata":{"details":{"name":"名前","key":"キー","type":"タイプ"},"beta":{"legal":"このドキュメントはベータ版のソフトウェアのもので、変更される可能性があります。","software":"ベータ版ソフトウェア"},"default-implementation":"デフォルト実装あり。| デフォルト実装あり。"},"availability":{"introduced-and-deprecated":"{name} {introducedAt}で導入され、{name} {deprecatedAt}で非推奨になりました","available-on":"{name} {introducedAt}以降で使用できます"},"more":"さらに表示","less":"表示を減らす","api-reference":"APIリファレンス","filter":{"title":"フィルタ","search-symbols":"{technology}でシンボルを検索","suggested-tags":"提案されたタグ | 提案されたタグ","selected-tags":"選択したタグ | 選択したタグ","add-tag":"タグを追加","tag-select-remove":"タグ。選択してリストから削除します。","navigate":"シンボルを移動するには、上下左右の矢印キーを押します。","siblings-label":"{total-siblings}個中{number-siblings}個のシンボルが{parent-siblings}の中にあります","parent-label":"{total-siblings}個中{number-siblings}個のシンボルが1個のシンボルを含む{parent-siblings}の中にあります | {total-siblings}個中{number-siblings}個のシンボルが{number-parent}個のシンボルを含む{parent-siblings}の中にあります","reset-filter":"フィルタをリセット"},"navigator":{"title":"ドキュメントナビゲータ","open-navigator":"ドキュメントナビゲータを開く","close-navigator":"ドキュメントナビゲータを閉じる","no-results":"結果が見つかりません。","no-children":"使用できるデータがありません。","error-fetching":"データを取得する際にエラーが起きました。","items-found":"項目が見つかりません | 1個の項目が見つかりました | {number}個の項目が見つかりましたTabキーを押すと項目をナビゲートできます。","navigator-is":"ナビゲータは{state}です","state":{"loading":"読み込み中","ready":"準備完了"},"tags":{"hide-deprecated":"非推奨の項目を非表示"}},"tab":{"request":"リクエスト","response":"レスポンス"},"required":"必須","parameters":{"default":"デフォルト","minimum":"最小","maximum":"最大","possible-types":"タイプ | 使用できるタイプ","possible-values":"値 | 使用できる値"},"content-type":"Content-Type: {value}","read-only":"読み出し専用","error":{"unknown":"原因不明のエラーが起きました。","image":"イメージを読み込めませんでした"},"color-scheme":{"select":"カラースキーム環境設定を選択","auto":"自動","dark":"ダーク","light":"ライト"},"accessibility":{"strike":{"start":"取り消し線テキストの開始","end":"取り消し線テキストの終了"},"code":{"start":"コードブロックの開始","end":"コードブロックの終了"},"skip-navigation":"ナビゲーションをスキップ"},"select-language":"このページの言語を選択","icons":{"clear":"消去","web-service-endpoint":"Webサービスのエンドポイント","search":"検索"},"formats":{"parenthesis":"（{content}）","colon":"{content}: "},"quicknav":{"button":{"label":"クイックナビゲーションを開く","title":"クリックするか「/」を入力すると素早く移動します"}}}'
          );
        const a = "en-US",
          s = { "en-US": r, "zh-CN": o, "ja-JP": i };
      },
      4030: function (e, t, n) {
        "use strict";
        var r = n(9804),
          o = n(1265),
          i = n(5394),
          a = n(2412);
        const s =
            "undefined" !== typeof window.matchMedia &&
            [r.Z.light, r.Z.dark, "no-preference"].some(
              (e) => window.matchMedia(`(prefers-color-scheme: ${e})`).matches
            ),
          c = s ? r.Z.auto : r.Z.light;
        t["default"] = {
          state: {
            imageLoadingStrategy:
              "ide" ===
              {
                NODE_ENV: "production",
                VUE_APP_TITLE: "Documentation",
                BASE_URL: "{{BASE_PATH}}/",
              }.VUE_APP_TARGET
                ? o.Z.eager
                : o.Z.lazy,
            preferredColorScheme: i.Z.preferredColorScheme || c,
            preferredLocale: i.Z.preferredLocale,
            supportsAutoColorScheme: s,
            systemColorScheme: r.Z.light,
            availableLocales: [],
          },
          reset() {
            (this.state.imageLoadingStrategy =
              "ide" ===
              {
                NODE_ENV: "production",
                VUE_APP_TITLE: "Documentation",
                BASE_URL: "{{BASE_PATH}}/",
              }.VUE_APP_TARGET
                ? o.Z.eager
                : o.Z.lazy),
              (this.state.preferredColorScheme = i.Z.preferredColorScheme || c),
              (this.state.supportsAutoColorScheme = s),
              (this.state.systemColorScheme = r.Z.light);
          },
          setImageLoadingStrategy(e) {
            this.state.imageLoadingStrategy = e;
          },
          setPreferredColorScheme(e) {
            (this.state.preferredColorScheme = e),
              (i.Z.preferredColorScheme = e);
          },
          setAllLocalesAreAvailable() {
            const e = a.map((e) => e.code);
            this.state.availableLocales = e;
          },
          setAvailableLocales(e = []) {
            this.state.availableLocales = e;
          },
          setPreferredLocale(e) {
            (this.state.preferredLocale = e),
              (i.Z.preferredLocale = this.state.preferredLocale);
          },
          setSystemColorScheme(e) {
            this.state.systemColorScheme = e;
          },
          syncPreferredColorScheme() {
            i.Z.preferredColorScheme &&
              i.Z.preferredColorScheme !== this.state.preferredColorScheme &&
              (this.state.preferredColorScheme = i.Z.preferredColorScheme);
          },
        };
      },
      5947: function (e, t, n) {
        "use strict";
        function r(e) {
          return e.reduce(
            (e, t) => (
              t.traits.includes("dark") ? e.dark.push(t) : e.light.push(t), e
            ),
            { light: [], dark: [] }
          );
        }
        function o(e) {
          const t = ["1x", "2x", "3x"];
          return t.reduce((t, n) => {
            const r = e.find((e) => e.traits.includes(n));
            return r ? t.concat({ density: n, src: r.url, size: r.size }) : t;
          }, []);
        }
        function i(e) {
          const t = "/",
            n = new RegExp(`${t}+`, "g");
          return e.join(t).replace(n, t);
        }
        function a(e) {
          const { baseUrl: t } = window,
            n = Array.isArray(e) ? i(e) : e;
          return n &&
            "string" === typeof n &&
            !n.startsWith(t) &&
            n.startsWith("/")
            ? i([t, n])
            : n;
        }
        function s(e) {
          return e ? (e.startsWith("/") ? e : `/${e}`) : e;
        }
        function c(e) {
          return e ? `url('${a(e)}')` : void 0;
        }
        function l(e) {
          return new Promise((t, n) => {
            const r = new Image();
            (r.src = e),
              (r.onerror = n),
              (r.onload = () => t({ width: r.width, height: r.height }));
          });
        }
        n.d(t, {
          AH: function () {
            return a;
          },
          Jf: function () {
            return s;
          },
          RY: function () {
            return l;
          },
          T8: function () {
            return d;
          },
          XV: function () {
            return r;
          },
          eZ: function () {
            return c;
          },
          u: function () {
            return o;
          },
        });
        const u = {
          landscape: "landscape",
          portrait: "portrait",
          square: "square",
        };
        function d(e, t) {
          return e && t
            ? e < t
              ? u.portrait
              : e > t
              ? u.landscape
              : u.square
            : null;
        }
      },
      5381: function (e, t, n) {
        "use strict";
        n.d(t, {
          L3: function () {
            return r;
          },
          fr: function () {
            return s;
          },
          kB: function () {
            return i;
          },
          lU: function () {
            return o;
          },
        });
        const r = { large: "large", medium: "medium", small: "small" },
          o = { default: "default", nav: "nav" },
          i = {
            [o.default]: {
              [r.large]: { minWidth: 1069, contentWidth: 980 },
              [r.medium]: { minWidth: 736, maxWidth: 1068, contentWidth: 692 },
              [r.small]: { minWidth: 320, maxWidth: 735, contentWidth: 280 },
            },
            [o.nav]: {
              [r.large]: { minWidth: 1024 },
              [r.medium]: { minWidth: 768, maxWidth: 1023 },
              [r.small]: { minWidth: 320, maxWidth: 767 },
            },
          },
          a = { [r.small]: 0, [r.medium]: 1, [r.large]: 2 };
        function s(e, t) {
          return a[e] > a[t];
        }
      },
      9030: function (e, t, n) {
        "use strict";
        n.d(t, {
          KP: function () {
            return l;
          },
          dZ: function () {
            return s;
          },
          jk: function () {
            return u;
          },
        });
        var r = n(2412),
          o = n(5559),
          i = n(3465);
        const a = r.reduce((e, t) => ({ ...e, [t.slug]: t.code }), {});
        function s(e) {
          return a[e];
        }
        function c(e) {
          return !!a[e];
        }
        function l(e) {
          return { params: { locale: e === o.defaultLocale ? void 0 : e } };
        }
        function u(e = o.defaultLocale, t = {}) {
          if (!c(e)) return;
          t.$i18n.locale = e;
          const n = s(e);
          (0, i.e)(n);
        }
      },
      5657: function (e, t, n) {
        "use strict";
        function r(e) {
          let t = null,
            n = e - 1;
          const r = new Promise((e) => {
            t = e;
          });
          return (
            requestAnimationFrame(function e() {
              (n -= 1), n <= 0 ? t() : requestAnimationFrame(e);
            }),
            r
          );
        }
        function o(e) {
          return new Promise((t) => {
            setTimeout(t, e);
          });
        }
        n.d(t, {
          J: function () {
            return r;
          },
          X: function () {
            return o;
          },
        });
      },
      3465: function (e, t, n) {
        "use strict";
        n.d(t, {
          X: function () {
            return u;
          },
          e: function () {
            return d;
          },
        });
        var r = n(9089),
          o = n(2449);
        const i = (0, r.$8)(["meta", "title"], "Documentation"),
          a = ({ title: e, description: t, url: n, currentLocale: r }) => [
            { name: "description", content: t },
            { property: "og:locale", content: r },
            { property: "og:site_name", content: i },
            { property: "og:type", content: "website" },
            { property: "og:title", content: e },
            { property: "og:description", content: t },
            { property: "og:url", content: n },
            { property: "og:image", content: (0, o.HH)("/developer-og.jpg") },
            {
              name: "twitter:image",
              content: (0, o.HH)("/developer-og-twitter.jpg"),
            },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:description", content: t },
            { name: "twitter:title", content: e },
            { name: "twitter:url", content: n },
          ],
          s = (e) => [e, i].filter(Boolean).join(" | "),
          c = (e) => {
            const { content: t } = e,
              n = e.property ? "property" : "name",
              r = e[n],
              o = document.querySelector(`meta[${n}="${r}"]`);
            if (o && t) o.setAttribute("content", t);
            else if (o && !t) o.remove();
            else if (t) {
              const t = document.createElement("meta");
              t.setAttribute(n, e[n]),
                t.setAttribute("content", e.content),
                document.getElementsByTagName("head")[0].appendChild(t);
            }
          },
          l = (e) => {
            document.title = e;
          };
        function u({ title: e, description: t, url: n, currentLocale: r }) {
          const o = s(e);
          l(o),
            a({ title: o, description: t, url: n, currentLocale: r }).forEach(
              (e) => c(e)
            );
        }
        function d(e) {
          document.querySelector("html").setAttribute("lang", e);
        }
      },
      5394: function (e, t, n) {
        "use strict";
        var r = n(7247);
        const o = {
            preferredColorScheme: "developer.setting.preferredColorScheme",
            preferredLocale: "developer.setting.preferredLocale",
            preferredLanguage: "docs.setting.preferredLanguage",
          },
          i = { preferredColorScheme: "docs.setting.preferredColorScheme" };
        t["Z"] = Object.defineProperties(
          {},
          Object.keys(o).reduce(
            (e, t) => ({
              ...e,
              [t]: {
                get: () => {
                  const e = i[t],
                    n = r.mr.getItem(o[t]);
                  return e ? n || r.mr.getItem(e) : n;
                },
                set: (e) => r.mr.setItem(o[t], e),
              },
            }),
            {}
          )
        );
      },
      7247: function (e, t, n) {
        "use strict";
        n.d(t, {
          mr: function () {
            return a;
          },
          tO: function () {
            return c;
          },
          y7: function () {
            return l;
          },
        });
        const r = "developer.setting.";
        function o(e = localStorage) {
          return {
            getItem: (t) => {
              try {
                return e.getItem(t);
              } catch (n) {
                return null;
              }
            },
            setItem: (t, n) => {
              try {
                e.setItem(t, n);
              } catch (r) {}
            },
            removeItem: (t) => {
              try {
                e.removeItem(t);
              } catch (n) {}
            },
          };
        }
        function i(e) {
          return {
            get: (t, n) => {
              const o = JSON.parse(e.getItem(r + t));
              return null !== o ? o : n;
            },
            set: (t, n) => e.setItem(r + t, JSON.stringify(n)),
            remove: (t) => e.removeItem(r + t),
          };
        }
        const a = o(window.localStorage),
          s = o(window.sessionStorage),
          c = i(a),
          l = i(s);
      },
      3208: function (e, t, n) {
        "use strict";
        n.d(t, {
          HA: function () {
            return a;
          },
          RL: function () {
            return u;
          },
          Xv: function () {
            return s;
          },
          ZQ: function () {
            return d;
          },
          hr: function () {
            return l;
          },
          id: function () {
            return m;
          },
          sj: function () {
            return c;
          },
        });
        n(8269);
        const r = /(?:\s+|[`"<>])/g,
          o = /^-+/,
          i = /["'&<>]/g;
        function a(e) {
          return e.trim().replace(r, "-").replace(o, "").toLowerCase();
        }
        function s(e) {
          const t = (e) =>
            ({
              '"': "&quot;",
              "'": "&apos;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
            }[e] || e);
          return e.replace(i, t);
        }
        function c(e) {
          return e.replace(/#(.*)/, (e, t) => `#${CSS.escape(t)}`);
        }
        function l(e) {
          return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
        }
        function u(e) {
          let t, n;
          const r = "\\s*",
            o = " ",
            i = e.trim(),
            a = i.length;
          if (!a) return o;
          const s = [];
          for (t = 0; t < a; t += 1)
            (n = i[t]),
              "\\" === n
                ? (s.push(`${0 === t ? "" : r}${n}`),
                  s.push(i[t + 1]),
                  (t += 1))
                : 0 === t
                ? s.push(n)
                : n !== o && s.push(`${r}${n}`);
          return s.join("");
        }
        function d(e, t, n = 0) {
          return `${e.slice(0, n)}${t}${e.slice(n)}`;
        }
        function m(e) {
          const t = e.split(/(?:\r?\n)+/);
          return t[0];
        }
      },
      9089: function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          let r,
            o = e,
            i = t;
          for (
            "string" === typeof i && (i = [i]), r = 0;
            r < i.length;
            r += 1
          ) {
            if ("undefined" === typeof o[i[r]]) return n;
            o = o[i[r]];
          }
          return o;
        }
        n.d(t, {
          FH: function () {
            return a;
          },
          Kx: function () {
            return s;
          },
          $8: function () {
            return c;
          },
          S3: function () {
            return i;
          },
        });
        var o = n(2449);
        const i = { meta: {}, theme: {}, features: {} },
          { baseUrl: a } = window;
        async function s() {
          const e = (0, o.HH)("/theme-settings.json");
          return fetch(e)
            .then((e) => e.json())
            .catch(() => ({}));
        }
        const c = (e, t) => r(i, e, t);
      },
      2449: function (e, t, n) {
        "use strict";
        n.d(t, {
          Lp: function () {
            return s;
          },
          Q2: function () {
            return a;
          },
          WN: function () {
            return c;
          },
          Ex: function () {
            return i;
          },
          HH: function () {
            return l;
          },
        });
        var r = n(5947),
          o = { input: "input", tags: "tags" };
        function i(e = {}) {
          return Object.entries(e)
            .reduce(
              (e, [t, n]) =>
                n
                  ? e.concat(
                      `${encodeURIComponent(t)}=${encodeURIComponent(n)}`
                    )
                  : e,
              []
            )
            .join("&");
        }
        function a(e, { changes: t, language: n, context: r } = {}) {
          const [o, a] = e.split("#"),
            s = o.match(/\?.*/),
            c = i({ changes: t, language: n, context: r }),
            l = s ? "&" : "?",
            u = a ? o : e,
            d = c ? `${l}${c}` : "",
            m = a ? `#${a}` : "";
          return `${u}${d}${m}`;
        }
        function s(e, t) {
          const {
              query: { changes: n, [o.input]: r, [o.tags]: i, ...a } = {},
            } = e,
            { query: { changes: s, [o.input]: c, [o.tags]: l, ...u } = {} } = t;
          return (
            e.name === t.name &&
            JSON.stringify({ path: e.path, query: a }) ===
              JSON.stringify({ path: t.path, query: u })
          );
        }
        function c(e, t = window.location.href) {
          return new URL((0, r.AH)(e), t);
        }
        function l(e, t) {
          return c(e, t).href;
        }
      },
      647: function (e, t, n) {
        n.p = window.baseUrl;
      },
      2412: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '[{"code":"en-US","name":"English","slug":"en-US"},{"code":"zh-CN","name":"简体中文","slug":"zh-CN"},{"code":"ja-JP","name":"日本語","slug":"ja-JP"}]'
        );
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, r, o, i) {
        if (!r) {
          var a = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (r = e[u][0]), (o = e[u][1]), (i = e[u][2]);
            for (var s = !0, c = 0; c < r.length; c++)
              (!1 & i || a >= i) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[c]);
              })
                ? r.splice(c--, 1)
                : ((s = !1), i < a && (a = i));
            if (s) {
              e.splice(u--, 1);
              var l = o();
              void 0 !== l && (t = l);
            }
          }
          return t;
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [r, o, i];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & o && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            a[e] = function () {
              return r[e];
            };
          });
        return (
          (a["default"] = function () {
            return r;
          }),
          n.d(i, a),
          i
        );
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, r) {
              return n.f[r](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "js/" +
          ({
            82: "highlight-js-json-js",
            113: "highlight-js-markdown-js",
            133: "highlight-js-llvm-js",
            162: "topic",
            176: "highlight-js-shell-js",
            213: "highlight-js-diff-js",
            217: "highlight-js-custom-swift",
            392: "highlight-js-scss-js",
            393: "highlight-js-bash-js",
            435: "highlight-js-python-js",
            490: "highlight-js-xml-js",
            527: "highlight-js-swift-js",
            546: "highlight-js-c-js",
            596: "highlight-js-php-js",
            621: "highlight-js-cpp-js",
            623: "highlight-js-ruby-js",
            637: "highlight-js-objectivec-js",
            642: "highlight-js-custom-markdown",
            645: "highlight-js-perl-js",
            788: "highlight-js-java-js",
            814: "highlight-js-javascript-js",
            843: "tutorials-overview",
            864: "highlight-js-css-js",
            878: "highlight-js-http-js",
            982: "documentation-topic",
          }[e] || e) +
          "." +
          {
            37: "3cabdf6d",
            82: "2a1856ba",
            113: "a2f456af",
            133: "26121771",
            162: "2687cdff",
            176: "0ad5b20f",
            213: "4db9a783",
            217: "738731d1",
            337: "274a8ccc",
            392: "adcd11a2",
            393: "702f0c5c",
            435: "60354774",
            490: "0d78f903",
            523: "3af1b2ef",
            527: "bdd5bff5",
            546: "063069d3",
            596: "c458ffa4",
            621: "458a9ae4",
            623: "7272231f",
            637: "74dea052",
            642: "78c9f6ed",
            645: "da6eda82",
            675: "1d13263d",
            788: "4fe21e94",
            814: "dfc9d16d",
            843: "2eff1231",
            864: "bfc4251f",
            878: "f78e83c2",
            903: "b3710a74",
            982: "f9ef3692",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return (
          "css/" +
          ({
            162: "topic",
            843: "tutorials-overview",
            982: "documentation-topic",
          }[e] || e) +
          "." +
          {
            162: "672a9049",
            523: "e9a069b0",
            675: "40c3bcb2",
            843: "6eb589ed",
            982: "b186e79f",
          }[e] +
          ".css"
        );
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "swift-docc-render:";
      n.l = function (r, o, i, a) {
        if (e[r]) e[r].push(o);
        else {
          var s, c;
          if (void 0 !== i)
            for (
              var l = document.getElementsByTagName("script"), u = 0;
              u < l.length;
              u++
            ) {
              var d = l[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((c = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = r)),
            (e[r] = [o]);
          var m = function (t, n) {
              (s.onerror = s.onload = null), clearTimeout(f);
              var o = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              m.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = m.bind(null, s.onerror)),
            (s.onload = m.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "{{BASE_PATH}}/";
    })(),
    (function () {
      var e = function (e, t, n, r) {
          var o = document.createElement("link");
          (o.rel = "stylesheet"), (o.type = "text/css");
          var i = function (i) {
            if (((o.onerror = o.onload = null), "load" === i.type)) n();
            else {
              var a = i && ("load" === i.type ? "missing" : i.type),
                s = (i && i.target && i.target.href) || t,
                c = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                );
              (c.code = "CSS_CHUNK_LOAD_FAILED"),
                (c.type = a),
                (c.request = s),
                o.parentNode.removeChild(o),
                r(c);
            }
          };
          return (
            (o.onerror = o.onload = i),
            (o.href = t),
            document.head.appendChild(o),
            o
          );
        },
        t = function (e, t) {
          for (
            var n = document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              i = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (i === e || i === t)) return o;
          }
          var a = document.getElementsByTagName("style");
          for (r = 0; r < a.length; r++) {
            (o = a[r]), (i = o.getAttribute("data-href"));
            if (i === e || i === t) return o;
          }
        },
        r = function (r) {
          return new Promise(function (o, i) {
            var a = n.miniCssF(r),
              s = n.p + a;
            if (t(a, s)) return o();
            e(r, s, o, i);
          });
        },
        o = { 826: 0 };
      n.f.miniCss = function (e, t) {
        var n = { 162: 1, 523: 1, 675: 1, 843: 1, 982: 1 };
        o[e]
          ? t.push(o[e])
          : 0 !== o[e] &&
            n[e] &&
            t.push(
              (o[e] = r(e).then(
                function () {
                  o[e] = 0;
                },
                function (t) {
                  throw (delete o[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 826: 0 };
      (n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else if (675 != t) {
            var i = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = i));
            var a = n.p + n.u(t),
              s = new Error(),
              c = function (r) {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = a),
                    o[1](s);
                }
              };
            n.l(a, c, "chunk-" + t, t);
          } else e[t] = 0;
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var o,
            i,
            a = r[0],
            s = r[1],
            c = r[2],
            l = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in s) n.o(s, o) && (n.m[o] = s[o]);
            if (c) var u = c(n);
          }
          for (t && t(r); l < a.length; l++)
            (i = a[l]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(u);
        },
        r = (self["webpackChunkswift_docc_render"] =
          self["webpackChunkswift_docc_render"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [998], function () {
    return n(5670);
  });
  r = n.O(r);
})();
