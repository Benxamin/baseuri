/**
 * Expose baseuri().
 */

module.exports = baseuri;


/**
 * Return the base URI of the document.
 *
 * @return {String} uniform resource identifier
 */
function baseuri() {
  
  // Check expected property.
  if (document.baseURI) return document.baseURI;

  // Should be exactly one tag:
  //   https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
  var base = document.getElementsByTagName('base');

  // Return location from BASE tag.
  if (base.length > 0) return base[0].href;

  // Else use implementation of documentURI:
  //   http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-baseURI
  return document.URL;
}