import { time } from "@messageformat/runtime/lib/formatters";
import { number, plural, select } from "@messageformat/runtime";
import { en, es, fr } from "@messageformat/runtime/lib/cardinals";
export default {
  en: {
    plain: () => "EN: Some text without interpolations",
    interpolated: (/** @type {{ count: number; }} */ d) => "EN: A text where I interpolate " + d.count + " times",
    time: (/** @type {{ now: string | number; }} */ d) => "EN: Now is " + time(d.now, "en"),
    number: (/** @type {{ n: number; }} */ d) => "EN: My favorite number is " + number("en", d.n, 0),
    pluralized: (/** @type {{ count: number; }} */ d) => "EN: I have " + plural(d.count, 0, en, { "1": "one cat", other: d.count + " cats" }),
    "pluralized-with-hash": (/** @type {{ count: number; }} */ d) => "EN: I have " + plural(d.count, 0, en, { one: "just " + number("en", d.count, 0) + " cat", other: number("en", d.count, 0) + " cats" }),
    selected: (/** @type {{ gender: "male" | "female" | "other"; }} */ d) => "EN: " + select(d.gender, { male: "He is a good boy", female: "She is a good girl", other: "They are good fellas" })
  },
  es: {
    plain: () => "ES: Some text without interpolations",
    interpolated: (/** @type {{ count: number; }} */ d) => "ES: A text where I interpolate " + d.count + " times",
    time: (/** @type {{ now: string | number; }} */ d) => "ES: Now is " + time(d.now, "es"),
    number: (/** @type {{ n: number; }} */ d) => "ES: My favorite number is " + number("es", d.n, 0),
    pluralized: (/** @type {{ count: number; }} */ d) => "ES: I have " + plural(d.count, 0, es, { "1": "one cat", other: d.count + " cats" }),
    "pluralized-with-hash": (/** @type {{ count: number; }} */ d) => "ES: I have " + plural(d.count, 0, es, { one: "just " + number("es", d.count, 0) + " cat", other: number("es", d.count, 0) + " cats" }),
    selected: (/** @type {{ gender: "male" | "female" | "other"; }} */ d) => "ES: " + select(d.gender, { male: "He is a good boy", female: "She is a good girl", other: "They are good fellas" })
  },
  fr: {
    plain: () => "FR: Some text without interpolations",
    interpolated: (/** @type {{ count: number; }} */ d) => "FR: A text where I interpolate " + d.count + " times",
    time: (/** @type {{ now: string | number; }} */ d) => "FR: Now is " + time(d.now, "fr"),
    number: (/** @type {{ n: number; }} */ d) => "FR: My favorite number is " + number("fr", d.n, 0),
    pluralized: (/** @type {{ count: number; }} */ d) => "FR: I have " + plural(d.count, 0, fr, { "1": "one cat", other: d.count + " cats" }),
    "pluralized-with-hash": (/** @type {{ count: number; }} */ d) => "FR: I have " + plural(d.count, 0, fr, { one: "just " + number("fr", d.count, 0) + " cat", other: number("fr", d.count, 0) + " cats" }),
    selected: (/** @type {{ gender: "male" | "female" | "other"; }} */ d) => "FR: " + select(d.gender, { male: "He is a good boy", female: "She is a good girl", other: "They are good fellas" })
  }
}
