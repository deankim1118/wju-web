import { TextWithImageContent } from './home-content';

export type TwoColumnTextContent = {
  title: string;
  content: string;
  spacing: 'tight' | 'normal' | 'loose';
};

export const aboutChairmanPageContent: TwoColumnTextContent = {
  title: 'Equipping Leaders for Faithful Ministry',
  content:
    'Since 2014, Washington Jabez University has been dedicated to training the next generation of pastors and missionaries through Christ-centered theological education',
  spacing: 'loose',
};

/**
 * A Word from Chairman of the Board
 */
export const aWordChairmanContent: TextWithImageContent = {
  title: 'A Word from Chairman of the Board',
  subtitle: `Our mission is to equip biblically-grounded pastors, missionaries, and lay leaders to be faithful servants for God's harvest.`,
  description: `Just as Jesus equipped His disciples for the Gospel, Washington Jabez University (WJU) is established to raise up leaders characterized by the Bible, holiness, prayer, and evangelism. Our deeply committed faculty is dedicated to teaching and training students for this high calling.

Our vision is focused on three objectives: training missionary, pastoral, and lay leaders. Through excellent undergraduate and graduate programs, we instill the intellectual and spiritual strength necessary for effective ministry, just as the Lord provided for His disciples.

We pray that God will produce powerful leaders through WJU, for as Jesus taught, “The harvest is plentiful, but the laborers are few.” If God has providentially called you to WJU, you have made the right choice. We are committed to doing our best to help you fulfill your mission in Christ.`,
  imageUrl: '/wju-hero-img.png',
  imageAlt: 'Washington Jabez University Campus',
};

/**
 * Chairman’s Biography
 */
export const chairmanBiographyContent: TextWithImageContent = {
  title: 'Chairman’s Biography',
  subtitle:
    'Ms Elizabeth Stone brings a wide range of previous experience from both co-educational and single-sex, day and boarding schools in Australia and the UK.',
  description: `Prior to Winchester, she spent nine years as Principal of Queenwood School, Sydney, a leading independent girls’ school with 900 pupils. She was Vice Principal of Cheltenham Ladies’ College from 2012-14 and, immediately before this, she spent three years at Winchester, as a maths teacher and Undermaster.

Elizabeth was educated at Ascham School and has undergraduate degrees from the University of New South Wales, where she studied Maths, German and Law. At Oxford University she studied as a Rhodes Scholar and completed a master’s degree at University College. She worked at the Supreme Court of New South Wales and held an academic appointment at the University of New South Wales Faculty of Law, one of Australia’s leading law schools, where she specialised in commercial contract law before commencing her teaching career.`,
  imageUrl: '/wju-hero-img.png',
  imageAlt: 'Washington Jabez University Campus',
};
