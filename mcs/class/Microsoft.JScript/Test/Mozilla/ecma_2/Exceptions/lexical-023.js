/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/**
   File Name:          lexical-023.js
   Corresponds To:     7.4.3-16-n.js
   ECMA Section:       7.4.3
   Description:
   The following words are used as keywords in proposed extensions and are
   therefore reserved to allow for the possibility of future adoption of
   those extensions.

   FutureReservedWord :: one of
   case    debugger    export      super
   catch   default     extends     switch
   class   do          finally     throw
   const   enum        import      try

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "lexical-023.js";
var VERSION = "ECMA_1";
var TITLE   = "Future Reserved Words";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  eval("try = true;");
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "try = true" +
  " (threw " + exception +")",
  expect,
  result );

test();


