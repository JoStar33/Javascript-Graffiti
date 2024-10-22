type SocialStrategyTypes = "kakao" | "apple" | "facebook";

interface SocialRequestBody {}

interface SocialStrategyObject {
  koText: string;
  isCurrentSocialType: boolean;
}

const OAuth = {
  signUp: (type: SocialStrategyTypes) => fetch(""),
};

const currentSocialStrategy = (
  socialType: SocialStrategyTypes
): Record<SocialStrategyTypes, SocialStrategyObject> => ({
  kakao: {
    koText: "카카오",
    isCurrentSocialType: socialType === "kakao",
  },
  apple: {
    koText: "애플",
    isCurrentSocialType: socialType === "apple",
  },
  facebook: {
    koText: "페이스북",
    isCurrentSocialType: socialType === "facebook",
  },
});

const useSocialLoginHelper = async (strategyType: SocialStrategyTypes) => {
  const socialStrategy = currentSocialStrategy(strategyType)[strategyType];
  console.log(socialStrategy.koText);
  try {
    const response = await OAuth.signUp(strategyType);
  } catch (error) {
    alert(error);
  }
};
