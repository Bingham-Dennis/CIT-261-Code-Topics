/******************************************************************************
 *  Add Nav Items
 * This function will add the navigation bar links to the nav bar
 *****************************************************************************/
function addNavItems() {
    // create the array of navigation link titles
    let listItems = ['Basics of JavaScript', 'Home', 'About Me', 'Next Topic'];

    // loop over the array using a for each loop.
    listItems.forEach((item) => {
        if (item !== undefined && item === 'Basics of JavaScript')
        {
            // create an h1 item element.
            let h = document.createElement('h1');

            //create an anchor tag element.
            let a = document.createElement('a');

            // add the text from the item we got from the array
            // to the anchor tag element we just created.
            a.innerHTML = item;

            // get the url and set it to the href attribute on
            // the anchor tag.
            a.setAttribute('href', getURL(item));

            // add the anchor tag to the h1 element wer created
            // earlier.
            h.appendChild(a);

            // add the h1 item to the div with the id logo.
            document.getElementById('logo').appendChild(h);
        } else if (item !== undefined && item !== 'Basics of JavaScript') {
            // create a list item element.
             let li = document.createElement('li');

            //create an anchor tag element.
            let a = document.createElement('a');

            // add the text from the item we got from the array
            // to the anchor tag element we just created.
            a.innerHTML = item;

            // get the url and set it to the href attribute on
            // the anchor tag.
            a.setAttribute('href', getURL(item));

            // add the anchor tag to the list element wer created
            // earlier.
            li.appendChild(a);

            // add the list item to the un-ordered list with the
            // id nav_items.
            document.getElementById('nav_items').appendChild(li);
        } else {
            console.error(`Error parsing item: ${item}`);
        }
    })
}

/******************************************************************************
 *  Get URL
 * This function will return the correct URL based on the listItem or item
 * since we pulled it out of the array in the for loop.
 * @param: url
 *****************************************************************************/
function getURL(url) {
    if (url === 'Home' || url === 'Basics of JavaScript')
        return './index.html'
    else if (url === 'About Me')
        return './basics.html'
    else if (url === 'Next Topic')
        return './objects.html'
    else
        return '#'
}

/******************************************************************************
 *  Add Page Content
 * This function will add the content items to the body of the page.
 *****************************************************************************/
function addPageContent() {
    // create the array of content
    let listItems = [
        {
            heading: 'All About Me',
            paragraph: 'Hello, my name is Dennis Bingham. I am originally from Green River, Wyoming. My wife and I currently live in Idaho Falls, Idaho with our two and a half year old Daughter and our one month old son. Their names are, Hallie and Owen.'
        },
        {
            heading: 'Hobbies',
            paragraph: 'I love to do anything and everything that has to do with the great outdoors. I love to got hunting, camping, and fishing although I have not had much time do so as of late. I also enjoy almost any sport. There are some that I think are really boring but if you get me playing it I always end up enjoying myself.'
        },
        {
            heading: 'Technology',
            paragraph: 'I also have a strong love for electronics. My grandfather owned a custom computer shop growing up from then on I always had a desire to tinker with them. Shortly after I got married I rebuilt three old computers even though I had never gone through that process before. After that I was hooked and I spent every spare moment sucking in as much information as I could about computers.'
        },
        {
            heading: 'Whats Next',
            paragraph: 'I am graduating in December. I do, however, already have a development job for a company called Simply Clinical it is a subsidiary company of a mental health hospital. It has been awesome learning all the different technologies that the web has to offer. I would love to work for a large corporation one day or start my own company.'
        },
        {
            heading: 'Closing it Out',
            paragraph: 'This class can be daunting. I procrastinated last semester as I was also working full-time and thought oh it\'s fine I can catch up. I recommend not making that mistake. I look forward to getting to know each and every one of you! Have a great semester.'
        }
    ];


    for (let i = 0; i < listItems.length; i++) {
        // loop over the array using a for loop.
        // create a h3 item element.
        let h = document.createElement('h3');

        //create a p element.
        let p = document.createElement('p');

        // add the text from the item we got from the array
        // to the elements we just created.
        h.innerHTML = listItems[i].heading;
        p.innerHTML = listItems[i].paragraph;

        // add the items to the div with the id topContent.
        document.getElementById('topContent').appendChild(h);
        document.getElementById('topContent').appendChild(p);
    }
}
