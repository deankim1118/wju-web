import { TextWithImageContent } from './home-content';

export type TwoColumnTextContent = {
  title: string;
  content: string;
  spacing: 'tight' | 'normal' | 'loose';
};
/**
 * About / A word from Chairman
 */
export const aboutChairmanPageContent: TwoColumnTextContent = {
  content: 'Equipping Leaders for Faithful Ministry',
  title: `"If God has called you here, you are in the right place. We are ready to walk this path with you."`,
  spacing: 'loose',
};

/**
 * A Word from Chairman of the Board
 */
export const aWordChairmanContent: TextWithImageContent = {
  title: 'A Word from Chairman of the Board',
  subtitle: `Washington Jabez University is dedicated to raising up men and women of holiness, prayer, and evangelism through missionary, pastoral, and lay leadership training`,
  description: `Jesus selected His disciples and equipped them in a special way to become workers of the Gospel. Following this example, Washington Jabez University (WJU) was established to raise up men and women of God characterized by biblical truth, holiness, prayer, and evangelism. Our competent faculty is totally dedicated to teaching and training theological students with deep commitment.

With this vision in mind, WJU focuses on three core objectives: missionary leadership, pastoral leadership, and lay leadership training. To achieve these goals, we offer excellent undergraduate and graduate programs designed to develop moral character and instill the intellectual and spiritual power necessary for ministry, just as the Lord provided for His disciples.`,
  imageUrl: '/wju-hero-img.png',
  imageAlt: 'Washington Jabez University Chairman of the Board',
  author: `Kwangsung Park, Ph.D.`,
  authorTitle: `Chairman of the Board`,
};

/**
 * Chairman’s Biography
 */
export const prayerContent: TextWithImageContent = {
  title: 'A Prayer for the Harvest',
  subtitle:
    'We pray that God raises up powerful leaders to change the world, and we pledge our utmost support to help you fulfill your mission in Christ.',
  description: `My prayer is that God blesses this university to produce not only faithful servants for His Kingdom but also effective, powerful leaders who can change the world. We hold to the spirit of prayer that Jesus taught His disciples: 'The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest' (Matthew 9:37-38).

If God has providentially directed you to apply to Washington Jabez University, you have made the right choice. You have our word that we will surely do our best to assist you in fulfilling your mission in Christ.`,
  imageUrl: '/wju-hero-img.png',
  imageAlt: 'Washington Jabez University Campus',
};

/**
 * About / Mission & Faith
 */

export const aboutOurVisionContent: TwoColumnTextContent = {
  title: `Our Vision`,
  content: 'We envision a world where our graduates lead with biblical wisdom and Christ-like character, transforming their communities for the glory of God.',
  spacing: 'tight',
};

export const aboutOurMissionContent: TextWithImageContent = {
  title: `Our Mission`,
  description: `Our mission is to educate students in the fullness of life in Christ, developing them intellectually through rigorous academics that foster curiosity and a passion for service. We offer bachelor's and master's programs in fields including Theology and Divinity.

We endeavor to develop our students spiritually, personally, and professionally to understand and live out the truth of the Gospel. Utilizing modern teaching methodologies, we prepare effective Christian leaders for our society. Beyond academics, our students are encouraged to become well-rounded individuals who possess moral character, hold ethical values, and take responsibility in all things.`,
imageUrl: '/wju-hero-img.png',
imageAlt: 'Washington Jabez University Campus',
};


/**
 * About /  Institutional Integrity
 */

export const aboutIntegritynContent: TwoColumnTextContent = {
  title: `Our Commitment to Integrity`,
  content: `Washington Jabez University is dedicated to the highest standards of ethics and accountability in all operations. This Code of Conduct reflects our commitment to honoring Christ through responsible stewardship and transparent practices. It serves as a guide for our directors, faculty, and staff to ensure our community is built on a foundation of trust.`,
  spacing: 'tight',
};
