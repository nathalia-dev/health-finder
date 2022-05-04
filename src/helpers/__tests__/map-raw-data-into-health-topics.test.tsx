import mapRawDataIntoHealthTopic from '../mapRawDataIntoHealthTopic'
import {mockDataForHealthTopics, expectedFunctionResultForHealthTopics} from '../__fixtures__/mockDataForTests'

describe("#mapRawDataIntoHealthTopic", function () {
    it("returns an array", function () {
      expect(Array.isArray(mapRawDataIntoHealthTopic(mockDataForHealthTopics))).toEqual(true)
    });

    it("returns an array of objects with: id, title, categories, image (an object with imageUrland, imageAlt), relatedItem (an object with id, title and url), sections(an object with id, title and content)", function () {
        
        jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

        expect(mapRawDataIntoHealthTopic(mockDataForHealthTopics)).toEqual(expectedFunctionResultForHealthTopics)
      });
  
})  