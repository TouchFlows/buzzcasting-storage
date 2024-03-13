import type { IMessage } from '..'

/* export const shuffleMessages = (messages: IMessage[]) => {
	const clone = [...messages];
	for (let i = clone.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[clone[i], clone[j]] = [clone[j], clone[i]];
	}
	return clone;
};

export const anonymize = (name: string) => {
	const names: string[] = name.toUpperCase().split(/[\s_-]+/); // space and underscore
	if (names.length > 0) {
		names.forEach((element: string, index) => {
			names[index] = element.charAt(0) + ".";
		});
		return names.join(" ");
	}
	return "";
};
*/
// export const sanitize = (messages: IMessage[]) => {
// 	messages.forEach((message: IMessage) => {
// 		// remove all links
// 		message.content = message.content.replace(
// 			/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)((\?.*)?)/g,
// 			""
// 		);
// 		if (message.sender !== null) {
// 			typeof message.sender !== "undefined" &&
// 			typeof message.sender.title !== "undefined" &&
// 			message.sender.title !== "Unknown author"
// 				? message.sender.title
// 				: "";
// 			message.sender.title = message.sender.name =
// 				typeof message.sender?.name !== "undefined" &&
// 				message.sender.name !== "Unknown author"
// 					? message.sender.name
// 					: "";
// 			if (message.sender.name !== "" && message.channel === "tw") {
// 				message.sender.name = `@${message.sender.name}`;
// 			}
// 		} else {
// 			message.sender = {
// 				title: "",
// 				name: "",
// 				id: "",
// 				avatar: "default",
// 				bio: "",
// 				location: "",
// 				following: 0,
// 				verified: 0,
// 				listed: 0,
// 				followers: 0,
// 				favourites: 0,
// 				messages: 0,
// 				influence: 0,
// 			};
// 		}

// 		if (message.sender.title === "" && message.link !== "") {
// 			const domain = new URL(message.link);
// 			message.sender.title = domain.hostname.replace("www.", "");
// 		}
// 	});
// 	return messages;
// };

/**
 * Clear Container range contents of template code when the web component is connected to the DOM
 * @param myNode
 */
export function clearContents(myNode: HTMLElement): void {
  // using range as mostly we use the Host tag to encapsulate HTMLElements
  const range = document.createRange()
  range.selectNodeContents(myNode)
  range.deleteContents()
}

export function formatContent(message: IMessage): string {
  return `${
		message.title.length > 0 ? `<strong>${message.title}</strong>` : ''
	}${message.content.replace(/\n\n/g, '\n').replace(/\n/g, '<br />')}`
}

export function numberFormatter(num: number, digits: number) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'MM' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}

// export const intToString = (num: any, digits: number): string => {
// 	num = num.toString().replace(/[^0-9.]/g, "");
// 	if (num < 1000) {
// 		return num;
// 	}
// 	const si = [
// 		{ v: 1e3, s: "K" },
// 		{ v: 1e6, s: "M" },
// 		{ v: 1e9, s: "B" },
// 		{ v: 1e12, s: "T" },
// 		{ v: 1e15, s: "P" },
// 		{ v: 1e18, s: "E" },
// 	];
// 	let index: number;
// 	for (index = si.length - 1; index > 0; index--) {
// 		if (num >= si[index].v) {
// 			break;
// 		}
// 	}

// 	return (
// 		(num / si[index].v)
// 			.toFixed(digits)
// 			.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s
// 	);
// };

// export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
