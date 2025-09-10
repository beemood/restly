<p align="center">
  <img src="https://beemood.github.io/restly/libs/names/assets/favicon.png" alt="Logo" />
</p>

# @restly/names

This project provides a utility for parsing and normalizing a string based on specific formatting rules. The core functionality is encapsulated in the normalize function, which takes a raw string as input and returns a cleaned and validated version. This is particularly useful for standardizing data entries, such as names or product identifiers, by handling common issues like empty strings, extra whitespace, and incorrect formatting.

## Install

`pnpm add @restly/names`

## Example

```ts
const result = names('productCategory|PRODUCT_CATEGORY|product-category|product category');

result.kebab; // returns: product-category
result.camel; // returns: productCategory
result.pascal; // returns: ProductCategory
result.snake; // returns: product_category
result.screamingSnake; // returns: PRODUCT_CATEGORY
result.title; // returns: Product Category
result.sentence; // returns: Product category
result.upper; // returns: PRODUCT CATEGORY
result.lower; // returns: product category
result.className; // returns: ProductCategory
result.propertyName; // returns: productCategory
result.constantName; // returns: PRODUCT_CATEGORY
result.fileName; // returns: product-category
```

## Funding

Thank you for using the library. It's an open-source project, and maintaining it takes time and effort. If you find this library useful, please consider supporting its ongoing development. Your contributions help ensure that the project stays up-to-date, secure, and well-maintained.

[Instant Funding](https://cash.app/$puqlib)

## Your funding will go toward

- **Bug fixes and updates** to ensure compatibility with the latest versions of dependencies.
- **New features** that will make the library even more powerful.
- **Documentation** improvements to help users get the most out of the library.
- **General maintenance** to keep the library running smoothly and securely.

[Contact to the developer:](mailto:robert-brightline@gmail.com?subject=InquiryFromReadme-names)

[Support the developer](https://cash.app/$puqlib)
