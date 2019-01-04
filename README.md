# SimpleBlue: A custom Wyam Blog Theme
 
A custom blog theme for [Wyam](http://Wyam.io). The available themes were a bit too modern for my taste, so I created a new one with aesthetics similar to traditional wordpress blogs. [You can see a demo here](https://macn1981.github.io/SimpleBlue_WyamBlogTheme/). 

## The good bits:

 - **CSS only responsive design:** The blog adapts to different screens, using only CSS.
 - **Minimal JavaScript:** Only a single file with quality of life enhancements that can be turned off without diminishing the blog usability. 
 - **Dark Mode:** The blog has a toggleable mode for those who prefer web pages with a a dark colour scheme. The setting is stored in local storage. The colour scheme can be further customized by changing the CSS variables at the start of the styles.css file.
 - **Post series:** You can links groups of posts by adding a "Serie" metadata to the post. Posts with the same value in that metadata will have a list of all post in the same series at the starts, with links. Look in the posts folder for examples
 - **Tag descriptions:** You can add descriptions to tags by adding a markdown file (with a name prefixed with "_") to the `tagdescriptions` folder. The file only requires a title matching the tag, and any content you want to be used as description. 

## The bad bits:

  - I lack all but the most basic notions of web design or usability, so you probably will find a lot a very bad things in those two areas. 
  - The blog design is very opinionated, a bit too minimalist, and probably not very customizable:
	  - No front page. The blog default page is the latest post. 
	  - Only one article per page.
	  - No month/year archive pages.
	  - No comments. If you want to add Disqus or any other comment system, you will have to add it yourself.  	
  - It does not work in Internet Explorer.
  
## Why it is not available as a Nuget package, like other themes?

Because, as noted before, this theme was done according to my preferences, which may not be the same as the rest of the people, and is not specially customizable. Also, the **Tag descriptions** feature relies in a custom config.wyam file, which cannot be included in the Nuget package. In my opinion, it is not a good candidate to Nuget package in its current form. 

That said, if you think it should be available in Nuget, by all means, fork the project and do it.
