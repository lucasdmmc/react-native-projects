export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: {
        name: string;
        description?: string;
        date: string;
        hour: string;
        diet: boolean;
      }
      new: undefined;
      meal: {
        name: string;
        description: string;
        date: string;
        hour: string;
        diet: boolean
      };
      statistics: undefined;
      feedback: {
        diet: boolean;
      }
      edit: undefined;
    }
  }
}