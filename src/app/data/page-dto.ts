import {CardDto} from './card-dto';
import {TopicDto} from './topic-dto';

export interface PageDto {
  header: string,
  body: string,
  image: string,

  cards?: CardDto[],
  topics?: TopicDto[],

  listItems?: string[],
  listImage?: string,
}
