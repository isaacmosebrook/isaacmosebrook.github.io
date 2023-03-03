$('#album1').on('shown.bs.modal', function(e) {
    
    var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Love',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+01+Love.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'I Lost You',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+02+I+Lost+You.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'Good People',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+03+Good+People.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'Im Comin Home',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+04+I%27m+Comin+Home.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'Grind God',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+05+Grind+God.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'Winter',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+06+Winter.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
         {
            title: 'Summer',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+07+Summer.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'The Golden Days',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+08+The+Golden+Days.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'Spaceship Cookin',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+09+Spaceship+Cookin.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        },
        {
            title: 'Give Me Something',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Bass+Fish+-+Punk+-+10+Give+Me+Something.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Punk/Punk+Cover.jpg'
        }
    ]
});
});

$('#album2').on('shown.bs.modal', function(e) {
    
    var ap2 = new APlayer({
    element: document.getElementById('player2'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'One Day',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+01+One+Day.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        },
        {
            title: 'Gods Not Enough',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+02+God%27s+Not+Enough.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        },
        {
            title: 'Control',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+03+Control.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        },
        {
            title: 'Death is a Sentence',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+04+Death+is+a+Sentence.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        },
        {
            title: 'The Isle',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+05+The+Isle.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        },
        {
            title: 'Nothing at All',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+06+Nothing+at+All.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        },
        {
            title: 'The Cycle',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/Barrel+Cacti+-+The+Cycle+-+07+The+Cycle.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Cycle/The+Cycle+Cover.jpg'
        }
    ]
});
});

$('#album3').on('shown.bs.modal', function(e) {
    
    var ap3 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'GPS',
            author: 'Papa Stone',
            url: 'https://s3.amazonaws.com/isaacmosebrook/First+Thoughts/Papa+Stone+-+First+Thoughts+-+01+GPS.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/First+Thoughts/First+Thoughts+Cover.jpg'
        },
        {
            title: 'Traffic',
            author: 'Papa Stone',
            url: 'https://s3.amazonaws.com/isaacmosebrook/First+Thoughts/Papa+Stone+-+First+Thoughts+-+02+Traffic.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/First+Thoughts/First+Thoughts+Cover.jpg'
        },
        {
            title: 'Global Positioning System',
            author: 'Papa Stone',
            url: 'https://s3.amazonaws.com/isaacmosebrook/First+Thoughts/Papa+Stone+-+First+Thoughts+-+03+Global+Positioning+System.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/First+Thoughts/First+Thoughts+Cover.jpg'
        }
    ]
});
});

$('#album4').on('shown.bs.modal', function(e) {
    
    var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'The Dankest Memers 2',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Dankest+Memers+2/Bass+Fish+-+The+Dankest+Memers+2.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Dankest+Memers+2/The+Dankest+2+Cover.jpg'
        }
    ]
});
});

$('#album5').on('shown.bs.modal', function(e) {
    
    var ap5 = new APlayer({
    element: document.getElementById('player5'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'The Problem',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+01+The+Problem.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Chains',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+02+Chains.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Bite the Dust',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+03+Bite+the+Dust.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Break Me',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+04+Break+Me.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Trail of Ashes',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+05+Trail+of+Ashes.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Waterfall of Words',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+06+Waterfall+of+Words.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Rage',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+07+Rage.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Prove You Wrong',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+08+Prove+You+Wrong.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Inner Wrath',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+09+Inner+Wrath.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Shapeshifter',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+10+Shapeshifter.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Castle',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+11+Castle.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Fly',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+12+Fly.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        },
        {
            title: 'Inner Wrath (Potato Version)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Eyesack+Moseberg+-+Electricity+-+13+Inner+Wrath+(Potato+Version).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Electricity/Electricity+Cover.jpg'
        }
    ]
});
});


$('#album6').on('shown.bs.modal', function(e) {
    
    var ap6 = new APlayer({
    element: document.getElementById('player6'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Release the Fish',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+01+Release+the+Fish.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'When Im in the Bank',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+02+When+I%27m+in+the+Bank.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'The Dankest Memers',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+03+The+Dankest+Memers.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'The Wall',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+04+The+Wall.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'Hot Tea',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+05+Hot+Tea.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'Rocket Ship',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+06+Rocket+Ship.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'Call Me Celery',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+07+Call+Me+Celery.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'An Unpleasant Network of Dirt Paths',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+08+An+Unpleasant+Network+of+Dirt+Paths.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'Dislike',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+09+Dislike.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'The Tree',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+10+The+Tree.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        },
        {
            title: 'Extraneous Expulsions',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Bass+Fish+-+Chairvolution+-+11+Extraneous+Expulsions.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Chairvolution/Chairvolution+Cover.jpg'
        }
    ]
});
});

$('#album7').on('shown.bs.modal', function(e) {
    
    var ap7 = new APlayer({
    element: document.getElementById('player7'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'History',
            author: 'Platypus Torpedo',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Divebombing+the+Sun/Platypus+Torpedo+-+Dive-bombing+the+Sun+-+01+History.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Divebombing+the+Sun/Dive+Bombing+the+Sun+Cover.jpg'
        },
        {
            title: 'You Gotta Stop',
            author: 'Platypus Torpedo',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Divebombing+the+Sun/Platypus+Torpedo+-+Dive-bombing+the+Sun+-+02+You+Gotta+Stop.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Divebombing+the+Sun/Dive+Bombing+the+Sun+Cover.jpg'
        },
        {
            title: 'Shes a Lobster',
            author: 'Platypus Torpedo',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Divebombing+the+Sun/Platypus+Torpedo+-+Dive-bombing+the+Sun+-+03+She%27s+a+Lobster.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Divebombing+the+Sun/Dive+Bombing+the+Sun+Cover.jpg'
        }
    ]
});
});

$('#album8').on('shown.bs.modal', function(e) {
    
    var ap8 = new APlayer({
    element: document.getElementById('player8'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Welcome to the Club',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Welcome+to+the+Club.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Tragedy Transcending',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Tragedy+Transcending.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'The Wilderness',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/The+Wilderness.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Making History',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Making+History.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Zenith',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Zenith.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Time of Need',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Time+of+Need.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Troves of Green',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Troves+of+Green.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'All the Lumberjacks',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/All+the+Lumberjacks.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Through the Black Hole',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Through+the+Black+Hole.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Detonate',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Detonate.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Resist',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Resist.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Decay',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Decay.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Onward',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Onward.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        },
        {
            title: 'Moments',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Score/Moments.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Score/Score+Cover.jpg'
        }
    ]
});
});


$('#album9').on('shown.bs.modal', function(e) {
    
    var ap9 = new APlayer({
    element: document.getElementById('player9'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Brass (Nonchalant)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Brass+(Nonchalant).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Khan (Thief)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Khan+(Thief).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Clarebear (Boss)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Clarebear+(Boss).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
           {
            title: 'Sheaffer (Liar)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Sheaffer+(Liar).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Flynn (Squatter)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Flynn+(Squatter).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Santora (Pathetic)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Santora+(Pathetic).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
           {
            title: 'Page (Eccentric)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Page+(Eccentric).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Wagner (Traitor)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Wagner+(Traitor).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Toth (Rigid)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Toth+(Rigid).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Dom (Aloof)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Dom+(Aloof).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Jazzy! (Interlude)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Jazzy!+(Interlude).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
           {
            title: 'Scott (Lazy)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Scott+(Lazy).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'God_Smetal (Legendary)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/God_Smetal+(Legendary).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'Hooks (Prosperous)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Hooks+(Prosperous).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
           {
            title: 'Kinyon (Intrepid)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Kinyon+(Intrepid).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        },
        {
            title: 'When (Now)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/When+(Now).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Rabblement/Rabblement+Cover.jpg'
        }
    ]
});
});

$('#album10').on('shown.bs.modal', function(e) {
    
    var ap10 = new APlayer({
    element: document.getElementById('player10'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Every Mans Treasure',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Every+Man%27s+Treasure.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        },
        {
            title: 'Liberator of Life',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Liberator+of+Life.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        },
        {
            title: 'Spotlight Sovereign',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Spotlight+Sovereign.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        },
        {
            title: 'Escalade',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Escalade.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        },
        {
            title: 'Frictionless',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Frictionless.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        },
        {
            title: 'Enlightened Insanity',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Enlightened+Insanity.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        },
        {
            title: 'The Fragile Castle',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/The+Fragile+Castle.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Battle+of+the+Cactus+and+the+Lobster/Battle+of+Cactus+Cover.jpg'
        }
    ]
});
});

$('#album11').on('shown.bs.modal', function(e) {
    
    var ap11 = new APlayer({
    element: document.getElementById('player11'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Expectorate',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+01+Expectorate.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'Dodecahedron',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+02+Dodecahedron.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'Intro to LFRG',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+03+Intro+to+LFRG.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'Deploy the LFRG',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+04+Deploy+the+LFRG.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'Clown Town',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+05+Clown+Town.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'Take a Break',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+06+Take+a+Break.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'The Pirate King',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+07+The+Pirate+King.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        },
        {
            title: 'Ich Werde Dich im [Hauptwort - Verb]',
            author: 'GP Labs',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/GP+Labs+-+Billabob%27s+Toolbox+of+Bass+-+08+Ich+Werde+Dich+im+-Hauptwort-+-Verb-.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Billabobs+Toolbox+of+Bass/Billabobs+Cover.jpg'
        }
    ]
});
});

$('#album12').on('shown.bs.modal', function(e) {
    
    var ap12 = new APlayer({
    element: document.getElementById('player12'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Barricade',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/cccc/Barricade.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/cccc/CCCC+Cover.jpg'
        },
        {
            title: 'Altering Perception',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/cccc/Altering+Perception.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/cccc/CCCC+Cover.jpg'
        },
        {
            title: 'Pragmatics',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/cccc/Pragmatics.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/cccc/CCCC+Cover.jpg'
        },
        {
            title: 'Understood',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/cccc/Understood.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/cccc/CCCC+Cover.jpg'
        },
        {
            title: 'Transmission Interference',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/cccc/Transmission+Interference.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/cccc/CCCC+Cover.jpg'
        },
        {
            title: 'Blueberry Feedback',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/cccc/Blueberry+Feedback.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/cccc/CCCC+Cover.jpg'
        }
    ]
});
});


$('#album13').on('shown.bs.modal', function(e) {
    
    var ap13 = new APlayer({
    element: document.getElementById('player13'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'The End',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+End.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Four Thirds Orange',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Four+Thirds+Orange.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Cold Air Balloon',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Cold+Air+Balloon.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Blue Alligator',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Blue+Alligator.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Wut',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Wut.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Yeeeeeeeeaaa',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Yeeeeeeeeaaa.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Man From Texas',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Man+From+Texas.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Uncensored',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Uncensored.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Jets Are Blue',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Jets+Are+Blue.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'bbqb',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/bbqb.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'kms',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/kms.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Care (Lack Thereof)',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Care+(Lack+Thereof).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'The Buffet',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+Buffet.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Witches',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Witches.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Remix',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Remix.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Ol Faithful',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Ol+Faithful.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Fungi',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Fungi.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Earphones',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Earphones.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Djentlemen',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Djentlemen.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'That One Day',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/That+One+Day.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Pataters',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Pataters.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Welcome Home',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Welcome+Home.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'The South',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+South.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Elevator Time',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Elevator+Time.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Not a Song',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Not+a+Song.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Jeff Sleepman',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Jeff+Sleepman.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Life of a Tree',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Life+of+a+Tree.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Jazz Rap',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Jazz+Rap.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Play Loud in Car to Win',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Play+Loud+in+Car+to+Win.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'Rap Jazz',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/Rap+Jazz.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        },
        {
            title: 'The Beginning',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+Beginning.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+First+Closet/The+First+Closet+Cover.jpg'
        }
    ]
});
});


$('#album14').on('shown.bs.modal', function(e) {
    
    var ap14 = new APlayer({
    element: document.getElementById('player14'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Traveler',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Traveler.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Red Beets',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Red+Beets.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Into the Hurricane',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Into+the+Hurricane.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
           {
            title: 'Cross of Bronze',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Cross+of+Bronze.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Why',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Why.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Unleash',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Unleash.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
           {
            title: 'Necrosis',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Necrosis.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Metempsychosis',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Metempsychosis.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Obsidian',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Obsidian.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Migration',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Migration.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Cascade',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Cascade.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
           {
            title: 'Stone',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Stone.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Invasion',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Invasion.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'Cascade Part II',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Cascade+Part+II.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
           {
            title: 'From Above',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/From+Above.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
           {
            title: 'Recursion',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Recursion.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        },
        {
            title: 'NightTide',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/NightTide.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Six+Dimensions/Six+Dimensions+Cover.jpg'
        }
    ]
});
});

$('#album15').on('shown.bs.modal', function(e) {
    
    var ap15 = new APlayer({
    element: document.getElementById('player15'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Creation',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Creation.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        },
        {
            title: 'The Dawn of Realization',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/The+Dawn+of+Realization.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        },
        {
            title: 'Lost Years',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Lost+Years.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        },
        {
            title: 'Confrontation',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Confrontation.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        },
        {
            title: 'Change',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Change.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        },
        {
            title: 'Regression',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Regression.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        },
        {
            title: 'Ultimatum',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Ultimatum.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Voyage+of+Existence/Voyage+of+Existence+Cover.jpg'
        }
    ]
});
});

$('#album16').on('shown.bs.modal', function(e) {
    
    var ap16 = new APlayer({
    element: document.getElementById('player16'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Capacitor Overload',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Capacitor+Overload.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        },
        {
            title: 'Universal Levitation',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Universal+Levitation.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        },
        {
            title: 'Maxwells Equations',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Maxwell%27s+Equations.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        },
        {
            title: 'Inductive Coils',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductive+Coils.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        },
        {
            title: 'Time-Varying Magnetic Field',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Time-Varying+Magnetic+Field.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        },
        {
            title: 'The Switch Board',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/The+Switch+Board.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        },
        {
            title: 'Solenoid',
            author: 'Fake Jam',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Solenoid.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Inductance/Inductance.jpg'
        }
    ]
});
});

$('#album17').on('shown.bs.modal', function(e) {
    
    var ap17 = new APlayer({
    element: document.getElementById('player17'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Leviathan',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Mini+Closet/Leviathan.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Mini+Closet+Cover.jpg'
        },
        {
            title: 'Carpets (Acoustic)',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Mini+Closet/Carpets+(Acoustic).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Mini+Closet+Cover.jpg'
        },
        {
            title: 'Walk Da Plank (Live)',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Mini+Closet/Walk+Da+Plank+(Live).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Mini+Closet+Cover.jpg'
        },
        {
            title: 'To Fabricate a Pillow',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Mini+Closet/To+Fabricate+a+Pillow.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Mini+Closet+Cover.jpg'
        }
    ]
});
});

$('#album18').on('shown.bs.modal', function(e) {
    
    var ap18 = new APlayer({
    element: document.getElementById('player18'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'The Shopping Cart',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/The+Shopping+Cart.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Bowls (Feat. Jalal Khan)',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Bowls+(feat.+Jalal+Khan).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'The Wooden Staircase',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/The+Wooden+Staircase.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Dat Nugget',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Dat+Nugget.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
           {
            title: 'Me and My Tractor',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Me+and+My+Tractor.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Jacob and His Lobster Pet',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Jacob+and+His+Lobster+Pet.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Biker Gang',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Biker+Gang.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Walk Da Plank',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Walk+Da+Plank.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
           {
            title: 'High Flyer',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/High+Flyer.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Dlyan Ist Ein Kriegsschiff',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Dylan+Ist+Ein+Kriegsschiff.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Cabinets',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Cabinets.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Where is the Chair',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Where+is+the+Chair.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
           {
            title: 'Expedition',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Expedition.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'No Oranges',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/No+Oranges.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Magic Mix',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Magic+Mix+(feat.+Unknown).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Aaron Burr',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Aaron+Burr.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
           {
            title: 'Sla-Bam (Feat. White Luda)',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Sla-Bam+(feat.+White+Luda).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Time (Lack Thereof)',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Time+(Lack+Thereof).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Everybody in Da House',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Everybody+in+Da+House.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Carpets',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Carpets.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
           {
            title: 'Socks are Loud',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Socks+are+Loud.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Bocaj Stop Ringing the Doorbell',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Bocaj+Stop+Ringing+the+Doorbell.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        },
        {
            title: 'Track 20',
            author: 'Bass Fish',
            url: 'https://isaacmosebrook.s3.amazonaws.com/The+Last+Closet/Track+20.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Last+Closet+Cover.jpg'
        }
    ]
});
});

$('#album19').on('shown.bs.modal', function(e) {
    
    var ap19 = new APlayer({
    element: document.getElementById('player19'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'strawberryjam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/strawberryjam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
        {
            title: 'grapefruitjam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/grapefruitjam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
        {
            title: 'blueberryjam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/blueberryjam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
        {
            title: 'raspberryjam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/raspberryjam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
        {
            title: 'bananajam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/bananajam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
         {
            title: 'grapejam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/grapejam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
        {
            title: 'lemonjam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/lemonjam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        },
        {
            title: 'watermelonjam',
            author: 'Fake Jam',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Traffic+Jam/watermelonjam.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Traffic+Jam+Cover.jpg'
        }
    ]
});
});

$('#album20').on('shown.bs.modal', function(e) {
    
    var ap20 = new APlayer({
    element: document.getElementById('player20'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Conquer the Weak',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/Conquer+the+Weak.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
        {
            title: 'The Canal',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/The+Canal.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
        {
            title: 'The Rebels of the Pacific',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/The+Rebels+of+the+Pacific.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
        {
            title: 'The Fight for Freedom',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/The+Fight+for+Freedom.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
        {
            title: 'War of Indepence',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/War+of+Independence.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
         {
            title: 'Keep Out of Latin America',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/Keep+Out+of+Latin+America.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
        {
            title: 'Controlled by Loan',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/Controlled+by+Loan.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        },
        {
            title: 'Protecting Our Markets',
            author: '',
            url: 'https://isaacmosebrook.s3.amazonaws.com/World+Domination/Protecting+our+Markets.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/World+Domination+Cover.jpg'
        }
    ]
});
});

$('#album21').on('shown.bs.modal', function(e) {
    
    var ap21 = new APlayer({
    element: document.getElementById('player21'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Sunset Sand',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/Matt+Kerr+and+Eyesack+Moseberg+-+Common+Slack+-+01+Sunset+Sand.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/commonslackcover.jpg'
        },
        {
            title: 'Go Again',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/Matt+Kerr+and+Eyesack+Moseberg+-+Common+Slack+-+02+Go+Again.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/commonslackcover.jpg'
        },
        {
            title: 'Dead on the Avenue',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/Matt+Kerr+and+Eyesack+Moseberg+-+Common+Slack+-+03+Dead+on+the+Avenue.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/commonslackcover.jpg'
        },
        {
            title: 'Real Conversation',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/Matt+Kerr+and+Eyesack+Moseberg+-+Common+Slack+-+04+Real+Conversation.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Common+Slack/commonslackcover.jpg'
        }
    ]
});
});

$('#album22').on('shown.bs.modal', function(e) {
    
    var ap22 = new APlayer({
    element: document.getElementById('player22'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'The Key',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+01+The+Key.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
        {
            title: 'When the Smoke Clears',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+02+When+the+Smoke+Clears.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
        {
            title: 'You Cant Run',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+03+You+Cant+Run.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
                {
            title: 'Clock Ticks On',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+04+Clock+Ticks+On.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
                {
            title: 'Sweet Release',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+05+Sweet+Release.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
                {
            title: 'Separate',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+06+Separate.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
                {
            title: 'The Glow',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+07+The+Glow.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
                {
            title: 'Take it All',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+08+Take+it+All.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        },
        {
            title: 'Passion',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Passion/Eyesack+Moseberg+-+Passion+-+09+Passion.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Passion/passioncover.jpg'
        }
    ]
});
});

$('#album23').on('shown.bs.modal', function(e) {
    
    var ap23 = new APlayer({
    element: document.getElementById('player23'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'All Clear',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+01+All+Clear.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
        {
            title: 'Regrettable Grace',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+02+Regrettable+Grace.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
        {
            title: 'Vultures',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+03+Vultures.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
                {
            title: 'Upstate',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+04+Upstate.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
                {
            title: 'Something Good',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+05+Something+Good.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
                {
            title: 'Television Romance',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+06+Television+Romance.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
                {
            title: 'Forward Thinking',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+07+Forward+Thinking.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
                {
            title: 'Walking on a Budget',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+08+Walking+on+a+Budget.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        },
        {
            title: 'The Sun',
            author: 'Matt Kerr and Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/Matt+Kerr+and+Eyesack+Moseberg+-+Upstate+-+09+The+Sun.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Upstate/upstatecover.jpg'
        }
    ]
});
});

$('#album24').on('shown.bs.modal', function(e) {
    
    var ap24 = new APlayer({
    element: document.getElementById('player24'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Outroduction',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+01+Outroduction.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
        {
            title: 'Billboard Guarantee',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+02+Billboard+Guarantee.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
        {
            title: 'Enormous Stacks',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+03+Enormous+Stacks.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
                {
            title: 'Pour It Out',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+04+Pour+It+Out.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
                {
            title: 'No Mistakes',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+05+No+Mistakes.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
                {
            title: 'Wack Jack',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+06+Wack+Jack.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
                {
            title: 'Clouds',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+07+Clouds.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
                {
            title: 'Paris Nights',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+08+Paris+Nights.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
                {
            title: 'Lamb',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+09+Lamb.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        },
        {
            title: 'Valley of the Ghosts',
            author: 'Bass Fish',
            url: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/Bass+Fish+-+The+Truth+-+10+Valley+of+Ghosts.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/The+Truth/thetruthart.jpg'
        }
    ]
});
});

$('#album25').on('shown.bs.modal', function(e) {
    
    var ap25 = new APlayer({
    element: document.getElementById('player25'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Get Out',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+01+Get+Out.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        },
        {
            title: 'Disconnect',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+02+Disconnect.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        },
        {
            title: 'Last Train',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+03+Last+Train.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        },
        {
            title: 'Grounded and Broken',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+04+Grounded+and+Broken.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        },
        {
            title: 'Take Me Back',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+05+Take+Me+Back.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        },
        {
            title: 'Velvet',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+06+Velvet.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        },
        {
            title: 'Light in the Mountains',
            author: 'Barrel Cacti',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Barrel+Cacti+-+Mountains+-+07+Light+in+the+Mountains.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Mountains/Mountains+Album+Cover+Compressed.jpg'
        }
    ]
});
});

$('#album26').on('shown.bs.modal', function(e) {
    
    var ap26 = new APlayer({
    element: document.getElementById('player26'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Tell Me',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/Eyesack+Moseberg+-+It+Starts+Now+-+01+Tell+Me.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/itStartsNowAlbumCoverCompressed.jpg'
        },
        {
            title: 'Falling for You (feat. Iain Wright)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/Eyesack+Moseberg+-+It+Starts+Now+-+02+Falling+for+You+(feat.+Iain+Wright).mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/itStartsNowAlbumCoverCompressed.jpg'
        },
        {
            title: 'Follow Me',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/Eyesack+Moseberg+-+It+Starts+Now+-+03+Follow+Me.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/itStartsNowAlbumCoverCompressed.jpg'
        },
        {
            title: 'Jump',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/Eyesack+Moseberg+-+It+Starts+Now+-+04+Jump.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/itStartsNowAlbumCoverCompressed.jpg'
        },
        {
            title: 'Running',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/Eyesack+Moseberg+-+It+Starts+Now+-+05+Running.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/itStartsNowAlbumCoverCompressed.jpg'
        },
        {
            title: 'Gonna Be Alright',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/Eyesack+Moseberg+-+It+Starts+Now+-+06+Gonna+Be+Alright.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/It+Starts+Now/itStartsNowAlbumCoverCompressed.jpg'
        }
    ]
});
});

$('#album27').on('shown.bs.modal', function(e) {
    
    var ap27 = new APlayer({
    element: document.getElementById('player27'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Lost Control',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/Eyesack+Moseberg+-+Selling+Lies+-+01+Lost+Control.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/cover.jpg'
        },
        {
            title: 'Burn it Down',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/Eyesack+Moseberg+-+Selling+Lies+-+02+Burn+It+Down.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/cover.jpg'
        },
        {
            title: 'Celestial Navigation',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/Eyesack+Moseberg+-+Selling+Lies+-+03+Celestial+Navigation.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/cover.jpg'
        },
        {
            title: 'Almost',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/Eyesack+Moseberg+-+Selling+Lies+-+04+Almost.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/cover.jpg'
        },
        {
            title: 'The Pull',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/Eyesack+Moseberg+-+Selling+Lies+-+05+The+Pull.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/cover.jpg'
        },
        {
            title: 'No More Surprises (Feat. Trevor Silva)',
            author: 'Eyesack Moseberg',
            url: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/Eyesack+Moseberg+-+Selling+Lies+-+06+No+More+Surprises.mp3',
            pic: 'https://s3.amazonaws.com/isaacmosebrook/Selling+Lies/cover.jpg'
        }
    ]
});
});

$('#album28').on('shown.bs.modal', function(e) {
    
    var ap28 = new APlayer({
    element: document.getElementById('player28'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Royal Jelly',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/escape/Eyesack+Moseberg+-+Escape+-+01+Royal+Jelly.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/escape/escape_cover.jpg'
        },
        {
            title: 'Got Me Movin\'',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/escape/Eyesack+Moseberg+-+Escape+-+02+Got+Me+Movin\'.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/escape/escape_cover.jpg'
        },
        {
            title: 'Quicksand Tendencies',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/escape/Eyesack+Moseberg+-+Escape+-+03+Quicksand+Tendencies.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/escape/escape_cover.jpg'
        },
        {
            title: 'Stolen Turbojet Antimatter Spaceship (Feat. Trevor Silva)',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/escape/Eyesack+Moseberg+-+Escape+-+04+Stolen+Turbojet+Antimatter+Spaceship.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/escape/escape_cover.jpg'
        }
    ]
});
});

$('#album29').on('shown.bs.modal', function(e) {
    
    var ap29 = new APlayer({
    element: document.getElementById('player29'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Indestructible',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+01+Indestructible+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'In the Clouds',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+02+In+the+Clouds+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Drop My Heart',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+03+Drop+My+Heart+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Murder Hornets (feat. Trevor Silva)',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+04+Murder+Hornets+(feat.+Iain+Wright+%26+Trevor+Silva).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Waves (feat. Trevor Silva)',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+05+Waves+(feat.+Iain+Wright+%26+Trevor+Silva).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Blank Page',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+06+Blank+Page+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Something to Hold on To',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+07+Something+to+Hold+on+To+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Three Steps Ahead',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+08+Three+Steps+Ahead+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Bad News',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+09+Bad+News.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        },
        {
            title: 'Supernova',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/Eyesack+Moseberg+-+The+Wavering+Path+-+10+Supernova+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/the-wavering-path/the-wavering-path-cover.jpg'
        }
    ]
});
});

$('#album30').on('shown.bs.modal', function(e) {
    
    var ap30 = new APlayer({
    element: document.getElementById('player30'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Everything and More',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Everything+and+More/Eyesack+Moseberg+-+Everything+and+More+(feat.+Iain+Wright).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Everything+and+More/Everything+and+More+Cover.jpg'
        }
    ]
});
});

$('#album31').on('shown.bs.modal', function(e) {
    
    var ap31 = new APlayer({
    element: document.getElementById('player31'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    mode: 'order',
    listmaxheight: '250px',   
    music: [
        {
            title: 'Ransacked',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+01+Ransacked.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
		{
            title: 'Adonis (Feat. Trevor Silva)',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+02+Adonis+(Feat.+Trevor+Silva).mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'Delusions',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+03+Delusions.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'The Cobra Maneuver',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+04+The+Cobra+Maneuver.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'Impossible',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+05+Impossible.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'Riptide',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+06+Riptide.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'The Contract',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+07+The+Contract.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'Quantum Conspiracy',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+08+Quantum+Conspiracy.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        },
        {
            title: 'Heavy',
            author: 'Eyesack Moseberg',
            url: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/Eyesack+Moseberg+-+Hypno-Tigers!+-+09+Heavy.mp3',
            pic: 'https://isaacmosebrook.s3.amazonaws.com/Hypno-Tigers!/hypno-tigers-cover-compressed.jpg'
        }
    ]
});
});