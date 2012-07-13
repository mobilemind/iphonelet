# iPhonelet
A meta-bookmarklet to make it possible to bookmark `javascript:` bookmarklets in browsers
that only allow bookmarking of page URLs. Mobile Safari on iOS is a prominent example of
such a browser.

Original code by David Sanson found at: <http://www.davidsanson.com/gizmos/iphonlets-bookmarklet.html>

Re-written/re-encoded version saves ~60 characters and uses <http://mmind.me/_?> as the
base to "host" the re-written `javascript:` URLs on a page.

## Install
**Mobile Safari**
 
Bookmark this [iPhonelet](http://mmind.me/_?javascript:function%20F%28%29{var%20i=0,L=document.links,A;for%28;i&lt;L.length;i++%29{A=L[i];if%28A.protocol=='javascript:'%29{A.href='http://mmind.me/_?'+A.href;A.style.padding='5px';A.style.border='thin%20solid%20#ccc';A.style.background='#ff3';A.style.color='#000'}}}F%28%29)
link and then edit the bookmark to remove the `http://mmind.me/_?` address prefix. The
edited bookmark address should begin `javascript:function%20F…` You can also visit the
[iPhonelet hosted on github](http://mobilemind.github.com/iphonelet/) to try the bookmark.
 
**Safari**

Visit the [iPhonlet hosted on github](http://mobilemind.github.com/iphonelet/)
 *OR* make use of an `iphonelet.webloc` file from the repository.

## Use
From David Sanson's page:

>The iPhonlets bookmarklet changes all `href="javascript:blah"` links on a page to
>`href="http://example.com/#javascript:blah"` links. (As a visual cue, it surrounds 
>converted links in a yellow box.) Once this has been done, you can follow the link to 
>`http://example.com#javascript:blah` and bookmark the page. You can then edit the bookmark,
>deleting the `http://example.com/#` bit from the URL, leaving just the `javascript:blah` bit.
>
>The process is a pain, but it is less of a pain than any other option, and it works.

One minor difference in this version is that instead of `http://example.com/#` it uses
`http://mmind.me/_?` as the link prefix.

## Compatibility
Tested with Safari 5.1.x and Mobile Safari 5.x. Should work with earlier versions.

Should work with Firefox and Chrome on the desktop (not sure why you'd use it, but it does
reveals/highlight bookmarklets on a page).

May work with Chrome for Android, but unlikely to work with the default Android Browser app.

## License
Not sure, Mr. Sanson wasn't clear on that. Some might observe it is just 14 lines of code
and the encoded bookmark version here is only 260 characters. Contact the original author
for more information on the license status.
