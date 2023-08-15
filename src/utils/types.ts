import { RouteProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Search: undefined;
  FavouriteList: undefined;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'FavouriteList'>;
