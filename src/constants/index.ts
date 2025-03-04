export enum API {
  MESSAGES = 'messages',
  CLOUD = 'cloud',
  SERIES = 'series',
  TOPICS = 'topics',
  WIDGET = 'widget',
  WIDGETS = 'widgets',
  SLIDE = 'slide',
  SLIDES = 'slides',
  PRESENTATION = 'presentation',
  PRESENTATIONS = 'presentations',
  PREFERENCE = 'preference',
  PREFERENCES = 'preferences'
}

export enum CSS {
  API = 'color:white;background-color:grey;padding:0 4px 0 4px;border-radius:5px;',
  APP = 'color:white;background-color:navy;padding:0 4px 0 4px;border-radius:5px;',
  BROADCAST = 'color:navy;background-color:orange;padding:0 4px 0 4px;border-radius:5px;',
  DATA = 'color:grey;background-color:lightskyblue;padding:0 4px 0 4px;border-radius:5px;',
  CLOUD = 'color:grey;background-color:mistyrose;padding:0 4px 0 4px;border-radius:5px;',
  GET_DATA = 'color:black;background-color:lime;padding:0 4px 0 4px;border-radius:5px;',
  HIDE = 'color:white;background-color:red;padding:0 4px 0 4px;border-radius:5px;',
  MESSAGES = 'color:white;background-color:darkslateblue;padding:0 4px 0 4px;border-radius:5px;',
  NO_UPDATES = 'color:grey;border:1px solid grey;padding:0 4px 0 4px;border-radius:5px;',
  NONE = 'color:transparent;background-color:transparent;',
  PRESENTATION = 'color:white;background-color:darkred;padding:0 4px 0 4px;border-radius:5px;',
  SERIES = 'color:grey;background-color:thistle;padding:0 4px 0 4px;border-radius:5px;',
  SLIDE = 'color:black;background-color:yellow;padding:0 4px 0 4px;border-radius:5px;',
  STORAGE = 'color:black;background-color:cyan;padding:0 4px 0 4px;border-radius:5px;',
  SUBSCRIBE = 'color:white;background-color:dodgerblue;padding:0 4px 0 4px;border-radius:5px;',
  WIDGET = 'color:gret;background-color:lemonchiffon;padding:0 4px 0 4px;border-radius:5px;',
  WS = 'color:white;background-color:green;padding:0 4px 0 4px;border-radius:5px;',
}

export enum EVENTS {
  ADD_SLIDE = 'addSlide',
  APP_READY = 'appReady',
  API_UPDATE = 'apiUpdate',
  WS_API_REQUEST = 'wsApiRequest',
  WS_API_RESPONSE = 'wsApiResponse',
  WS_API_UPDATE = 'wsApiRUpdate',
  APPROVE_MESSAGE = 'approveMessage',
  CHANNEL = 'channel',
  CLEAN_MESSAGES = 'cleanMessages',
  CLOSE_MODAL = 'closeModal',
  CLOSE_BUILDER_MODAL = 'closeBuilderModal',
  ERROR = 'error',
  HIDE_MESSAGE = 'hideMessage',
  HIDE_LABELS = 'hideLabels',
  MAUPPUT_UPDATE = 'layoutUpdate',
  PAUSE_PRESENTATION = 'pausePresentation',
  PRESENTATION_READY = 'presentationReady',
  PREV_SLIDE = 'prevSlide',
  RELOAD_PRESENTATION = 'reloadPresentation',
  SHOW_MODAL = 'showModal',
  STAR_MESSAGE = 'starMessage',
  GOTO_SLIDE = 'gotoSlide',
  NEXT_SLIDE = 'nextSlide',
  PREFERENCE_LOAD ='loadPreference',
  PREFERENCE_SAVE ='savePreference',
  PRESENTATION_LOAD = 'loadPresentation',
  PRESENTATION_STORE = 'storePresentation',
  SHOW_BUILDER_MODAL = 'showBuilderModal',
  SLIDE_DID_LOAD = 'slideDidLoad',
  SLIDE_GOTO = 'slideGoto',
  SLIDE_READY = 'slideReady',
  SLIDE_LOAD = 'loadSlide',
  SLIDE_STORE = 'storeSlide',
  SLIDE_TRANSITIONER = 'slideTransitioner',
  START_TRANSITIONER = 'startTransitioner',
  STORAGE_INIT = 'storageInit',
  SUBSCRIBE = 'subscribe',
  SUSPEND_ACCOUNT = 'suspendAccount',
  SWITCH_PRESENTATION = 'switch_presentation',
  REMOVE_CLOUD = 'removeCloud',
  UPDATE = 'update',
  VERSION = 'version',
  WIDGET_UPDATE = 'widgetUpdate',
}

export enum MODERATION {
  APPROVED = 'approved',
  BEFORE = 'before',
  DELAYED = 'delayed',
  NONE = 'none',
  REALTIME = 'realtime',
}

export enum STORAGE {
  KEYVAL = 'keyval',
  LOCAL = 'local',
  SESSION = 'session',
  DEXIE = 'dexie',
  WINDOW = 'window',
}
