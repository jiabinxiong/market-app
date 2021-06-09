import { homeReducer } from './home/home.reducer';
import {signReducers}   from "./login/login.reducer";
import { likeReducer } from "./shared/shared.reducer";
import { userInfoReducer, configUserBackgroundAvatarReducer, userInfoCopyModifyReducer, configUserInfoSaveReducer,
    configUserInfoNavNavigationReducer,
} from './user/userInfo.reducer';
import { modelShowSelectFooterReducer, dateTimePickerShowReducer, genderPickerShowReducer, popShowReducer, popWarningConfigUserInfoBackReducer  } from './common/common.reducer';

import { publishSelectImgReducer, publishSelectedIndexImgReducer, publishSelectedImgHowManyReducer, publishModifyTabReducer } from './publish/publish.reducer';

export {
    likeReducer,
    homeReducer,
    signReducers,
    modelShowSelectFooterReducer, dateTimePickerShowReducer, genderPickerShowReducer, configUserInfoSaveReducer, configUserInfoNavNavigationReducer,
    userInfoReducer, configUserBackgroundAvatarReducer, userInfoCopyModifyReducer, popShowReducer, popWarningConfigUserInfoBackReducer,
    publishSelectImgReducer, publishSelectedIndexImgReducer, publishSelectedImgHowManyReducer, publishModifyTabReducer
}
