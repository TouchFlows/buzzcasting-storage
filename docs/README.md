**buzzcasting-storage**

***

# buzzcasting-storage

## Classes

### BuzzcastingStorageManager

Defined in: [manager/index.ts:29](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L29)

#### Constructors

##### Constructor

> **new BuzzcastingStorageManager**(`options`): [`BuzzcastingStorageManager`](#buzzcastingstoragemanager)

Defined in: [manager/index.ts:44](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `IStorageOptions` |

###### Returns

[`BuzzcastingStorageManager`](#buzzcastingstoragemanager)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hidelabels"></a> `hideLabels` | `public` | (`query`) => `Promise`\<`IResponse`\> | [manager/index.ts:528](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L528) |

#### Methods

##### addSubscriber()

> **addSubscriber**(`query`): `void`

Defined in: [manager/index.ts:77](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L77)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`void`

##### apiQuery()

> **apiQuery**(`apiQuery`): `Promise`\<`IprocessResponse`\>

Defined in: [manager/index.ts:128](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiQuery` | `any` |

###### Returns

`Promise`\<`IprocessResponse`\>

##### broadcastMessage()

> **broadcastMessage**(`eventName`, `detail`): `void`

Defined in: [manager/index.ts:381](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L381)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `detail` | `any` |

###### Returns

`void`

##### bulk()

> **bulk**(`table`, `queries`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:543](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L543)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |
| `queries` | `IQuery`[] |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### cleanMessages()

> **cleanMessages**(): `Promise`\<`void`\>

Defined in: [manager/index.ts:482](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L482)

###### Returns

`Promise`\<`void`\>

##### clearHash()

> **clearHash**(): `Promise`\<`number`\>

Defined in: [manager/index.ts:763](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L763)

###### Returns

`Promise`\<`number`\>

##### deleteDashboard()

> **deleteDashboard**(`query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:706](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L706)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deleteDashboards()

> **deleteDashboards**(): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:712](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L712)

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deleteImage()

> **deleteImage**(`folderName`, `imageName`): `Promise`\<`number` \| `IResponse`\>

Defined in: [manager/index.ts:740](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L740)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `folderName` | `string` |
| `imageName` | `string` |

###### Returns

`Promise`\<`number` \| `IResponse`\>

##### deletePresentation()

> **deletePresentation**(`query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:622](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L622)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deletePresentations()

> **deletePresentations**(): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:628](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L628)

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deleteSlide()

> **deleteSlide**(`query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:584](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L584)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deleteSlides()

> **deleteSlides**(): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:590](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L590)

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deleteSubscriber()

> **deleteSubscriber**(`query`): `void`

Defined in: [manager/index.ts:81](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`void`

##### deleteSubscribers()

> **deleteSubscribers**(): `Promise`\<`any`[]\>

Defined in: [manager/index.ts:538](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L538)

###### Returns

`Promise`\<`any`[]\>

##### deleteWidget()

> **deleteWidget**(`query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:684](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L684)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### deleteWidgets()

> **deleteWidgets**(): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:690](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L690)

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### get()

> **get**(`table`, `query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:550](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L550)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### getDashboard()

> **getDashboard**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:700](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L700)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getDashboards()

> **getDashboards**(): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:718](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L718)

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getHash()

> **getHash**(`resource`, `query`): `Promise`\<`any`\>

Defined in: [manager/index.ts:755](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L755)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `resource` | `string` |
| `query` | `IQuery` |

###### Returns

`Promise`\<`any`\>

##### getImages()

> **getImages**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:747](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L747)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getPreference()

> **getPreference**(`preference`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:634](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L634)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `preference` | `IPreference` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getPreferences()

> **getPreferences**(`query?`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:640](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L640)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getPresentation()

> **getPresentation**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:594](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L594)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getPresentations()

> **getPresentations**(`query?`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:600](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L600)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getSlide()

> **getSlide**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:564](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L564)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getSlides()

> **getSlides**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:568](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L568)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getSubscribers()

> **getSubscribers**(): `Promise`\<`any`[]\>

Defined in: [manager/index.ts:534](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L534)

###### Returns

`Promise`\<`any`[]\>

##### getWidget()

> **getWidget**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:668](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L668)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### getWidgets()

> **getWidgets**(`query?`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:672](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L672)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### hide()

> **hide**(`query`): `void`

Defined in: [manager/index.ts:430](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L430)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`void`

##### hideMessage()

> **hideMessage**(`query`): `Promise`\<`IResponse`\>

Defined in: [manager/index.ts:512](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L512)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse`\>

##### loadDashboards()

> **loadDashboards**(`query?`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:694](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L694)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query?` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### loadImages()

> **loadImages**(`folder`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:728](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L728)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `folder` | `string` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### loadPreference()

> **loadPreference**(`preference`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:652](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L652)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `preference` | `IPreference` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### loadPresentation()

> **loadPresentation**(`query`): `Promise`\<`number`\>

Defined in: [manager/index.ts:612](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L612)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number`\>

##### loadSlide()

> **loadSlide**(`query`): `Promise`\<`number`\>

Defined in: [manager/index.ts:576](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L576)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number`\>

##### processResponse()

> **processResponse**(`apiResp`, `params`): `Promise`\<`IprocessResponse`\>

Defined in: [manager/index.ts:140](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L140)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiResp` | `any` |
| `params` | `any` |

###### Returns

`Promise`\<`IprocessResponse`\>

##### set()

> **set**(`table`, `query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:557](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L557)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `table` | `string` |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### setDashboard()

> **setDashboard**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:722](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L722)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### setHash()

> **setHash**(`resource`, `query`): `Promise`\<`number`\>

Defined in: [manager/index.ts:759](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L759)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `resource` | `string` |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number`\>

##### setImage()

> **setImage**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:751](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L751)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### setPreference()

> **setPreference**(`preference`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:646](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L646)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `preference` | `IPreference` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### setPresentation()

> **setPresentation**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:606](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L606)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### setSlide()

> **setSlide**(`query`): `Promise`\<`IResponse` \| `undefined`\>

Defined in: [manager/index.ts:572](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L572)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`IResponse` \| `undefined`\>

##### setWidget()

> **setWidget**(`query`): `Promise`\<`number` \| `IResponse` \| `undefined`\>

Defined in: [manager/index.ts:678](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L678)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse` \| `undefined`\>

##### startBroadcastListener()

> **startBroadcastListener**(): `void`

Defined in: [manager/index.ts:369](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L369)

###### Returns

`void`

##### storeImage()

> **storeImage**(`imageFile`): `Promise`\<`number` \| `IResponse`\>

Defined in: [manager/index.ts:734](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L734)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `imageFile` | `FormData` |

###### Returns

`Promise`\<`number` \| `IResponse`\>

##### storePreference()

> **storePreference**(`preference`): `Promise`\<`number` \| `IResponse`\>

Defined in: [manager/index.ts:658](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L658)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `preference` | `IPreference` |

###### Returns

`Promise`\<`number` \| `IResponse`\>

##### storePresentation()

> **storePresentation**(`query`): `Promise`\<`number` \| `IResponse`\>

Defined in: [manager/index.ts:616](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L616)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse`\>

##### storeSlide()

> **storeSlide**(`query`): `Promise`\<`number` \| `IResponse`\>

Defined in: [manager/index.ts:580](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L580)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `IQuery` |

###### Returns

`Promise`\<`number` \| `IResponse`\>

##### stream()

> **stream**(): `void`

Defined in: [manager/index.ts:120](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L120)

###### Returns

`void`

##### update()

> **update**(`params`): `Promise`\<`void`\>

Defined in: [manager/index.ts:85](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/manager/index.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

###### Returns

`Promise`\<`void`\>

***

### BuzzcastingStorageReader

Defined in: [reader/index.ts:10](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/reader/index.ts#L10)

#### Constructors

##### Constructor

> **new BuzzcastingStorageReader**(`options`): [`BuzzcastingStorageReader`](#buzzcastingstoragereader)

Defined in: [reader/index.ts:19](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/reader/index.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `IStorageOptions` |

###### Returns

[`BuzzcastingStorageReader`](#buzzcastingstoragereader)

#### Methods

##### getCloud()

> **getCloud**(`query`): `Promise`\<`IResponse`\>

Defined in: [reader/index.ts:48](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/reader/index.ts#L48)

Retieve Cloud Data

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `IQuery` | Widgets parameters, type "cloud" |

###### Returns

`Promise`\<`IResponse`\>

IResponse

##### getMessages()

> **getMessages**(`query`): `Promise`\<`IResponse`\>

Defined in: [reader/index.ts:75](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/reader/index.ts#L75)

Retieve Message Data

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `IQuery` | Widgets parameters, type "messages" |

###### Returns

`Promise`\<`IResponse`\>

IResponse

##### getSeries()

> **getSeries**(`query`): `Promise`\<`IResponse`\>

Defined in: [reader/index.ts:102](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/reader/index.ts#L102)

Retrieve Series Data

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | `IQuery` | Widgets parameters, type "series" |

###### Returns

`Promise`\<`IResponse`\>

IResponse

***

### Widget

Defined in: [widget/index.ts:16](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L16)

Main class for managing widgets and data updates

#### Constructors

##### Constructor

> **new Widget**(`element`, `callbacks`, `selector?`): [`Widget`](#widget)

Defined in: [widget/index.ts:31](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L31)

Main container for managing widgets and data updates

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `HTMLElement` | widget web component |
| `callbacks` | (`arg`) => `void`[] | functions in the widget that will receive the update |
| `selector?` | `string` | container for the element - by default buzzcasting-app (optional) |

###### Returns

[`Widget`](#widget)

#### Methods

##### addCallbackListener()

> **addCallbackListener**(`cb`): `void`

Defined in: [widget/index.ts:60](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `cb` | (`arg`) => `void` |

###### Returns

`void`

##### broadcastListener()

> **broadcastListener**(): `void`

Defined in: [widget/index.ts:70](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L70)

Data received from BroadcastChannel
data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
WIDGET_UPDATE is used to trigger fetching on the broadcast channel,
but also to trigger data retrieval on the widget

###### Returns

`void`

##### destroy()

> **destroy**(): `void`

Defined in: [widget/index.ts:303](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L303)

###### Returns

`void`

##### getCloud()

> **getCloud**(): `Promise`\<`IResponse`\>

Defined in: [widget/index.ts:175](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L175)

Get Widget Coud Data

###### Returns

`Promise`\<`IResponse`\>

IResponse

##### getData()

> **getData**(): `Promise`\<`IResponse`\>

Defined in: [widget/index.ts:153](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L153)

Generic call to any query type

###### Returns

`Promise`\<`IResponse`\>

IResponse

##### getMessages()

> **getMessages**(): `Promise`\<`IResponse`\>

Defined in: [widget/index.ts:210](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L210)

Get Widget Messages Data

###### Returns

`Promise`\<`IResponse`\>

IResponse

##### getSeries()

> **getSeries**(): `Promise`\<`IResponse`\>

Defined in: [widget/index.ts:244](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L244)

Get Widget Series Data

###### Returns

`Promise`\<`IResponse`\>

IResponse

##### showModal()

> **showModal**(`modal`): `void`

Defined in: [widget/index.ts:280](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L280)

Emit a show modal event using the element's attributes
the component is the web component name to show

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modal` | `IModal` | IModal |

###### Returns

`void`

##### subscribe()

> **subscribe**(): `void`

Defined in: [widget/index.ts:115](https://github.com/TouchFlows/buzzcasting-storage/blob/main/src/widget/index.ts#L115)

This is used to register the component on the container's broadcast channel
This takes place when the container indicates it has finished loading (ready)

###### Returns

`void`
