// iPhonelet- helper bookmarklet for iOS that modifies javascript:… URIs on page into http://mmind.me/_?javascript:…
//		this facilitates bookmarking a bookmarklet (iOS doesn't allow directly saving a javascript:… bookmark)
//
// Original code by David Sanson found at: http://www.davidsanson.com/gizmos/iphonlets-bookmarklet.html
// javascript:function%20F()%20{var%20i,L;L=document.links;for%20(i=0;i<L.length;i++)%20{if%20(L[i].protocol==%22javascript:%22)%20{L[i].href=%22http://example.com/#%22+L[i].href;L[i].style.padding=%225px%22;L[i].style.border=%22thin%20solid%20#ccc%22;L[i].style.background=%22#ff3%22;L[i].style.color=%22#000%22;}}};F();
//
// Re-written/re-encoded version saves ~60 chars
// javascript:function%20F(){var%20i=0,L=document.links,A;for(;i<L.length;i++){A=L[i];if(A.protocol=='javascript:'){A.href='http://mmind.me/_?'+A.href;A.style.padding='5px';A.style.border='thin%20solid%20#ccc';A.style.background='#ff3';A.style.color='#000'}}}F()
//
// human readable version of re-written code:
function F(){
	var i=0,L=document.links,A;
	for (;i<L.length;i++) {
		A=L[i];
		if (A.protocol=='javascript:') {
			A.href='http://mmind.me/_?'+A.href;
			A.style.padding='5px';
			A.style.border='thin solid #ccc';
			A.style.background='#ff3';
			A.style.color='#000';
		}
	}
}
F();
