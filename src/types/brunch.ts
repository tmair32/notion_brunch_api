export interface Return {
  desc: string;
  code: number;
  title: string;
  extra: string;
  data: {
    list: Article[];
  };
}

export interface Article {
  id: string;
  version: string;
  no: number;
  userId: string;
  userName: string;
  status: string;
  magazineNo: number;
  magazineAddress: string;
  magazineAddressUri: string;
  magazineArticleId: number;
  magazineTitle: string;
  magazineStatus: string;
  magazineType: string;
  magazineCoverImage: string;
  commentWritable: boolean;
  commentCount: number;
  likeCount: number;
  title: string;
  subTitle: string;
  contentSummary: string;
  contentHash: string;
  authorComment: string;
  createTime: number;
  updateTime: number;
  publishTime: number;
  publishTimestamp: number;
  restrictTime: string;
  content: string;
  profileId: string;
  coverInfo: string;
  articleImageList: ArticleImage[];
  socialShareTotalCount: number;
  coverColor: string;
  articleKeywords: string;
  readSeconds: number;
  fromTime: string;
  toTime: string;
  orderBy: string;
  chapterNo: number;
  seq: number;
  tempBrunchbookNo: number;
  tempBrunchbookTitle: string;
  tempBrunchbookStatus: string;
  tempBrunchbookAddress: string;
  readTime: number;
  flattenedSeq: number;
  viewCount: number;
  kakaoShareCount: number;
  kakaoTalkShareCount: number;
  facebookShareCount: number;
  twitterShareCount: number;
  contentIdParam: string;
  homeDataSourceType: string;
  arrivedLikeitCount: number;
  notPublished: boolean;
  articleImageForHome: string;
  articleKeywordNameAsCsv: string;
  published: boolean;
  magazineArticle: boolean;
  contentId: string;
  articleCoverColorForHome: string;
  articleImageListForHome: ArticleImage[];
  notEmptyTitle: boolean;
  articleImageForDiscover: string;
  pick: boolean;
  articleKeywordNoAsCsv: string;
  nonMagazineArticle: boolean;
}

interface ArticleImage {
  type: string;
  userId: string;
  articleNo: number;
  order: number;
  url: string;
  width: number;
  height: number;
  magazineNoList: string;
  magazineNo: string;
}
