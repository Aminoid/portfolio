export const projects = [
  {
    "key": "Full Stack Development",
    "list": [
      {
        "name": "Wheatley",
        "description": "A Pre-Pub Automation Tool for Laboratory of Analytical Sciences",
        "technologies": ["Flask", "AngularJS", "MySQL"],
        "link": "https://las-prepub.oscar.ncsu.edu/#/",
        "organisation": "Laboratory of Analytical Sciences, NC State University"
      },
      {
        "name": "My Dementia Village",
        "description": `
          Worked on the development of a sharing network for
          dementia-friendly community builders, and dementia-caregivers
        `,
        "technologies": ["Flask", "AngularJS", "Karma Build Tools", "MongoDB"],
        "link": "https://mydementiavillage.com/",
        "organisation": "AlzCare Labs, Palo Alto (CA)"
      },
      {
        "name": "Glados",
        "description": `
          MEAN Stack application to keep track of controllers/switches for my team in
          Aruba Networks
        `,
        "technologies": ["NodeJS", "AngularJS", "MongoDB"],
        "link": "https://github.com/Aminoid/glados",
        "organisation": "Aruba Networks, Bangalore (IN)"
      }
    ]
  }, {
    "key": "Mobile App Development",
    "list": [
      {
        "name": "Carbon Footprint",
        "description": `
          Mobile app for both iOS and Android to keep track of Real Time User Activities,
          calculate the Carbon Footprint based on that and share it among friends
        `,
        "technologies": ["React Native", "React", "Redux", "Jest", "Firebase"],
        "link": "https://gitlab.com/aossie/CarbonFootprint-Mobile",
        "organisation": "AOSSIE Foundation, Google Summer of Code, 2017"
      },
      {
        "name": "PreSafe",
        "description": `
          Mobile App for the device that goes with your loved one with dementia,
          and signals you whenever that person is at risk for the most common causes of injury
          for people with dementia
        `,
        "technologies": ["React Native", "Redux", "Jest", "Detox", "Continuous Integration"],
        "link": "https://alzcarelabs.com/product.html",
        "organisation": "AlzCare Labs, Palo Alto (CA)"
      }
    ]
  }, {
    "key": "Machine Learning",
    "list": [
      {
        "name": "The Nature Conservancy Fisheries Monitoring",
        "description": `
          Kaggle Competition to classify species of fish in the images.
          Used Keras InceptionV3 model with weights trained on ImageNet and
          a bag-of-visual words approach (SIFT + KMeans + KNN).
        `,
        "technologies": ["Keras", "CNN", "SIFT", "KMeans", "KNN", "Python"],
        "link": "https://github.ncsu.edu/achoudh3/The-Nature-Conservancy-Fisheries-Monitoring",
      },
      {
        "name": "Quora Question Pairs",
        "description": `
          Kaggle Competition to create a ML model as an improvement upon Quora’s algorithm to
          identify questions with same intent.
        `,
        "technologies": ["Decision Trees", "Naive Bayes", "TF-IDF Similarity", "Random Forests",
                         "Logistic Regression", "Ensemble", "Python"],
        "link": "https://github.ncsu.edu/akanwar2/quora-question-pairs",
      },
      {
        "name": "Twitter Sentiment Analysis using Kafka and Apache Spark",
        "description": `
          Processed live twitter stream using Kafka and Apache Spark and did basic sentiment
          analysis on it.
        `,
        "technologies": ["Kafka", "Spark", "Sentiment Analysis"],
        "link": "https://github.ncsu.edu/akanwar2/DataScience",
      },
      {
        "name": "Music Recommender Systems",
        "description": `
          A Recommender System that will recommend new musical artists to a user based on their
          musical history. Used a pre-cleaned dataset and implemented ALS and DeepWalk using Python
        `,
        "technologies": ["Recommender Systems", "ALS", "DeepWalk"],
        "link": "https://github.ncsu.edu/akanwar2/DataScience",
      },
      {
        "name": "SCREAM",
        "description": `
          Independent Study on the design of a new Community Detection Algorithm SCREAM.
        `,
        "technologies": ["Community Detection", "Web Crawling", "Twitter Data Mining"],
        "link": ""
      }
    ]
  }, {
    "key": "DevOps",
    "list": [
      {
        "name": "Garfield",
        "description": `
           Data pipeline which streams a large number of news articles through AWS Kinesis
           (2000/min), uses AWS Lambda to classify using an ML model while indexing and storing them
           into AWS ElasticSearch and AWS S3
        `,
        "technologies": ["AWS", "Kinesis", "AWS Lambda", "AWS ElasticSearch", "AWS S3"],
        "link": "https://github.com/Aminoid/garfield",
      },
      {
        "name": "Nightly-Build",
        "description": `
          Automated the process of debugging ArubaOS 6.0 by pulling latest builds from Jenkins,
          building it, and sending the status to my team in Aruba Networks.
        `,
        "technologies": ["Jenkins", "Web Crawling", "Python", "Bash"],
        "link": "",
        "organisation": "Aruba Networks, Bangalore (IN)"
      }
    ]
  }, {
    "key": "Open Source",
    "list": [
      {
        "name": "react-native-activity-recognition",
        "description": `
          Ports Android Activity Manager and iOS CMMotionManager to react-native
        `,
        "technologies": ["React-Native", "Java", "Objective-C"],
        "link": "https://www.npmjs.com/package/react-native-activity-recognition",
        "organisation": "AOSSIE Foundation, Google Summer of Code, 2017"
      },
      {
        "name": "expertiza",
        "description": `
          Developed a student view and a supplementary questionnaire for expertiza development
        `,
        "technologies": ["Ruby", "Ruby on Rails"],
        "link": "https://github.com/expertiza/expertiza",
      }, {
        "name": "YouTubePlaylistDownloader",
        "description": `
          Downloads youtube playlists via CLI
        `,
        "technologies": ["Python", "YouTube API", "PyTube"],
        "link": "https://github.com/Aminoid/Python_Utilities",
        "organisation": "Personal"
      }
    ]
  }, {
    "key": "Operating Systems",
    "list": [
      {
        "name": "Secure Key Value File System",
        "description": `
          Developed a secure key value pair file system like Google FS.
        `,
        "technologies": ["C", "OS", "File Systems"],
        "link": "https://github.ncsu.edu/akanwar2/SFS",
      }
    ]
  }
]
