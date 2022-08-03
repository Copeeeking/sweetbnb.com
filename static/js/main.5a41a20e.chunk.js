(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
	[0], {
		407: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
		},
		408: function(e) {
			e.exports = JSON.parse('[{"q":"What happens when I farm BNB?","a":"When you farm BNB, your BNB gets locked into the SWEET BNB MINER smart contract and rewards you with 8% daily return every day."},{"q":"Can I take my initial BNB back?","a":"Over Time! BNB are not bought, BNB are farmed therefore they can\'t be sold. Once BNB are farmed they work for you indefinitely, providing you with an unlimited amount of BNB at a starting rate of 8% daily."},{"q":"How much are my fees?","a":"There is a small 1% dev fee in order to pay for marketing costs and developing the HashCandy ecosystem"},{"q":"When is the best time to farm BNB?","a":"Always! No matter when you farm BNB, you will begin with a return rate of 8% daily."},{"q":"How often should I compound BNB?","a":"We recommend that you compound at least once per day but you are free to do so as often as you wish."},{"q":"How is  SWEET BNB MINER  sustainable?","a":" SWEET BNB MINER  is sustained by continued community support, just as every other crypto coin, token or project. The difference is that since there is no token, there is no price to dump. As long as BNB are farming in the contract, there will be rewards!"},{"q":"How to use  SWEET BNB MINER  on my phone?","a":"You can either use an app with a DApp browser and choose the Metamask/Injected option/Trust Wallet or simply use any browser that you want and choose WalletConnect to connect to your wallet\'s app on your phone."},{"q":"Is it better to compound or withdraw BNB?","a":"By design, compound BNB will be more profitable than eating BNB in the long-term."},{"q":"How do referrals work?","a":"Once your BSC wallet is connected to the HashCandy website, you will notice your referral address appear at the bottom of the page. When a new user farms BNB after clicking your personal referral link, the contract will send a BNB value equal to 15% instantly to your SWEET BNB MINER. Be smart, use it to farm BNB and build yourself a stream of passive income."}]')
		},
		429: function(e, t, n) {},
		442: function(e, t) {},
		445: function(e, t) {},
		447: function(e, t) {},
		451: function(e, t) {},
		476: function(e, t) {},
		478: function(e, t) {},
		487: function(e, t) {},
		489: function(e, t) {},
		499: function(e, t) {},
		501: function(e, t) {},
		616: function(e, t) {},
		618: function(e, t) {},
		625: function(e, t) {},
		626: function(e, t) {},
		644: function(e, t) {},
		652: function(e, t) {},
		659: function(e, t) {},
		707: function(e, t) {},
		732: function(e, t) {},
		765: function(e, t) {},
		838: function(e, t) {},
		857: function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n(0),
				r = n.n(a),
				i = n(80),
				c = n.n(i),
				o = n(906),
				s = (n(429), n(907)),
				u = n(233),
				l = n(16),
				d = n(893),
				b = n(910),
				p = n(3),
				h = n.n(p),
				f = n(7),
				j = n(19),
				m = n(393),
				y = n(63),
				x = n.n(y),
				g = n(395),
				O = n.n(g),
				v = n(412),
				w = n(901),
				C = n(900),
				k = n(1),
				B = Object(a.createContext)({
					address: null,
					connect: function() {
						return null
					},
					loading: !1,
					disconnect: function() {
						return null
					},
					chainId: null,
					setSnackbar: function() {
						return null
					}
				}),
				S = {
					walletconnect: {
						package: v.a,
						options: {
							rpc: {
								56: "https://bsc-dataseed.binance.org/",
								97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
							},
							network: "binance"
						}
					}
				},
				T = Object(a.forwardRef)((function(e, t) {
					return Object(k.jsx)(C.a, Object(m.a)({
						elevation: 6,
						ref: t,
						variant: "filled"
					}, e))
				})),
				W = new O.a({
					cacheProvider: !0,
					providerOptions: S
				}),
				A = function(e) {
					var t = e.children,
						n = Object(a.useState)(),
						r = Object(j.a)(n, 2),
						i = r[0],
						c = r[1],
						o = Object(a.useState)(!1),
						s = Object(j.a)(o, 2),
						u = s[0],
						l = s[1],
						d = Object(a.useState)(null),
						b = Object(j.a)(d, 2),
						p = b[0],
						m = b[1],
						y = Object(a.useState)(null),
						g = Object(j.a)(y, 2),
						O = g[0],
						v = g[1],
						C = function(e) {
							e.on("disconnect", (function(e) {
								console.log(e), v(null), c(null)
							})), e.on("accountsChanged", (function(e) {
								c(e[0]), m({
									type: "info",
									message: "Account Changed"
								})
							})), e.on("chainChanged", (function(e) {
								v(e)
							}))
						},
						S = function() {
							var e = Object(f.a)(h.a.mark((function e() {
								var t, n, a, r;
								return h.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!i) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											if (l(!0), e.prev = 3, (t = new x.a(x.a.givenProvider)).currentProvider) {
												e.next = 8;
												break
											}
											return m({
												type: "error",
												message: '"No provider was found"'
											}), e.abrupt("return");
										case 8:
											return e.next = 10, W.connect();
										case 10:
											return n = e.sent, t = new x.a(n), C(n), e.next = 15, t.eth.getAccounts();
										case 15:
											return a = e.sent, e.next = 18, t.eth.getChainId();
										case 18:
											r = e.sent, c(a[0]), v(r), e.next = 27;
											break;
										case 23:
											e.prev = 23, e.t0 = e.catch(3), console.error(e.t0), m({
												type: "error",
												message: "Failed to connect"
											});
										case 27:
											l(!1);
										case 28:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[3, 23]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						A = function(e, t) {
							"clickaway" !== t && m(null)
						};
					return Object(a.useEffect)((function() {
						W.cachedProvider && S()
					}), []), Object(k.jsxs)(B.Provider, {
						value: {
							address: i,
							loading: u,
							connect: S,
							disconnect: function() {
								W.clearCachedProvider(), c(null), v(null)
							},
							chainId: O,
							setSnackbar: m
						},
						children: [t, p && Object(k.jsx)(w.a, {
							open: !!p,
							autoHideDuration: 4e3,
							onClose: A,
							children: Object(k.jsx)(T, {
								onClose: A,
								severity: null === p || void 0 === p ? void 0 : p.type,
								sx: {
									width: "100%"
								},
								children: null === p || void 0 === p ? void 0 : p.message
							})
						})]
					})
				},
				N = function() {
					return Object(a.useContext)(B)
				},
				M = Object(d.a)(b.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({
						position: "fixed",
						right: 48,
						top: 48
					}, t.breakpoints.down("md"), {
						display: "none"
					})
				})),
				D = Object(d.a)(b.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({
						display: "none",
						marginTop: -24,
						marginBottom: 25,
						width: "95%",
						marginLeft: "auto",
						marginRight: "auto"
					}, t.breakpoints.down("md"), {
						display: "block"
					})
				}));

			function Y(e) {
				var t = e.responsive,
					n = void 0 === t || t,
					a = N(),
					r = a.address,
					i = a.loading,
					c = a.connect,
					o = a.disconnect;
				return n ? Object(k.jsx)(M, {
					color: "secondary",
					variant: "contained",
					disabled: i,
					onClick: function() {
						return r ? o() : c()
					},
					children: r ? "Disconnect" : "Connect"
				}) : Object(k.jsx)(D, {
					color: "secondary",
					variant: "contained",
					disabled: i,
					onClick: function() {
						return r ? o() : c()
					},
					children: r ? "Disconnect" : "Connect"
				})
			}
			var P = n(911),
				E = Object(d.a)("div")((function(e) {
					var t = e.theme;
					return Object(l.a)({
						textAlign: "center",
						paddingBottom: 24
					}, t.breakpoints.down("md"), {
						h5: {
							fontSize: 16,
							margin: 0
						}
					})
				}));

			function R() {
				return Object(k.jsxs)(E, {
					children: [Object(k.jsx)("div", {
						class: "container",
						children: Object(k.jsx)("h1", {
							class: "neonText",
							children: "SWEET BNB MINER"
						})
					}), Object(k.jsx)(Y, {
						responsive: !1
					}), Object(k.jsxs)(P.a, {
						variant: "h4",
						children: ["Welcome to the SWEET BNB MINER reward pool. Participate now and enjoy APR of ~ ", Object(k.jsx)("strong", {
							children: Object(k.jsx)("font", {
								color: "#f09",
								children: "2920%"
							})
						}), " and ", Object(k.jsx)("strong", {
							children: Object(k.jsx)("font", {
								color: "#f09",
								children: "8%"
							})
						}), " daily returns."]
					}), Object(k.jsx)("a", {
						
					
					})]
				})
			}
			var I = n(914),
				z = n(912),
				H = n(903),
				q = n(913),
				F = n(915),
				L = n(26),
				V = n(905),
				_ = Object(d.a)("input")({
					fontSize: 24,
					fontWeight: 500,
					padding: "12px 125px 12px 16px",
					textAlign: "right",
					borderRadius: 0,
					border: "1px solid #555",
					background: "white",
					width: "100%",
					outline: "none",
					"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
						WebkitAppearance: "none",
						margin: 0,
						MozAppearance: "textfield"
					}
				});

			function J(e) {
				var t = e.value,
					n = e.max,
					a = e.onChange,
					r = void 0 === a ? function() {} : a;
				return Object(k.jsxs)(s.a, {
					position: "relative",
					children: [Object(k.jsx)(_, {
						type: "number",
						min: 0,
						max: n,
						value: t,
						onChange: function(e) {
							return r(e.target.value)
						}
					}), Object(k.jsx)(V.a, {
						alt: "bnb",
						src: "https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png"
					}), Object(k.jsx)(P.a, {
						fontSize: 24,
						position: "absolute",
						top: 9,
						right: 18,
						fontWeight: 500,
						color: "black",
						children: "BNB"
					})]
				})
			}
			var G = n(407),
				U = 56,
				X = "0xDf99bc22e336AFcDb41bD771C4D1f74fd42244C0",
				Q = Object(a.createContext)({
					contract: null,
					web: null,
					wrongNetwork: !1,
					getBnbBalance: function() {
						return null
					},
					fromWei: function() {
						return null
					},
					toWei: function() {
						return null
					}
				}),
				K = function(e) {
					var t = e.children,
						n = Object(a.useState)(),
						r = Object(j.a)(n, 2),
						i = r[0],
						c = r[1],
						o = Object(a.useState)(),
						s = Object(j.a)(o, 2),
						u = s[0],
						l = s[1],
						d = N(),
						b = d.chainId,
						p = d.setSnackbar,
						h = Object(a.useState)(!1),
						f = Object(j.a)(h, 2),
						m = f[0],
						y = f[1];
					Object(a.useEffect)((function() {
						if (b) {
							if (parseInt(b) !== U) return p({
								type: "error",
								message: "Wrong network"
							}), void y(!0);
							y(!1);
							var e = new x.a;
							e.setProvider(x.a.givenProvider), l(e);
							var t = new e.eth.Contract(G, X);
							c(t)
						}
					}), [b]);
					return Object(k.jsx)(Q.Provider, {
						value: {
							web3: u,
							contract: i,
							wrongNetwork: m,
							getBnbBalance: function(e) {
								return u.eth.getBalance(e)
							},
							fromWei: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
								return parseFloat(x.a.utils.fromWei(e, t)).toFixed(7)
							},
							toWei: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
								return x.a.utils.toWei(e, t)
							}
						},
						children: t
					})
				},
				Z = Object(d.a)(z.a)({
					background: "rgb(251 241 225)",
					marginBottom: 24
				}),
				$ = Object(d.a)(H.a)((function(e) {
					var t = e.theme;
					return Object(l.a)({}, t.breakpoints.down("sm"), {
						flexDirection: "column",
						"> div": {
							marginLeft: 0,
							marginRight: 0
						}
					})
				}));

			function ee() {
				var e = Object(a.useContext)(Q),
					t = e.contract,
					n = e.wrongNetwork,
					r = e.getBnbBalance,
					i = e.fromWei,
					c = e.toWei,
					o = e.web3,
					u = N(),
					l = u.address,
					d = u.chainId,
					p = Object(a.useState)(0),
					m = Object(j.a)(p, 2),
					y = m[0],
					g = m[1],
					O = Object(a.useState)({
						bnb: 0,
						beans: 0,
						rewards: 0
					}),
					v = Object(j.a)(O, 2),
					w = v[0],
					C = v[1],
					B = Object(a.useState)(0),
					S = Object(j.a)(B, 2),
					T = S[0],
					W = S[1],
					A = Object(a.useState)(0),
					M = Object(j.a)(A, 2),
					D = (M[0], M[1], Object(a.useState)(!1)),
					Y = Object(j.a)(D, 2),
					E = Y[0],
					R = Y[1],
					z = new URLSearchParams(Object(L.c)().search),
					V = function() {
						o && !n ? r(X).then((function(e) {
							g(i(e))
						})) : g(0)
					},
					_ = function() {
						var e = Object(f.a)(h.a.mark((function e() {
							var a, c, s, u, d;
							return h.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (o && !n && l) {
											e.next = 3;
											break
										}
										return C({
											bnb: 0,
											beans: 0,
											rewards: 0
										}), e.abrupt("return");
									case 3:
										return e.prev = 3, e.next = 6, Promise.all([r(l), t.methods.getMyMiners(l).call().catch((function(e) {
											return console.error("myminers", e), 0
										})), t.methods.beanRewards(l).call().catch((function(e) {
											return console.error("beanrewards", e), 0
										}))]);
									case 6:
										a = e.sent, c = Object(j.a)(a, 3), s = c[0], u = c[1], d = c[2], C({
											bnb: i("".concat(s)),
											beans: u,
											rewards: i("".concat(d))
										}), e.next = 18;
										break;
									case 14:
										e.prev = 14, e.t0 = e.catch(3), console.error(e.t0), C({
											bnb: 0,
											beans: 0,
											rewards: 0
										});
									case 18:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[3, 14]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				Object(a.useEffect)((function() {
					V()
				}), [o, d]), Object(a.useEffect)((function() {
					_()
				}), [l, o, d]);
				var G = function() {
						return x.a.utils.isAddress(z.get("ref")) ? z.get("ref") : "0x0000000000000000000000000000000000000000"
					},
					U = function() {
						var e = Object(f.a)(h.a.mark((function e() {
							var n;
							return h.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return R(!0), n = G(), e.prev = 2, e.next = 5, t.methods.buyEggs(n).send({
											from: l,
											value: c("".concat(T))
										});
									case 5:
										e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
									case 10:
										_(), V(), R(!1);
									case 13:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, 7]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					K = function() {
						var e = Object(f.a)(h.a.mark((function e() {
							var n;
							return h.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return R(!0), n = G(), e.prev = 2, e.next = 5, t.methods.hatchEggs(n).send({
											from: l
										});
									case 5:
										e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
									case 10:
										R(!1);
									case 11:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[2, 7]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					ee = function() {
						var e = Object(f.a)(h.a.mark((function e() {
							return h.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return R(!0), e.prev = 1, e.next = 4, t.methods.sellEggs().send({
											from: l
										});
									case 4:
										e.next = 9;
										break;
									case 6:
										e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
									case 9:
										_(), V(), R(!1);
									case 12:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 6]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				return Object(k.jsxs)(Z, {
					children: [E && Object(k.jsx)(q.a, {
						color: "secondary"
					}), Object(k.jsxs)(I.a, {
						children: [Object(k.jsxs)(H.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(k.jsx)(P.a, {
								variant: "h2",
								children: "Total Value Locked"
							}), Object(k.jsxs)(P.a, {
								variant: "h3",
								children: [y, " BNB"]
							})]
						}), Object(k.jsxs)(H.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(k.jsx)(P.a, {
								variant: "body1",
								children: "Wallet"
							}), Object(k.jsxs)(P.a, {
								variant: "h5",
								children: [w.bnb, " BNB"]
							})]
						}), Object(k.jsxs)(H.a, {
							container: !0,
							justifyContent: "space-between",
							alignItems: "center",
							mt: 3,
							children: [Object(k.jsx)(P.a, {
								variant: "body1",
								children: "Your BNB"
							}), Object(k.jsxs)(P.a, {
								variant: "h5",
								children: [w.beans, "BNB"]
							})]
						}), Object(k.jsxs)(s.a, {
							paddingTop: 4,
							paddingBottom: 3,
							children: [Object(k.jsx)(s.a, {
								children: Object(k.jsx)(J, {
									max: +w.bnb,
									value: T,
									onChange: function(e) {
										return function(e) {
											W(e)
										}(e)
									}
								})
							}), Object(k.jsx)(s.a, {
								marginTop: 3,
								marginBottom: 3,
								children: Object(k.jsx)(b.a, {
									variant: "contained",
									fullWidth: !0,
									disabled: n || !l || 0 === +T || E,
									onClick: U,
									children: "FARM BNB"
								})
							}), Object(k.jsx)(F.a, {}), Object(k.jsxs)(H.a, {
								container: !0,
								justifyContent: "space-between",
								alignItems: "center",
								mt: 3,
								children: [Object(k.jsx)(P.a, {
									variant: "body1",
									fontWeight: "bolder",
									children: "Your Rewards"
								}), Object(k.jsxs)(P.a, {
									variant: "h5",
									fontWeight: "bolder",
									children: [w.rewards, " BNB"]
								})]
							}), Object(k.jsxs)($, {
								container: !0,
								children: [Object(k.jsx)(H.a, {
									item: !0,
									flexGrow: 1,
									marginRight: 1,
									marginTop: 3,
									children: Object(k.jsx)(b.a, {
										variant: "contained",
										color: "secondary",
										fullWidth: !0,
										disabled: n || !l || E,
										onClick: K,
										children: "COMPOUND"
									})
								}), Object(k.jsx)(H.a, {
									item: !0,
									flexGrow: 1,
									marginLeft: 1,
									marginTop: 3,
									children: Object(k.jsx)(b.a, {
										variant: "contained",
										color: "secondary",
										fullWidth: !0,
										disabled: n || !l || E,
										onClick: ee,
										children: "WITHDRAW BNB"
									})
								})]
							})]
						})]
					})]
				})
			}
			var te = Object(d.a)(z.a)({
					background: "rgb(255 252 248)",
					marginBottom: 24
				}),
				ne = [{
					label: "Daily Return",
					value: 8
				}, {
					label: "APR",
					value: "2,920"
				}];

			function ae() {
				return Object(k.jsx)(te, {
					children: Object(k.jsxs)(I.a, {
						children: [Object(k.jsx)(P.a, {
							variant: "h5",
							borderBottom: "6px solid",
							paddingBottom: 1,
							children: "BNB Rates"
						}), Object(k.jsx)(s.a, {
							paddingTop: 2,
							children: ne.map((function(e) {
								return Object(k.jsxs)(H.a, {
									container: !0,
									justifyContent: "space-between",
									children: [Object(k.jsx)(P.a, {
										variant: "body1",
										gutterBottom: !0,
										children: e.label
									}), Object(k.jsxs)(P.a, {
										variant: "h5",
										gutterBottom: !0,
										children: [e.value, "%"]
									})]
								}, e.label)
							}))
						})]
					})
				})
			}
			var re = Object(d.a)(z.a)({
				background: "rgb(251 241 225)"
			});
			Object(d.a)("input")((function(e) {
				return {
					fontSize: 10,
					fontWeight: 300,
					padding: "10px 12px",
					borderRadius: 0,
					border: "1px solid #555",
					background: "white",
					width: "100%",
					outline: "none",
					color: e.theme.palette.primary.main
				}
			}));

			function ie(e) {
				var t = e.address,
					n = "".concat(window.origin, "?ref=").concat(t);
				return Object(k.jsx)(re, {
					children: Object(k.jsxs)(I.a, {
						style: {
							paddingLeft: 8,
							paddingRight: 8
						},
						children: [Object(k.jsx)(P.a, {
							gutterBottom: !0,
							variant: "h5",
							textAlign: "center",
							children: "Referral Link"
						}), Object(k.jsx)(P.a, {
							variant: "h4",
							textAlign: "center",
							fontSize: "13px",
							marginTop: 2,
							children: t ? n : ""
						}), Object(k.jsx)(P.a, {
							textAlign: "center",
							fontWeight: "bold",
							variant: "body2",
							marginTop: 2,
							paddingX: 3,
							children: "Earn 15% of the BNB used to buy MINERS from anyone who uses your referral link"
						})]
					})
				})
			}

			function ce() {
				return Object(k.jsxs)("ul", {
					children: [Object(k.jsx)("li", {
						children: Object(k.jsx)("a", {
							href: "INSERTAR CONTRATO BSC SCAN",
							target: "_blank",
							children: Object(k.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "121.378",
								height: "121.333",
								viewBox: "0 0 121.378 121.333",
								children: Object(k.jsxs)("g", {
									id: "bscscan-logo-light-circle",
									transform: "translate(-219.378 -213.334)",
									children: [Object(k.jsx)("path", {
										id: "Path_1",
										"data-name": "Path 1",
										d: "M244.6,271.1a5.144,5.144,0,0,1,5.168-5.143l8.568.028a5.151,5.151,0,0,1,5.151,5.151v32.4c.965-.286,2.2-.591,3.559-.911a4.292,4.292,0,0,0,3.309-4.177V258.261a5.152,5.152,0,0,1,5.151-5.152H284.1a5.152,5.152,0,0,1,5.151,5.152v37.3s2.15-.87,4.243-1.754a4.3,4.3,0,0,0,2.625-3.957V245.383a5.151,5.151,0,0,1,5.15-5.151h8.585A5.151,5.151,0,0,1,315,245.383V282c7.443-5.394,14.986-11.882,20.972-19.683a8.646,8.646,0,0,0,1.316-8.072,60.636,60.636,0,1,0-109.855,50.108,7.668,7.668,0,0,0,7.316,3.79c1.624-.143,3.646-.345,6.05-.627a4.29,4.29,0,0,0,3.805-4.258V271.1"
									}), Object(k.jsx)("path", {
										id: "Path_2",
										"data-name": "Path 2",
										d: "M244.417,323.061A60.656,60.656,0,0,0,340.756,274c0-1.4-.065-2.778-.158-4.152-22.163,33.055-63.085,48.508-96.181,53.213"
									})]
								})
							})
						})
					}), Object(k.jsx)("li", {
						children: Object(k.jsx)("a", {
							href: "INSERTAR TELEGRAM HEY",
							target: "_blank",
							children: Object(k.jsx)("svg", {
								fill: "#f09",
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 50 50",
								width: "50px",
								height: "50px",
								children: Object(k.jsx)("path", {
									d: "M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445\tc-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758\tc0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125\tc0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077\tC47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
								})
							})
						})
					}), Object(k.jsx)("li", {
						children: Object(k.jsx)("a", {
							href: "INSERTAR TWITTER",
							target: "_blank",
							children: Object(k.jsx)("svg", {
								fill: "#f09",
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 50 50",
								width: "50px",
								height: "50px",
								children: Object(k.jsx)("path", {
									d: "M50.061,10.438c-1.846,0.818-3.826,1.369-5.908,1.62c2.125-1.273,3.757-3.29,4.523-5.688c-1.986,1.177-4.19,2.033-6.531,2.493c-1.874-2-4.547-3.247-7.504-3.247c-5.68,0-10.284,4.604-10.284,10.282c0,0.805,0.092,1.589,0.269,2.343C16.08,17.812,8.502,13.718,3.429,7.497c-0.885,1.522-1.391,3.289-1.391,5.172c0,3.567,1.812,6.713,4.574,8.56c-1.688-0.054-3.271-0.517-4.657-1.288c0,0.044,0,0.086,0,0.131c0,4.984,3.544,9.134,8.245,10.084c-0.86,0.236-1.769,0.36-2.707,0.36c-0.664,0-1.309-0.064-1.938-0.186c1.313,4.081,5.108,7.06,9.607,7.143c-3.517,2.757-7.951,4.399-12.77,4.399c-0.833,0-1.649-0.048-2.452-0.144c4.548,2.919,9.956,4.619,15.762,4.619c18.915,0,29.26-15.668,29.26-29.252c0-0.448-0.011-0.894-0.03-1.332C46.94,14.313,48.684,12.5,50.061,10.438z"
								})
							})
						})
					})]
				})
			}
			var oe = n(909),
				se = n(898),
				ue = n(408),
				le = n(409),
				de = n.n(le),
				be = n(410),
				pe = n.n(be),
				he = {
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					maxWidth: 600,
					maxHeight: 800,
					bgcolor: "background.paper",
					boxShadow: 24,
					px: 4,
					py: 6,
					borderRadius: 8,
					overflow: "auto"
				};

			function fe() {
				var e = a.useState(!1),
					t = Object(j.a)(e, 2),
					n = t[0],
					r = t[1],
					i = function() {
						return r(!1)
					};
				return Object(k.jsxs)(s.a, {
					pt: 4,
					children: [Object(k.jsx)(b.a, {
						variant: "contained",
						fullWidth: !0,
						onClick: function() {
							return r(!0)
						},
						startIcon: Object(k.jsx)(de.a, {}),
						children: "FAQs"
					}), Object(k.jsx)(se.a, {
						open: n,
						onClose: i,
						"aria-labelledby": "modal-modal-title",
						"aria-describedby": "modal-modal-description",
						children: Object(k.jsx)(s.a, {
							sx: he,
							className: "scrollbox",
							children: Object(k.jsxs)(H.a, {
								container: !0,
								spacing: 2,
								direction: "column",
								position: "relative",
								children: [ue.map((function(e, t) {
									return Object(k.jsxs)(H.a, {
										item: !0,
										children: [Object(k.jsxs)(P.a, {
											variant: "h6",
											gutterBottom: !0,
											children: [t + 1, ": ", e.q]
										}), Object(k.jsx)(P.a, {
											variant: "body1",
											children: e.a
										})]
									}, e.q)
								})), Object(k.jsx)(oe.a, {
									color: "primary",
									style: {
										position: "absolute",
										right: -25,
										top: -24
									},
									onClick: i,
									children: Object(k.jsx)(pe.a, {})
								})]
							})
						})
					})]
				})
			}
			var je = Object(d.a)("div")((function(e) {
				var t = e.theme;
				return Object(l.a)({
					maxWidth: 400,
					margin: "0 auto"
				}, t.breakpoints.down("sm"), {
					maxWidth: "100%"
				})
			}));

			function me() {
				var e = N().address;
				return Object(k.jsxs)(je, {
					children: [Object(k.jsx)(Y, {}), Object(k.jsx)(R, {}), Object(k.jsx)(ee, {}), Object(k.jsx)(ae, {}), Object(k.jsx)(ie, {
						address: e
					}), Object(k.jsx)(fe, {}), Object(k.jsx)(ce, {})]
				})
			}
			var ye = function() {
					return Object(k.jsx)(u.a, {
						children: Object(k.jsx)(s.a, {
							paddingY: 6,
							paddingX: 2,
							children: Object(k.jsx)(me, {})
						})
					})
				},
				xe = function(e) {
					e && e instanceof Function && n.e(3).then(n.bind(null, 917)).then((function(t) {
						var n = t.getCLS,
							a = t.getFID,
							r = t.getFCP,
							i = t.getLCP,
							c = t.getTTFB;
						n(e), a(e), r(e), i(e), c(e)
					}))
				},
				ge = n(411),
				Oe = n(904),
				ve = Object(ge.a)({
					palette: {
						primary: {
							main: "#fff"
						},
						secondary: {
							main: "#f09"
						},
						text: {
							primary: "#fff"
						}
					},
					typography: {
						fontFamily: "Montserrat",
						body1: {
							fontSize: 20,
							fontWeight: "bold"
						},
						body2: {
							fontSize: 16
						},
						allVariants: {
							color: "#f09"
						},
						h2: {
							fontSize: 40,
							color: "#f09"
						},
						h3: {
							fontSize: 28,
							fontWeight: "bold",
							color: "#fff"
						},
						h4: {
							fontSize: 16,
							fontWeight: 500,
							color: "#fff"
						},
						h5: {
							fontSize: 20,
							fontWeight: "bold",
							color: "#fff"
						},
						h6: {
							fontSize: 20,
							fontWeight: "bold",
							color: "#333"
						}
					},
					components: {
						MuiCard: {
							styleOverrides: {
								root: {
									boxShadow: "6px 6px 20px 6px #00000096",
									borderRadius: 20
								}
							}
						},
						MuiCardContent: {
							styleOverrides: {
								root: {
									padding: "12px 24px"
								}
							}
						},
						MuiButton: {
							styleOverrides: {
								root: Object(l.a)({
									borderRadius: 8,
									fontWeight: 400,
									fontSize: "1.2rem",
									padding: "10px",
									minWidth: 138,
									color: "#fff"
								}, "fontWeight", "bold"),
								contained: {
									boxShadow: "6px 6px 20px 6px #00000096"
								},
								containedSecondary: {
									color: "#fff"
								}
							}
						}
					}
				});

			function we(e) {
				var t = e.children;
				return Object(k.jsx)(Oe.a, {
					theme: ve,
					children: t
				})
			}
			c.a.render(Object(k.jsxs)(r.a.StrictMode, {
				children: [Object(k.jsx)(o.a, {}), Object(k.jsx)(we, {
					children: Object(k.jsx)(A, {
						children: Object(k.jsx)(K, {
							children: Object(k.jsx)(ye, {})
						})
					})
				})]
			}), document.getElementById("root")), xe()
		}
	},
	[
		[857, 1, 2]
	]
]);
//# sourceMappingURL=main.5a41a20e.chunk.js.map