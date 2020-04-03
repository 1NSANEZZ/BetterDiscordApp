import {settings} from "../0globals";

export default new class V2 {

    constructor() {
        this.editorDetached = false;
        this.WebpackModules = (() => {
            const req = webpackJsonp.push([[], {__extra_id__: (module, exports, req) => module.exports = req}, [["__extra_id__"]]]);
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;

            const shouldProtect = theModule => {
                if (theModule.remove && theModule.set && theModule.clear && theModule.get && !theModule.sort) return true;
                if (theModule.getToken || theModule.getEmail || theModule.showToken) return true;
                return false;
            };
            
            Object.freeze(String.prototype);
            Object.freeze(Array.prototype);
            Object.freeze(URL.prototype);
            Object.freeze(RegExp.prototype);

            const oError = Error;
            const oURL   = URL;
            const urls = /\((.*)\)/;
            for (const i in req.c) {
                if (req.c.hasOwnProperty(i)) {
                    const theModule = req.c[i].exports;
                    if (!theModule) continue;
                    const whatToCheck = theModule.default ? theModule.default : theModule;
                    if (!shouldProtect(whatToCheck)) continue;
                    delete req.c[i].exports;
                    Object.defineProperty(req.c[i], "exports", {
                        get() {
                            try {
                                const stack = (new oError()).stack;
                                const traces = stack.split("\n");
                                for (let i = 2; i < traces.length; i++) {
                                    const trace = traces[i];
                                    const match = trace.match(urls);
                                    if (!match || match.length !== 2) continue;
                                    if (match[1][0] === "/" || (new oURL(match[1])).hostname !== "discordapp.com") return undefined;
                                }
                                return theModule;
                            }
                            catch {
                                return undefined;
                            }
                        }
                    });
                }
            }

            const find = (filter) => {
                for (const i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        const m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default)) return m.default;
                        if (m && filter(m))	return m;
                    }
                }
                // console.warn("Cannot find loaded module in cache");
                return null;
            };

            const findAll = (filter) => {
                const modules = [];
                for (const i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        const m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default)) modules.push(m.default);
                        else if (m && filter(m)) modules.push(m);
                    }
                }
                return modules;
            };

            const findByUniqueProperties = (propNames) => find(module => propNames.every(prop => module[prop] !== undefined));
            const findByPrototypes = (protoNames) => find(module => module.prototype && protoNames.every(protoProp => module.prototype[protoProp] !== undefined));
            const findByDisplayName = (displayName) => find(module => module.displayName === displayName);

            return {find, findAll, findByUniqueProperties, findByPrototypes, findByDisplayName};
        })();

        this.internal = {
            react: this.WebpackModules.findByUniqueProperties(["Component", "PureComponent", "Children", "createElement", "cloneElement"]),
            reactDom: this.WebpackModules.findByUniqueProperties(["findDOMNode"])
        };
        this.getInternalInstance = e => e[Object.keys(e).find(k => k.startsWith("__reactInternalInstance"))];
    }

    initialize() {

    }

    joinBD1() {this.InviteActions.acceptInviteAndTransitionToInviteChannel("0Tmfo5ZbORCRqbAd");}
    leaveBD1() {this.GuildActions.leaveGuild("86004744966914048");}

    joinBD2() {this.InviteActions.acceptInviteAndTransitionToInviteChannel("2HScm8j");}
    leaveBD2() {this.GuildActions.leaveGuild("280806472928198656");}

    get react() {return this.internal.react;}
    get React() {return this.internal.react;}
    get reactDom() {return this.internal.reactDom;}
    get ReactDom() {return this.internal.reactDom;}
    get reactComponent() {return this.internal.react.Component;}
    get ReactComponent() {return this.internal.react.Component;}

    get anchorClasses() {return this.WebpackModules.findByUniqueProperties(["anchorUnderlineOnHover"]) || {anchor: "anchor-3Z-8Bb", anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"};}
    get slateEditorClasses() {return this.WebpackModules.findByUniqueProperties(["slateTextArea"]);}
    get messageClasses() {return this.WebpackModules.findByUniqueProperties(["message", "containerCozy"]);}
    get guildClasses() {
		const guildsWrapper = this.WebpackModules.findByUniqueProperties(["wrapper", "unreadMentionsBar"]);
        const guilds = this.WebpackModules.findByUniqueProperties(["guildsError", "selected"]);
        const pill = this.WebpackModules.findByUniqueProperties(["blobContainer"]);
        return Object.assign({}, guildsWrapper, guilds, pill);
	}

    get MessageContentComponent() {return this.WebpackModules.find(m => m.defaultProps && m.defaultProps.hasOwnProperty("disableButtons"));}
    get MessageComponent() {return this.WebpackModules.find(m => m.default && m.default.displayName && m.default.displayName == "Message");}
    get TimeFormatter() {return this.WebpackModules.findByUniqueProperties(["dateFormat"]);}
    get TooltipWrapper() {return this.WebpackModules.findByDisplayName("Tooltip");}
    get NativeModule() {return this.WebpackModules.findByUniqueProperties(["setBadge"]);}
    get InviteActions() {return this.WebpackModules.findByUniqueProperties(["acceptInvite"]);}
    get GuildActions() {return this.WebpackModules.findByUniqueProperties(["leaveGuild"]);}
    get Tooltips() {return this.WebpackModules.find(m => m.hide && m.show && !m.search && !m.submit && !m.search && !m.activateRagingDemon && !m.dismiss);}
    get KeyGenerator() {return this.WebpackModules.find(m => m.toString && /"binary"/.test(m.toString()));}
    get LayerStack() {return this.WebpackModules.findByUniqueProperties(["popLayer"]);}
    get UserStore() {return this.WebpackModules.findByUniqueProperties(["getCurrentUser"]);}
    get ChannelStore() {return this.WebpackModules.findByUniqueProperties(["getChannel"]);}
    get ChannelActions() {return this.WebpackModules.findByUniqueProperties(["openPrivateChannel"]);}
    get PrivateChannelActions() {return this.WebpackModules.findByUniqueProperties(["selectPrivateChannel"]);}

    openDM(userId) {
        const selfId = this.UserStore.getCurrentUser().id;
        if (selfId == userId) return;
        const privateChannelId = this.ChannelStore.getDMFromUserId(userId);
        if (privateChannelId) return this.PrivateChannelActions.selectPrivateChannel(privateChannelId);
        this.ChannelActions.openPrivateChannel(selfId, userId);
    }

    parseSettings(cat) {
        return Object.keys(settings).reduce((arr, key) => {
            const setting = settings[key];
            if (setting.cat === cat && setting.implemented && !setting.hidden) {
                setting.text = key;
                arr.push(setting);
            } return arr;
        }, []);
    }

};