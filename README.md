# SimpleBlue_WyamBlogTheme

A custom blog theme for [Wyam](http://Wyam.io). The available themes were a bit too modern for my taste, so I created a new one with aesthetics similar to traditional wordpress blogs. [You can see a demo here](https://macn1981.github.io/SimpleBlue_WyamBlogTheme/). The theme feateures are:

 - **CSS only responsive design:** The blog adapts to different screens only with CSS.
 - **Minimal javascript:** Only a single file with quality of life enhancements that can be turned off without diminishing the blog usability. 
 - **Dark Mode:** The blog has a toogleable mode for those who prefer web pages with a a dark color scheme. The setting is stored in local storage. The colors scheme can be further customized by changing the css variables at the start of the styles.css file.
 - **Post series:** You can links groups of posts by adding a "Serie" metadata to the post. Posts with the same value in that metadata will have a list of all post in the same series at the starts, with links. Looks in the posts folder for example
 - **Tag descriptions:** You can add descriptions to tags by adding a markdown file (with a name prefixed with "_") to the tagdescriptions folder. The file only requires a title matching the tag, and any content you want to be used as description. 

The bad things:
  - This repository is for people to use it as a base/inspiration for their own custom theme. Updates will be few, but I will try to fix most grave issues nonetheless. Just note that I have limited time to work on it. 
  - It does not work in Internet Explorer
  - No comments. If you want to add Disqus or any other comment system, you will have to add it yourself.  
  - No front page. The blog default page is the first post. Also, is displays only one article per page. All of these are by design (I prefer it that way)
  - Now that we are talking about design, I lack all but the most basic notions of web design or usability, so you probably will find a lot a very bad things in those two areas. 
  - Why it is not available as a nuget package? Because as it is now, this theme it is very opinionated, a bit too minimalist, and probably not very customizable. I don't think I will be doing it myself, but if you think you can manage to get a usable Wyam theme out of this mess, by all means, fork the project and do it. Also, the tagdescriptions feature relies in a custom config.wyam file, which cannot be included in the nuget package.