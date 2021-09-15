import { time } from "@messageformat/runtime/lib/formatters";
import { number, plural, select } from "@messageformat/runtime";
import { en } from "@messageformat/runtime/lib/cardinals";
export default {
  "F:/prog/messageformat/messages/en": {
    plain: () => "EN: Some text without interpolations",
    interpolated: (d) => "EN: A text where I interpolate " + d.count + " times",
    time: (d) => "EN: Now is " + time(d.now, "en"),
    number: (d) => "EN: My favorite number is " + number("en", d.n, 0),
    pluralized: (d) => "EN: I have " + plural(d.count, 0, en, { "1": "one cat", other: d.count + " cats" }),
    "pluralized-with-hash": (d) => "EN: I have " + plural(d.count, 0, en, { one: "just " + number("en", d.count, 0) + " cat", other: number("en", d.count, 0) + " cats" }),
    selected: (d) => "EN: " + select(d.gender, { male: "He is a good boy", female: "She is a good girl", other: "They are good fellas" })
  },
  "F:/prog/messageformat/messages/es": {
    plain: () => "ES: Some text without interpolations",
    interpolated: (d) => "ES: A text where I interpolate " + d.count + " times",
    time: (d) => "ES: Now is " + time(d.now, "en"),
    number: (d) => "ES: My favorite number is " + number("en", d.n, 0),
    pluralized: (d) => "ES: I have " + plural(d.count, 0, en, { "1": "one cat", other: d.count + " cats" }),
    "pluralized-with-hash": (d) => "ES: I have " + plural(d.count, 0, en, { one: "just " + number("en", d.count, 0) + " cat", other: number("en", d.count, 0) + " cats" }),
    selected: (d) => "ES: " + select(d.gender, { male: "He is a good boy", female: "She is a good girl", other: "They are good fellas" })
  },
  "F:/prog/messageformat/messages/fr": {
    plain: () => "FR: Some text without interpolations",
    interpolated: (d) => "FR: A text where I interpolate " + d.count + " times",
    time: (d) => "FR: Now is " + time(d.now, "en"),
    number: (d) => "FR: My favorite number is " + number("en", d.n, 0),
    pluralized: (d) => "FR: I have " + plural(d.count, 0, en, { "1": "one cat", other: d.count + " cats" }),
    "pluralized-with-hash": (d) => "FR: I have " + plural(d.count, 0, en, { one: "just " + number("en", d.count, 0) + " cat", other: number("en", d.count, 0) + " cats" }),
    selected: (d) => "FR: " + select(d.gender, { male: "He is a good boy", female: "She is a good girl", other: "They are good fellas" })
  }
}