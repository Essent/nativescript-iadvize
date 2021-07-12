/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class AuthenticateVisitorAnonymouslyMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data,com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data,com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data>;
					public variables(): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Variables;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data>;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data>;
					public constructor(param0: java.lang.Integer, param1: com.apollographql.apollo.api.Input<string>);
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data>;
					public static builder(): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Builder;
					public operationId(): string;
					public wrapData(param0: com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module AuthenticateVisitorAnonymouslyMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Builder>;
						public projectId(param0: java.lang.Integer): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Builder;
						public build(): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation;
						public vuidInput(param0: com.apollographql.apollo.api.Input<string>): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Builder;
						public vuid(param0: string): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public visitorAuthenticateAnonymously(): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorAuthenticateAnonymously;
						public constructor(param0: com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorAuthenticateAnonymously);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Data;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.Variables>;
						public vuid(): com.apollographql.apollo.api.Input<string>;
						public projectId(): java.lang.Integer;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public valueMap(): java.util.Map<string,any>;
					}
					export class VisitorAuthenticateAnonymously {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorAuthenticateAnonymously>;
						public __typename(): string;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorSessionToken);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public visitorSessionToken(): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorSessionToken;
						public toString(): string;
					}
					export module VisitorAuthenticateAnonymously {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorAuthenticateAnonymously> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorAuthenticateAnonymously.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorAuthenticateAnonymously;
						}
					}
					export class VisitorSessionToken {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorSessionToken>;
						public accessToken(): string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module VisitorSessionToken {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorSessionToken> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorSessionToken.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.AuthenticateVisitorAnonymouslyMutation.VisitorSessionToken;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class AuthenticateVisitorFromCustomerUserIdMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data,com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data,com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public variables(): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Variables;
					public constructor(param0: java.lang.Integer, param1: string);
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data>;
					public queryDocument(): string;
					public static builder(): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Builder;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data>;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data>;
					public operationId(): string;
					public wrapData(param0: com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module AuthenticateVisitorFromCustomerUserIdMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Builder>;
						public build(): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation;
						public projectId(param0: java.lang.Integer): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Builder;
						public userId(param0: string): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorAuthenticateFromCustomerUserId);
						public visitorAuthenticateFromCustomerUserId(): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorAuthenticateFromCustomerUserId;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Data;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.Variables>;
						public projectId(): java.lang.Integer;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public userId(): string;
						public valueMap(): java.util.Map<string,any>;
					}
					export class VisitorAuthenticateFromCustomerUserId {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorAuthenticateFromCustomerUserId>;
						public __typename(): string;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorSessionToken);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public visitorSessionToken(): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorSessionToken;
						public toString(): string;
					}
					export module VisitorAuthenticateFromCustomerUserId {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorAuthenticateFromCustomerUserId> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorAuthenticateFromCustomerUserId.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorAuthenticateFromCustomerUserId;
						}
					}
					export class VisitorSessionToken {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorSessionToken>;
						public accessToken(): string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module VisitorSessionToken {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorSessionToken> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorSessionToken.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.AuthenticateVisitorFromCustomerUserIdMutation.VisitorSessionToken;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class BuildConfig {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static IADVIZE_GRAPHQL_ENDPOINT: string;
					public static IADVIZE_GRAYLOG_ENDPOINT: string;
					public static IADVIZE_XMPP_HOST: string;
					public static IADVIZE_XMPP_MUC_HOST: string;
					public static IADVIZE_XMPP_PORT: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class CreateConversationMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.CreateConversationMutation.Data,com.iadvize.conversation.sdk.CreateConversationMutation.Data,com.iadvize.conversation.sdk.CreateConversationMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.CreateConversationMutation.Data>;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.CreateConversationMutation.Data>;
					public static builder(): com.iadvize.conversation.sdk.CreateConversationMutation.Builder;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.CreateConversationMutation.Data>;
					public queryDocument(): string;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.CreateConversationMutation.Data>;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.CreateConversationMutation.Data>;
					public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
					public operationId(): string;
					public wrapData(param0: com.iadvize.conversation.sdk.CreateConversationMutation.Data): com.iadvize.conversation.sdk.CreateConversationMutation.Data;
					public variables(): com.iadvize.conversation.sdk.CreateConversationMutation.Variables;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module CreateConversationMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.Builder>;
						public build(): com.iadvize.conversation.sdk.CreateConversationMutation;
						public targetingRuleId(param0: java.util.UUID): com.iadvize.conversation.sdk.CreateConversationMutation.Builder;
						public language(param0: com.iadvize.conversation.sdk.type.Language): com.iadvize.conversation.sdk.CreateConversationMutation.Builder;
					}
					export class Conversation {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.Conversation>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public id(): java.util.UUID;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: java.util.UUID);
						public toString(): string;
					}
					export module Conversation {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.CreateConversationMutation.Conversation> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.Conversation.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.CreateConversationMutation.Conversation;
						}
					}
					export class ConversationCreate {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.ConversationCreate>;
						public __typename(): string;
						public conversation(): com.iadvize.conversation.sdk.CreateConversationMutation.Conversation;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.CreateConversationMutation.Conversation);
						public toString(): string;
					}
					export module ConversationCreate {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.CreateConversationMutation.ConversationCreate> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.ConversationCreate.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.CreateConversationMutation.ConversationCreate;
						}
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.CreateConversationMutation.ConversationCreate);
						public conversationCreate(): com.iadvize.conversation.sdk.CreateConversationMutation.ConversationCreate;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.CreateConversationMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.CreateConversationMutation.Data;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateConversationMutation.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public targetingRuleId(): java.util.UUID;
						public language(): com.iadvize.conversation.sdk.type.Language;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class DisablePushTokenMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data,com.iadvize.conversation.sdk.DisablePushTokenMutation.Data,com.iadvize.conversation.sdk.DisablePushTokenMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public variables(): com.iadvize.conversation.sdk.DisablePushTokenMutation.Variables;
					public operationId(): string;
					public wrapData(param0: com.iadvize.conversation.sdk.DisablePushTokenMutation.Data): com.iadvize.conversation.sdk.DisablePushTokenMutation.Data;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
					public static builder(): com.iadvize.conversation.sdk.DisablePushTokenMutation.Builder;
					public name(): com.apollographql.apollo.api.OperationName;
					public constructor(param0: string, param1: com.iadvize.conversation.sdk.type.MobileDevicePlatform);
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module DisablePushTokenMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.Builder>;
						public pushToken(param0: string): com.iadvize.conversation.sdk.DisablePushTokenMutation.Builder;
						public build(): com.iadvize.conversation.sdk.DisablePushTokenMutation;
						public platform(param0: com.iadvize.conversation.sdk.type.MobileDevicePlatform): com.iadvize.conversation.sdk.DisablePushTokenMutation.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public sdkMobilePushTokenDisable(): com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.DisablePushTokenMutation.Data;
						}
					}
					export class SdkMobilePushTokenDisable {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable>;
						public appId(): string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module SdkMobilePushTokenDisable {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.Variables>;
						public platform(): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public pushToken(): string;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class EnablePushTokenMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data,com.iadvize.conversation.sdk.EnablePushTokenMutation.Data,com.iadvize.conversation.sdk.EnablePushTokenMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
					public static builder(): com.iadvize.conversation.sdk.EnablePushTokenMutation.Builder;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public operationId(): string;
					public wrapData(param0: com.iadvize.conversation.sdk.EnablePushTokenMutation.Data): com.iadvize.conversation.sdk.EnablePushTokenMutation.Data;
					public variables(): com.iadvize.conversation.sdk.EnablePushTokenMutation.Variables;
					public name(): com.apollographql.apollo.api.OperationName;
					public constructor(param0: string, param1: com.iadvize.conversation.sdk.type.MobileDevicePlatform);
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module EnablePushTokenMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.Builder>;
						public platform(param0: com.iadvize.conversation.sdk.type.MobileDevicePlatform): com.iadvize.conversation.sdk.EnablePushTokenMutation.Builder;
						public build(): com.iadvize.conversation.sdk.EnablePushTokenMutation;
						public pushToken(param0: string): com.iadvize.conversation.sdk.EnablePushTokenMutation.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
						public sdkMobilePushTokenEnable(): com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.EnablePushTokenMutation.Data;
						}
					}
					export class SdkMobilePushTokenEnable {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable>;
						public appId(): string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module SdkMobilePushTokenEnable {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.Variables>;
						public platform(): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public pushToken(): string;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class GetConversationQuery extends com.apollographql.apollo.api.Query<com.iadvize.conversation.sdk.GetConversationQuery.Data,com.iadvize.conversation.sdk.GetConversationQuery.Data,com.iadvize.conversation.sdk.GetConversationQuery.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
					public queryDocument(): string;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public variables(): com.iadvize.conversation.sdk.GetConversationQuery.Variables;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
					public static builder(): com.iadvize.conversation.sdk.GetConversationQuery.Builder;
					public wrapData(param0: com.iadvize.conversation.sdk.GetConversationQuery.Data): com.iadvize.conversation.sdk.GetConversationQuery.Data;
					public operationId(): string;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public constructor(param0: java.util.UUID);
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module GetConversationQuery {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Builder>;
						public build(): com.iadvize.conversation.sdk.GetConversationQuery;
						public id(param0: java.util.UUID): com.iadvize.conversation.sdk.GetConversationQuery.Builder;
					}
					export class Conversation {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Conversation>;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.GetConversationQuery.Messages);
						public __typename(): string;
						public messages(): com.iadvize.conversation.sdk.GetConversationQuery.Messages;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module Conversation {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Conversation> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Conversation.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetConversationQuery.Conversation;
						}
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
						public conversation(): com.iadvize.conversation.sdk.GetConversationQuery.Conversation;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: com.iadvize.conversation.sdk.GetConversationQuery.Conversation);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetConversationQuery.Data;
						}
					}
					export class Edge {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Edge>;
						public constructor(param0: string, param1: string, param2: com.iadvize.conversation.sdk.GetConversationQuery.Node);
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public node(): com.iadvize.conversation.sdk.GetConversationQuery.Node;
						public cursor(): string;
						public toString(): string;
					}
					export module Edge {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Edge> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Edge.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetConversationQuery.Edge;
						}
					}
					export class Messages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Messages>;
						public edges(): java.util.List<com.iadvize.conversation.sdk.GetConversationQuery.Edge>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.sdk.GetConversationQuery.Edge>);
					}
					export module Messages {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Messages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Messages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetConversationQuery.Messages;
						}
					}
					export class Node {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Node>;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.GetConversationQuery.Node.Fragments);
						public __typename(): string;
						public fragments(): com.iadvize.conversation.sdk.GetConversationQuery.Node.Fragments;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module Node {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Node.Fragments>;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationMessage);
							public toString(): string;
							public conversationMessage(): com.iadvize.conversation.sdk.fragment.ConversationMessage;
							public equals(param0: any): boolean;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Node.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Node.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetConversationQuery.Node.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetConversationQuery.Node> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Node.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetConversationQuery.Node;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public id(): java.util.UUID;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class GetGDPRConsentQuery extends com.apollographql.apollo.api.Query<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data,com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data,com.apollographql.apollo.api.Operation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public wrapData(param0: com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data): com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public variables(): com.apollographql.apollo.api.Operation.Variables;
					public static builder(): com.iadvize.conversation.sdk.GetGDPRConsentQuery.Builder;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
					public constructor();
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
					public operationId(): string;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module GetGDPRConsentQuery {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Builder>;
						public build(): com.iadvize.conversation.sdk.GetGDPRConsentQuery;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public sdkVisitorConsent(): com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data;
						}
					}
					export class SdkVisitorConsent {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent>;
						public __typename(): string;
						public consent(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string, param1: boolean);
					}
					export module SdkVisitorConsent {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class GetUploadUrlsQuery extends com.apollographql.apollo.api.Query<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data,com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data,com.iadvize.conversation.sdk.GetUploadUrlsQuery.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public constructor(param0: string);
					public static builder(): com.iadvize.conversation.sdk.GetUploadUrlsQuery.Builder;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
					public variables(): com.iadvize.conversation.sdk.GetUploadUrlsQuery.Variables;
					public wrapData(param0: com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data): com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data;
					public queryDocument(): string;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
					public operationId(): string;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module GetUploadUrlsQuery {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Builder>;
						public build(): com.iadvize.conversation.sdk.GetUploadUrlsQuery;
						public contentType(param0: string): com.iadvize.conversation.sdk.GetUploadUrlsQuery.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public sdkUploadUrls(): com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data;
						}
					}
					export class SdkUploadUrls {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls>;
						public __typename(): string;
						public constructor(param0: string, param1: string, param2: string);
						public writeUrl(): string;
						public readUrl(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module SdkUploadUrls {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public contentType(): string;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class IAdvizeSDK {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK>;
					public static INSTANCE: com.iadvize.conversation.sdk.IAdvizeSDK;
					public getChatboxController(): com.iadvize.conversation.sdk.controller.chatbox.ChatboxController;
					public getConversationControllerImpl$sdk_haRelease(): com.iadvize.conversation.sdk.controller.conversation.ConversationSDKControllerImpl;
					public static activate(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption, param2: com.iadvize.conversation.sdk.model.gdpr.GDPROption): void;
					public getConversationController(): com.iadvize.conversation.sdk.controller.conversation.ConversationController;
					public static setLogLevel(param0: com.iadvize.conversation.sdk.utils.logger.Logger.Level): void;
					public getChatboxControllerImpl$sdk_haRelease(): com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKControllerImpl;
					public static activate(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption): void;
					public getNotificationControllerImpl$sdk_haRelease(): com.iadvize.conversation.sdk.controller.notification.NotificationSDKControllerImpl;
					public getActivationStatus$sdk_haRelease(): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
					public static logout(): void;
					public getGraphQLApi$sdk_haRelease(): com.iadvize.conversation.sdk.model.graphql.GraphQLApi;
					public static initiate(param0: globalAndroid.app.Application): void;
					public getTargetingController(): com.iadvize.conversation.sdk.controller.targeting.TargetingController;
					public getTransactionControllerImpl$sdk_haRelease(): com.iadvize.conversation.sdk.controller.transaction.TransactionSDKControllerImpl;
					public getTransactionController(): com.iadvize.conversation.sdk.controller.transaction.TransactionController;
					public getNotificationController(): com.iadvize.conversation.sdk.controller.notification.NotificationController;
					public static activate(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption, param2: com.iadvize.conversation.sdk.model.gdpr.GDPROption, param3: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
					public static getLogLevel(): com.iadvize.conversation.sdk.utils.logger.Logger.Level;
					public getTargetingControllerImpl$sdk_haRelease(): com.iadvize.conversation.sdk.controller.targeting.TargetingSDKControllerImpl;
					public clear$sdk_haRelease(): void;
				}
				export module IAdvizeSDK {
					export class ActivationStatus {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
						public static OFF: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static ACTIVATING: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static ACTIVATED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class OngoingConversationQuery extends com.apollographql.apollo.api.Query<com.iadvize.conversation.sdk.OngoingConversationQuery.Data,com.iadvize.conversation.sdk.OngoingConversationQuery.Data,com.apollographql.apollo.api.Operation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public queryDocument(): string;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public variables(): com.apollographql.apollo.api.Operation.Variables;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
					public constructor();
					public operationId(): string;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
					public static builder(): com.iadvize.conversation.sdk.OngoingConversationQuery.Builder;
					public name(): com.apollographql.apollo.api.OperationName;
					public wrapData(param0: com.iadvize.conversation.sdk.OngoingConversationQuery.Data): com.iadvize.conversation.sdk.OngoingConversationQuery.Data;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module OngoingConversationQuery {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.Builder>;
						public build(): com.iadvize.conversation.sdk.OngoingConversationQuery;
					}
					export class ConversationsVisitorMessages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public ongoingConversation(): com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation);
						public toString(): string;
					}
					export module ConversationsVisitorMessages {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages;
						}
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public conversationsVisitorMessages(): com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages;
						public toString(): string;
						public constructor(param0: com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages);
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.OngoingConversationQuery.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.OngoingConversationQuery.Data;
						}
					}
					export class OngoingConversation {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public id(): java.util.UUID;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: java.util.UUID);
						public toString(): string;
					}
					export module OngoingConversation {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class RegisterConcludedTransactionMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data,com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data,com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
					public static builder(): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Builder;
					public queryDocument(): string;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public constructor(param0: com.iadvize.conversation.sdk.type.SDKTransactionInput);
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
					public operationId(): string;
					public variables(): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Variables;
					public wrapData(param0: com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module RegisterConcludedTransactionMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Builder>;
						public input(param0: com.iadvize.conversation.sdk.type.SDKTransactionInput): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Builder;
						public build(): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister);
						public sdkTransactionConcludedRegister(): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data;
						}
					}
					export class SdkTransactionConcludedRegister {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string);
						public toString(): string;
						public externalTransactionId(): string;
					}
					export module SdkTransactionConcludedRegister {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public input(): com.iadvize.conversation.sdk.type.SDKTransactionInput;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class RegisterPushTokenMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data,com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data,com.iadvize.conversation.sdk.RegisterPushTokenMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public wrapData(param0: com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
					public variables(): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Variables;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public static builder(): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Builder;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
					public operationId(): string;
					public constructor(param0: string, param1: com.iadvize.conversation.sdk.type.MobileDevicePlatform, param2: com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.ApplicationMode>);
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module RegisterPushTokenMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Builder>;
						public modeInput(param0: com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.ApplicationMode>): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Builder;
						public build(): com.iadvize.conversation.sdk.RegisterPushTokenMutation;
						public platform(param0: com.iadvize.conversation.sdk.type.MobileDevicePlatform): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Builder;
						public mode(param0: com.iadvize.conversation.sdk.type.ApplicationMode): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Builder;
						public pushToken(param0: string): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
						public sdkMobilePushTokenRegister(): com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data;
						}
					}
					export class SdkMobilePushTokenRegister {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister>;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public appId(): string;
						public __typename(): string;
						public pushToken(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public externalId(): string;
						public toString(): string;
					}
					export module SdkMobilePushTokenRegister {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Variables>;
						public platform(): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public mode(): com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.ApplicationMode>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public pushToken(): string;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class SendGDRPConsentMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data,com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data,com.iadvize.conversation.sdk.SendGDRPConsentMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
					public variables(): com.iadvize.conversation.sdk.SendGDRPConsentMutation.Variables;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
					public composeRequestBody(): okio.ByteString;
					public constructor(param0: boolean);
					public operationId(): string;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
					public wrapData(param0: com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data): com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public static builder(): com.iadvize.conversation.sdk.SendGDRPConsentMutation.Builder;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module SendGDRPConsentMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Builder>;
						public consent(param0: boolean): com.iadvize.conversation.sdk.SendGDRPConsentMutation.Builder;
						public build(): com.iadvize.conversation.sdk.SendGDRPConsentMutation;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet);
						public sdkVisitorConsentSet(): com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data;
						}
					}
					export class SdkVisitorConsentSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet>;
						public __typename(): string;
						public consent(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string, param1: boolean);
					}
					export module SdkVisitorConsentSet {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public consent(): boolean;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class SetVisitorCustomDataMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data,com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data,com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data>;
					public constructor(param0: java.util.List<com.iadvize.conversation.sdk.type.VisitorCustomDataInput>);
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data>;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data>;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data>;
					public variables(): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Variables;
					public static builder(): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Builder;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data>;
					public wrapData(param0: com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data;
					public operationId(): string;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module SetVisitorCustomDataMutation {
					export class AsVisitorCustomData extends com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomData>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module AsVisitorCustomData {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomData> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomData.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomData;
						}
					}
					export class AsVisitorCustomDataBoolean extends com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataBoolean>;
						public __typename(): string;
						public booleanValue(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public key(): string;
						public constructor(param0: string, param1: string, param2: boolean);
						public toString(): string;
					}
					export module AsVisitorCustomDataBoolean {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataBoolean> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataBoolean.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataBoolean;
						}
					}
					export class AsVisitorCustomDataFloat extends com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataFloat>;
						public __typename(): string;
						public floatValue(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public key(): string;
						public constructor(param0: string, param1: string, param2: number);
						public toString(): string;
					}
					export module AsVisitorCustomDataFloat {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataFloat> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataFloat.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataFloat;
						}
					}
					export class AsVisitorCustomDataInt extends com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataInt>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public key(): string;
						public constructor(param0: string, param1: string, param2: number);
						public intValue(): number;
						public toString(): string;
					}
					export module AsVisitorCustomDataInt {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataInt> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataInt.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataInt;
						}
					}
					export class AsVisitorCustomDataString extends com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataString>;
						public __typename(): string;
						public constructor(param0: string, param1: string, param2: string);
						public stringValue(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public key(): string;
						public toString(): string;
					}
					export module AsVisitorCustomDataString {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataString> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataString.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.AsVisitorCustomDataString;
						}
					}
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Builder>;
						public datas(param0: java.util.List<com.iadvize.conversation.sdk.type.VisitorCustomDataInput>): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Builder;
						public build(): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public sdkVisitorCustomDataSet(): java.util.List<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet>;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: java.util.List<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet>);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Data;
						}
					}
					export class SdkVisitorCustomDataSet {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation.sdk.SetVisitorCustomDataMutation$SdkVisitorCustomDataSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							__typename(): string;
							marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						});
						public constructor();
						public __typename(): string;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
					}
					export module SdkVisitorCustomDataSet {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.SdkVisitorCustomDataSet;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.SetVisitorCustomDataMutation.Variables>;
						public datas(): java.util.List<com.iadvize.conversation.sdk.type.VisitorCustomDataInput>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class TrackEventMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.TrackEventMutation.Data,com.iadvize.conversation.sdk.TrackEventMutation.Data,com.iadvize.conversation.sdk.TrackEventMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TrackEventMutation.Data>;
					public static builder(): com.iadvize.conversation.sdk.TrackEventMutation.Builder;
					public wrapData(param0: com.iadvize.conversation.sdk.TrackEventMutation.Data): com.iadvize.conversation.sdk.TrackEventMutation.Data;
					public variables(): com.iadvize.conversation.sdk.TrackEventMutation.Variables;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public constructor(param0: com.iadvize.conversation.sdk.type.SDKEventInput);
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TrackEventMutation.Data>;
					public operationId(): string;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TrackEventMutation.Data>;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TrackEventMutation.Data>;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TrackEventMutation.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module TrackEventMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation.Builder>;
						public build(): com.iadvize.conversation.sdk.TrackEventMutation;
						public input(param0: com.iadvize.conversation.sdk.type.SDKEventInput): com.iadvize.conversation.sdk.TrackEventMutation.Builder;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.TrackEventMutation.SdkEventTrack);
						public sdkEventTrack(): com.iadvize.conversation.sdk.TrackEventMutation.SdkEventTrack;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TrackEventMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.TrackEventMutation.Data;
						}
					}
					export class SdkEventTrack {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation.SdkEventTrack>;
						public __typename(): string;
						public eventId(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export module SdkEventTrack {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TrackEventMutation.SdkEventTrack> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation.SdkEventTrack.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.TrackEventMutation.SdkEventTrack;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TrackEventMutation.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public input(): com.iadvize.conversation.sdk.type.SDKEventInput;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class TriggerTargetingRuleMutation extends com.apollographql.apollo.api.Mutation<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data,com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data,com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public static builder(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Builder;
					public wrapData(param0: com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
					public queryDocument(): string;
					public variables(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Variables;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: com.iadvize.conversation.sdk.type.Language);
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
					public operationId(): string;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module TriggerTargetingRuleMutation {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Builder>;
						public screenIdentifier(param0: java.util.UUID): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Builder;
						public targetingRuleId(param0: java.util.UUID): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Builder;
						public language(param0: com.iadvize.conversation.sdk.type.Language): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Builder;
						public build(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation;
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
						public targetingRuleTrigger(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data;
						}
					}
					export class TargetingRule {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public id(): java.util.UUID;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: java.util.UUID);
						public toString(): string;
					}
					export module TargetingRule {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule;
						}
					}
					export class TargetingRuleTrigger {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger>;
						public __typename(): string;
						public targetingRule(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule);
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module TargetingRuleTrigger {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Variables>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public screenIdentifier(): java.util.UUID;
						public targetingRuleId(): java.util.UUID;
						public language(): com.iadvize.conversation.sdk.type.Language;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class VisitorMessagesFromTargetingRuleQuery extends com.apollographql.apollo.api.Query<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data,com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data,com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
					public constructor(param0: java.util.UUID, param1: string, param2: number);
					public static builder(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Builder;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
					public composeRequestBody(): okio.ByteString;
					public variables(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Variables;
					public operationId(): string;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public wrapData(param0: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data;
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module VisitorMessagesFromTargetingRuleQuery {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Builder>;
						public targetingRuleId(param0: java.util.UUID): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Builder;
						public pageCount(param0: number): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Builder;
						public build(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery;
						public language(param0: string): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Builder;
					}
					export class ConversationsVisitorMessages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages>;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages, param2: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages);
						public __typename(): string;
						public messages(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public proactiveBotMessages(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages;
						public toString(): string;
					}
					export module ConversationsVisitorMessages {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages;
						}
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
						public constructor(param0: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public conversationsVisitorMessages(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages;
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data;
						}
					}
					export class Messages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages>;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Fragments);
						public toString(): string;
						public fragments(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Fragments;
					}
					export module Messages {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Fragments>;
							public hashCode(): number;
							public visitorMessages(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.VisitorMessages);
							public equals(param0: any): boolean;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages;
						}
					}
					export class ProactiveBotMessages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages>;
						public fragments(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Fragments;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Fragments);
						public toString(): string;
					}
					export module ProactiveBotMessages {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Fragments>;
							public hashCode(): number;
							public visitorMessages(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.VisitorMessages);
							public equals(param0: any): boolean;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Variables>;
						public pageCount(): number;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public language(): string;
						public targetingRuleId(): java.util.UUID;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class VisitorMessagesQuery extends com.apollographql.apollo.api.Query<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data,com.iadvize.conversation.sdk.VisitorMessagesQuery.Data,com.iadvize.conversation.sdk.VisitorMessagesQuery.Variables> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery>;
					public static OPERATION_ID: string;
					public static QUERY_DOCUMENT: string;
					public static OPERATION_NAME: com.apollographql.apollo.api.OperationName;
					public parse(param0: okio.ByteString): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
					public variables(): com.iadvize.conversation.sdk.VisitorMessagesQuery.Variables;
					public wrapData(param0: com.iadvize.conversation.sdk.VisitorMessagesQuery.Data): com.iadvize.conversation.sdk.VisitorMessagesQuery.Data;
					public queryDocument(): string;
					public composeRequestBody(param0: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
					public composeRequestBody(): okio.ByteString;
					public parse(param0: okio.ByteString, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
					public operationId(): string;
					public responseFieldMapper(): com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
					public static builder(): com.iadvize.conversation.sdk.VisitorMessagesQuery.Builder;
					public parse(param0: okio.BufferedSource): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
					public parse(param0: okio.BufferedSource, param1: com.apollographql.apollo.api.ScalarTypeAdapters): com.apollographql.apollo.api.Response<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
					public name(): com.apollographql.apollo.api.OperationName;
					public constructor(param0: number);
					public composeRequestBody(param0: boolean, param1: boolean, param2: com.apollographql.apollo.api.ScalarTypeAdapters): okio.ByteString;
				}
				export module VisitorMessagesQuery {
					export class Builder {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Builder>;
						public pageCount(param0: number): com.iadvize.conversation.sdk.VisitorMessagesQuery.Builder;
						public build(): com.iadvize.conversation.sdk.VisitorMessagesQuery;
					}
					export class ConversationsVisitorMessages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages>;
						public __typename(): string;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public messages(): com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages;
						public toString(): string;
					}
					export module ConversationsVisitorMessages {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages;
						}
					}
					export class Data {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public conversationsVisitorMessages(): com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages);
						public toString(): string;
					}
					export module Data {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesQuery.Data;
						}
					}
					export class Messages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages>;
						public __typename(): string;
						public fragments(): com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Fragments;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Fragments);
						public toString(): string;
					}
					export module Messages {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Fragments>;
							public hashCode(): number;
							public visitorMessages(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.VisitorMessages);
							public equals(param0: any): boolean;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages;
						}
					}
					export class Variables {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Variables>;
						public pageCount(): number;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public valueMap(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export class ActivityLifecycleController {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.ActivityLifecycleController>;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public setStartWatching(param0: boolean): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public setCurrentActivityReference(param0: java.lang.ref.WeakReference<globalAndroid.app.Activity>): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public getStartWatching(): boolean;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public constructor(param0: com.iadvize.conversation.sdk.controller.ActivityLifecycleController.CurrentActivityUpdatedListener);
						public getCurrentActivityReference(): java.lang.ref.WeakReference<globalAndroid.app.Activity>;
						public getListeners$sdk_haRelease(): java.util.List<com.iadvize.conversation.sdk.controller.ActivityLifecycleController.CurrentActivityUpdatedListener>;
					}
					export module ActivityLifecycleController {
						export class CurrentActivityUpdatedListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.ActivityLifecycleController.CurrentActivityUpdatedListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.ActivityLifecycleController$CurrentActivityUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCurrentActivityUpdated(): void;
							});
							public constructor();
							public onCurrentActivityUpdated(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export class SDKActivationStatusObserver {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver>;
						public setActivationStatus$sdk_haRelease(param0: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus): void;
						public constructor();
						public getActivationStatus$sdk_haRelease(): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public withActivatedSdk(param0: string, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					}
					export module SDKActivationStatusObserver {
						export class WhenMappings {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module chatbox {
						export class ChatboxController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.ChatboxController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getUseDefaultChatButton(): boolean;
								setUseDefaultChatButton(param0: boolean): void;
								isChatboxPresented(): boolean;
								setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
								presentChatboxActivity(param0: globalAndroid.content.Context): void;
								setChatButtonPosition(param0: number, param1: number): void;
							});
							public constructor();
							public isChatboxPresented(): boolean;
							public presentChatboxActivity(param0: globalAndroid.content.Context): void;
							public setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
							public setUseDefaultChatButton(param0: boolean): void;
							public getUseDefaultChatButton(): boolean;
							public setChatButtonPosition(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module chatbox {
						export class ChatboxFragmentCallback {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxFragmentCallback>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.ChatboxFragmentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConversationError(param0: java.lang.Throwable): void;
								messageNotSent(param0: com.iadvize.conversation_ui.models.Message): void;
								messageSent(param0: com.iadvize.conversation_ui.models.Message): void;
								messageSending(param0: com.iadvize.conversation_ui.models.Message): void;
								messageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
								localMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
								localProactiveMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
								conversationReceivedWithGdpr(): void;
								consentNotSent(param0: java.lang.Throwable): void;
								fileSizeIsOverLimit(): void;
							});
							public constructor();
							public messageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public messageSending(param0: com.iadvize.conversation_ui.models.Message): void;
							public messageSent(param0: com.iadvize.conversation_ui.models.Message): void;
							public consentNotSent(param0: java.lang.Throwable): void;
							public conversationReceivedWithGdpr(): void;
							public localMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public messageNotSent(param0: com.iadvize.conversation_ui.models.Message): void;
							public localProactiveMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public fileSizeIsOverLimit(): void;
							public onConversationError(param0: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module chatbox {
						export class ChatboxListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChatboxConfigurationUpdated(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
							});
							public constructor();
							public onChatboxConfigurationUpdated(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module chatbox {
						export class ChatboxSDKController extends com.iadvize.conversation.sdk.controller.chatbox.ChatboxController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getChatboxConfiguration(): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
								getUseDefaultChatButton(): boolean;
								setUseDefaultChatButton(param0: boolean): void;
								isChatboxPresented(): boolean;
								setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
								presentChatboxActivity(param0: globalAndroid.content.Context): void;
								setChatButtonPosition(param0: number, param1: number): void;
							});
							public constructor();
							public isChatboxPresented(): boolean;
							public presentChatboxActivity(param0: globalAndroid.content.Context): void;
							public setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
							public setUseDefaultChatButton(param0: boolean): void;
							public getUseDefaultChatButton(): boolean;
							public setChatButtonPosition(param0: number, param1: number): void;
							public getChatboxConfiguration(): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module chatbox {
						export class ChatboxSDKControllerImpl extends com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver implements com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKController, com.iadvize.conversation.sdk.controller.ActivityLifecycleController.CurrentActivityUpdatedListener, com.iadvize.conversation.sdk.controller.chatbox.OverlayController.OverlayControllerCallback {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKControllerImpl>;
							public constructor();
							public getOverlayController$sdk_haRelease(): com.iadvize.conversation.sdk.controller.chatbox.OverlayController;
							public presentChatboxActivity(param0: globalAndroid.content.Context): void;
							public setConversationSDKController$sdk_haRelease(param0: com.iadvize.conversation.sdk.controller.conversation.ConversationSDKController): void;
							public getListeners$sdk_haRelease(): java.util.List<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>;
							public setUseDefaultChatButton(param0: boolean): void;
							public getChatButtonPosition(): com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition;
							public onCurrentActivityUpdated(): void;
							public getUseDefaultChatButton(): boolean;
							public getTargetingSDKController$sdk_haRelease(): com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController;
							public getConfiguration$sdk_haRelease(): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
							public getChatboxConfiguration(): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
							public isChatboxPresented(): boolean;
							public getConversationSDKController$sdk_haRelease(): com.iadvize.conversation.sdk.controller.conversation.ConversationSDKController;
							public setChatButtonPosition$sdk_haRelease(param0: com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition): void;
							public setConfiguration$sdk_haRelease(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
							public setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
							public getActivityLifecycleController$sdk_haRelease(): com.iadvize.conversation.sdk.controller.ActivityLifecycleController;
							public updateChatButton$sdk_haRelease(): void;
							public setTargetingSDKController$sdk_haRelease(param0: com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController): void;
							public setChatButtonPosition(param0: number, param1: number): void;
							public getChatButtonPosition$sdk_haRelease(): com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module chatbox {
						export class OverlayController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.OverlayController>;
							public constructor(param0: com.iadvize.conversation.sdk.controller.chatbox.OverlayController.OverlayControllerCallback);
							public hideChatButton(param0: globalAndroid.app.Activity): void;
							public getIAdvizeChatButton$sdk_haRelease(param0: globalAndroid.app.Activity): globalAndroid.view.View;
							public updateChatButtonPosition(param0: globalAndroid.app.Activity): boolean;
							public getRootView$sdk_haRelease(param0: globalAndroid.app.Activity): globalAndroid.widget.FrameLayout;
							public showChatButton(param0: globalAndroid.app.Activity, param1: globalAndroid.view.View.OnClickListener): void;
							public updateConfiguration(param0: globalAndroid.app.Activity): boolean;
							public hasChatButton$sdk_haRelease(param0: globalAndroid.app.Activity): boolean;
						}
						export module OverlayController {
							export class OverlayControllerCallback {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.OverlayController.OverlayControllerCallback>;
								/**
								 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.OverlayController$OverlayControllerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getChatboxConfiguration(): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
									getChatButtonPosition(): com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition;
								});
								public constructor();
								public getChatboxConfiguration(): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
								public getChatButtonPosition(): com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export class ConversationController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.ConversationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
								hasOngoingConversation(): boolean;
							});
							public constructor();
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
							public hasOngoingConversation(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export class ConversationListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.ConversationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOngoingConversationStatusChanged(param0: boolean): void;
								onNewMessageReceived(param0: string): void;
								handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
							});
							public constructor();
							public onNewMessageReceived(param0: string): void;
							public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
							public onOngoingConversationStatusChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export class ConversationSDKController extends com.iadvize.conversation.sdk.controller.conversation.ConversationController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationSDKController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.ConversationSDKController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
								hasOngoingConversation(): boolean;
							});
							public constructor();
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
							public hasOngoingConversation(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export class ConversationSDKControllerImpl extends com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver implements com.iadvize.conversation.sdk.controller.conversation.ConversationSDKController, com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConnectionController.Listener, com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConversationController.XmppListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationSDKControllerImpl>;
							public static Companion: com.iadvize.conversation.sdk.controller.conversation.ConversationSDKControllerImpl.Companion;
							public static VISITOR_MESSAGES: string;
							public static PROACTIVE_MESSAGES: string;
							public sendTextMessage$sdk_haRelease(param0: string): void;
							public sendAttachmentMessage$sdk_haRelease(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.model.attachments.UploadFile): void;
							public getGdprConsentOK$sdk_haRelease(): com.iadvize.conversation_ui.models.Message;
							public onXmppConversationClosed(): void;
							public setHasOngoingConversation$sdk_haRelease(param0: boolean): void;
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
							public getChatboxFragmentCallbacks$sdk_haRelease(): java.util.List<com.iadvize.conversation.sdk.controller.chatbox.ChatboxFragmentCallback>;
							public initiateConversation$sdk_haRelease(param0: kotlin.coroutines.Continuation<any>): any;
							public getChatboxSDKController$sdk_haRelease(): com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKController;
							public getRoutingOperatorNotFoundMessage$sdk_haRelease(): com.iadvize.conversation_ui.models.Message;
							public constructor(param0: com.iadvize.conversation.sdk.model.graphql.GraphQLApi);
							public clear$sdk_haRelease(): void;
							public setGdprConsentOK$sdk_haRelease(param0: com.iadvize.conversation_ui.models.Message): void;
							public getGdprConsentKO$sdk_haRelease(): com.iadvize.conversation_ui.models.Message;
							public onReconnectionTriggered(): void;
							public setChatboxSDKController$sdk_haRelease(param0: com.iadvize.conversation.sdk.controller.chatbox.ChatboxSDKController): void;
							public getMessages$sdk_haRelease(): java.util.List<com.iadvize.conversation_ui.models.Message>;
							public onReconnectionSucceeded(param0: org.jivesoftware.smack.XMPPConnection): void;
							public setGdprQuestion$sdk_haRelease(param0: com.iadvize.conversation_ui.models.Message): void;
							public onConnectionFailed(param0: java.lang.Throwable): void;
							public onReconnectionFailed(param0: java.lang.Throwable): void;
							public setGdprOption$sdk_haRelease(param0: com.iadvize.conversation.sdk.model.gdpr.GDPROption): void;
							public getHasOngoingConversation$sdk_haRelease(): boolean;
							public onVisitorSubscribed(): void;
							public getConversation$sdk_haRelease(): com.iadvize.conversation.sdk.model.conversation.Conversation;
							public setTargetingSDKController$sdk_haRelease(param0: com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController): void;
							public hasOngoingConversation(): boolean;
							public getGdprOption$sdk_haRelease(): com.iadvize.conversation.sdk.model.gdpr.GDPROption;
							public onXmppMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public constructor();
							public setRoutingOperatorNotFoundMessage$sdk_haRelease(param0: com.iadvize.conversation_ui.models.Message): void;
							public setGdprConsentKO$sdk_haRelease(param0: com.iadvize.conversation_ui.models.Message): void;
							public retryMessage$sdk_haRelease(param0: com.iadvize.conversation_ui.models.Message): void;
							public onConnectionAuthenticated(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
							public sendGDPRConsent$sdk_haRelease(param0: boolean, param1: string): void;
							public onRoutingOperatorNotFound(): void;
							public getTargetingSDKController$sdk_haRelease(): com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController;
							public resetConversationFromHistory$sdk_haRelease(param0: boolean, param1: kotlin.coroutines.Continuation<any>): any;
							public onXmppError(param0: java.lang.Throwable): void;
							public onConnectionEstablished(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
							public onVisitorUnsubscribed(): void;
							public getGdprQuestion$sdk_haRelease(): com.iadvize.conversation_ui.models.Message;
							public onConnectionClosed(param0: java.lang.Throwable): void;
							public setHasConversation$sdk_haRelease(param0: boolean): void;
						}
						export module ConversationSDKControllerImpl {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationSDKControllerImpl.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export class NoOpConversationListener extends com.iadvize.conversation.sdk.controller.conversation.ConversationListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.NoOpConversationListener>;
							public constructor();
							public onNewMessageReceived(param0: string): void;
							public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
							public onOngoingConversationStatusChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export module xmpp {
							export class XmppConnectionController {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConnectionController>;
								public constructor(param0: com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConnectionController.Listener);
								public isConnected(): boolean;
								public authenticated(param0: org.jivesoftware.smack.XMPPConnection, param1: boolean): void;
								public reconnectingIn(param0: number): void;
								public connectionClosed(): void;
								public reconnectionFailed(param0: java.lang.Exception): void;
								public connect(param0: org.jxmpp.jid.Jid, param1: string): void;
								public disconnect(): void;
								public connectionClosedOnError(param0: java.lang.Exception): void;
								public connected(param0: org.jivesoftware.smack.XMPPConnection): void;
							}
							export module XmppConnectionController {
								export class Listener {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConnectionController.Listener>;
									/**
									 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConnectionController$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onConnectionEstablished(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
										onConnectionAuthenticated(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
										onConnectionFailed(param0: java.lang.Throwable): void;
										onConnectionClosed(param0: java.lang.Throwable): void;
										onReconnectionTriggered(): void;
										onReconnectionSucceeded(param0: org.jivesoftware.smack.XMPPConnection): void;
										onReconnectionFailed(param0: java.lang.Throwable): void;
									});
									public constructor();
									public onReconnectionSucceeded(param0: org.jivesoftware.smack.XMPPConnection): void;
									public onConnectionFailed(param0: java.lang.Throwable): void;
									public onReconnectionTriggered(): void;
									public onConnectionAuthenticated(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
									public onReconnectionFailed(param0: java.lang.Throwable): void;
									public onConnectionEstablished(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
									public onConnectionClosed(param0: java.lang.Throwable): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module conversation {
						export module xmpp {
							export class XmppConversationController implements com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionListener.MessageReceivedListener, com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQListener.SubscriptionsReceivedListener, com.iadvize.conversation.sdk.model.xmpp.conversation.messages.DirectMessageListener.DirectMessageReceivedListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConversationController>;
								public sendFile(param0: string, param1: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension): void;
								public onVisitorSubscriptionsRetrieved(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQ): void;
								public constructor(param0: org.jivesoftware.smack.XMPPConnection, param1: com.iadvize.conversation.sdk.model.auth.JWT, param2: com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConversationController.XmppListener);
								public onSubscribeReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension, param1: string): void;
								public requestVisitorSubscriptions(): void;
								public onRoutingOperatorNotFound(): void;
								public sendText(param0: string, param1: string): void;
								public onUnsubscribeReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension, param1: string): void;
								public release(): void;
								public onMucSubMessageExtensionReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension): void;
							}
							export module XmppConversationController {
								export class XmppListener {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConversationController.XmppListener>;
									/**
									 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.xmpp.XmppConversationController$XmppListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onVisitorSubscribed(): void;
										onVisitorUnsubscribed(): void;
										onXmppMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
										onXmppConversationClosed(): void;
										onXmppError(param0: java.lang.Throwable): void;
										onRoutingOperatorNotFound(): void;
									});
									public constructor();
									public onXmppMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
									public onVisitorUnsubscribed(): void;
									public onXmppError(param0: java.lang.Throwable): void;
									public onVisitorSubscribed(): void;
									public onXmppConversationClosed(): void;
									public onRoutingOperatorNotFound(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module notification {
						export class NotificationController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.notification.NotificationController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.notification.NotificationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerPushToken(param0: string): void;
								enablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
								disablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
								isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
							});
							public constructor();
							public enablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
							public registerPushToken(param0: string): void;
							public disablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
							public isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
						}
						export module NotificationController {
							export class DefaultImpls {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.notification.NotificationController.DefaultImpls>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module notification {
						export class NotificationSDKController extends com.iadvize.conversation.sdk.controller.notification.NotificationController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.notification.NotificationSDKController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.notification.NotificationSDKController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerPushToken(param0: string): void;
								enablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
								disablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
								isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
							});
							public constructor();
							public enablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
							public registerPushToken(param0: string): void;
							public disablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
							public isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module notification {
						export class NotificationSDKControllerImpl extends com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver implements com.iadvize.conversation.sdk.controller.notification.NotificationSDKController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.notification.NotificationSDKControllerImpl>;
							public static Companion: com.iadvize.conversation.sdk.controller.notification.NotificationSDKControllerImpl.Companion;
							public static INTERNAL_CHANNEL_ID: string;
							public constructor();
							public enablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
							public registerPushToken(param0: string): void;
							public disablePushNotifications(param0: com.iadvize.conversation.sdk.model.IAdvizeSDKCallback): void;
							public isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
							public constructor(param0: com.iadvize.conversation.sdk.model.graphql.GraphQLApi);
						}
						export module NotificationSDKControllerImpl {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.notification.NotificationSDKControllerImpl.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module targeting {
						export class TargetingController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.targeting.TargetingController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.targeting.TargetingController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								hasAvailableActiveTargetingRule(): boolean;
								getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
								setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void;
								registerUserNavigation(): void;
								activateTargetingRule(param0: java.util.UUID): void;
								getLanguage(): com.iadvize.conversation.sdk.model.language.SDKLanguageOption;
								setLanguage(param0: com.iadvize.conversation.sdk.model.language.SDKLanguageOption): void;
							});
							public constructor();
							public activateTargetingRule(param0: java.util.UUID): void;
							public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void;
							public registerUserNavigation(): void;
							public getLanguage(): com.iadvize.conversation.sdk.model.language.SDKLanguageOption;
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
							public setLanguage(param0: com.iadvize.conversation.sdk.model.language.SDKLanguageOption): void;
							public hasAvailableActiveTargetingRule(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module targeting {
						export class TargetingListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.targeting.TargetingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
							});
							public constructor();
							public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module targeting {
						export class TargetingSDKController extends com.iadvize.conversation.sdk.controller.targeting.TargetingController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								activeTargetingRuleAvailabilityDidChange(param0: boolean): void;
								activeTargetingRuleId(): string;
								hasAvailableActiveTargetingRule(): boolean;
								getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
								setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void;
								registerUserNavigation(): void;
								activateTargetingRule(param0: java.util.UUID): void;
								getLanguage(): com.iadvize.conversation.sdk.model.language.SDKLanguageOption;
								setLanguage(param0: com.iadvize.conversation.sdk.model.language.SDKLanguageOption): void;
							});
							public constructor();
							public activateTargetingRule(param0: java.util.UUID): void;
							public activeTargetingRuleId(): string;
							public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void;
							public registerUserNavigation(): void;
							public getLanguage(): com.iadvize.conversation.sdk.model.language.SDKLanguageOption;
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
							public setLanguage(param0: com.iadvize.conversation.sdk.model.language.SDKLanguageOption): void;
							public hasAvailableActiveTargetingRule(): boolean;
							public activeTargetingRuleAvailabilityDidChange(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module targeting {
						export class TargetingSDKControllerImpl extends com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver implements com.iadvize.conversation.sdk.controller.targeting.TargetingSDKController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.targeting.TargetingSDKControllerImpl>;
							public constructor();
							public activateTargetingRule(param0: java.util.UUID): void;
							public registerUserNavigation(): void;
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
							public constructor(param0: com.iadvize.conversation.sdk.model.graphql.GraphQLApi);
							public clear$sdk_haRelease(): void;
							public hasAvailableActiveTargetingRule(): boolean;
							public setActiveTargetingRuleAvailable$sdk_haRelease(param0: boolean): void;
							public getScreenIdentifier$sdk_haRelease(): java.util.UUID;
							public setScreenIdentifier$sdk_haRelease(param0: java.util.UUID): void;
							public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void;
							public activeTargetingRuleId(): string;
							public getLanguage(): com.iadvize.conversation.sdk.model.language.SDKLanguageOption;
							public setLanguage(param0: com.iadvize.conversation.sdk.model.language.SDKLanguageOption): void;
							public isActiveTargetingRuleAvailable$sdk_haRelease(): boolean;
							public activeTargetingRuleAvailabilityDidChange(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module transaction {
						export class TransactionController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.transaction.TransactionController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.transaction.TransactionController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void;
							});
							public constructor();
							public register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module transaction {
						export class TransactionSDKController extends com.iadvize.conversation.sdk.controller.transaction.TransactionController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.transaction.TransactionSDKController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.controller.transaction.TransactionSDKController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void;
							});
							public constructor();
							public register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module controller {
					export module transaction {
						export class TransactionSDKControllerImpl extends com.iadvize.conversation.sdk.controller.SDKActivationStatusObserver implements com.iadvize.conversation.sdk.controller.transaction.TransactionSDKController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.transaction.TransactionSDKControllerImpl>;
							public static Companion: com.iadvize.conversation.sdk.controller.transaction.TransactionSDKControllerImpl.Companion;
							public static TRANSACTION_QUEUE_KEY: string;
							public constructor();
							public stringToTransaction$sdk_haRelease(param0: string): com.iadvize.conversation.sdk.model.transaction.Transaction;
							public register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void;
							public transactionToString$sdk_haRelease(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): string;
							public constructor(param0: com.iadvize.conversation.sdk.model.graphql.GraphQLApi);
							public checkAndSend$sdk_haRelease(): void;
							public clear$sdk_haRelease(): void;
						}
						export module TransactionSDKControllerImpl {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.transaction.TransactionSDKControllerImpl.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeAttachmentActivityBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeAttachmentActivityBinding>;
						public iadvizeAttachmentFragmentContainer: globalAndroid.widget.FrameLayout;
						public iadvizeAttachmentToolbar: androidx.appcompat.widget.Toolbar;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentActivityBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentActivityBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentActivityBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeAttachmentFragmentBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeAttachmentFragmentBinding>;
						public iadvizeAttachmentImage: com.iadvize.conversation.sdk.view.conversation.TouchImageView;
						public getRoot(): com.iadvize.conversation.sdk.view.conversation.TouchImageView;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentFragmentBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentFragmentBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentFragmentBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeAttachmentLayoutBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeAttachmentLayoutBinding>;
						public iadvizeAttachmentItemBorder: globalAndroid.widget.ImageView;
						public iadvizeAttachmentItemContainer: globalAndroid.widget.RelativeLayout;
						public iadvizeAttachmentItemImage: globalAndroid.widget.ImageView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentLayoutBinding;
						public getRoot(): globalAndroid.widget.RelativeLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentLayoutBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeAttachmentLayoutBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeChatboxActivityBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeChatboxActivityBinding>;
						public conversationToolbar: androidx.appcompat.widget.Toolbar;
						public iadvizeConversationFragmentContainer: globalAndroid.widget.FrameLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeChatboxActivityBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeChatboxActivityBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeChatboxActivityBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeChatboxFragmentBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeChatboxFragmentBinding>;
						public iadvizeConversationComposeview: com.iadvize.conversation_ui.views.ComposeView;
						public iadvizeConversationErrorView: com.iadvize.conversation.sdk.view.common.ConversationErrorView;
						public iadvizeConversationLoader: globalAndroid.widget.ProgressBar;
						public iadvizeConversationRecyclerView: androidx.recyclerview.widget.RecyclerView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeChatboxFragmentBinding;
						public getRoot(): globalAndroid.widget.RelativeLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeChatboxFragmentBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeChatboxFragmentBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeComposeViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeComposeViewBinding>;
						public iadvizeComposeEdit: globalAndroid.widget.EditText;
						public iadvizeComposeViewLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeComposeZone: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeFileButton: globalAndroid.widget.ImageButton;
						public iadvizeImageButton: globalAndroid.widget.ImageButton;
						public iadvizeSendButton: globalAndroid.widget.ImageButton;
						public iadvizeTranslateButton: globalAndroid.widget.ImageButton;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeComposeViewBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeComposeViewBinding;
						public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeComposeViewBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeConversationErrorViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConversationErrorViewBinding>;
						public iadivzeConversationErrorSubtitle: globalAndroid.widget.TextView;
						public iadivzeConversationErrorTitle: globalAndroid.widget.TextView;
						public iadvizeConversationRetryButton: globalAndroid.widget.TextView;
						public getRoot(): globalAndroid.view.View;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeConversationErrorViewBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeConversationErrorViewBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeGenericCardBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBinding>;
						public iadvizeGenericCard: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeGenericCardContent: globalAndroid.widget.TextView;
						public iadvizeGenericCardImage: com.google.android.material.imageview.ShapeableImageView;
						public iadvizeGenericCardImageDivider: globalAndroid.view.View;
						public iadvizeGenericCardLinkLayout: globalAndroid.widget.LinearLayout;
						public iadvizeGenericCardTitle: globalAndroid.widget.TextView;
						public iadvizeGenericCardTitleContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBinding;
						public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeGenericCardBundleItemBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBundleItemBinding>;
						public iadvizeGenericCardBundleItem: com.iadvize.conversation_ui.views.GenericCardView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBundleItemBinding;
						public getRoot(): com.iadvize.conversation_ui.views.GenericCardView;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBundleItemBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardBundleItemBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeGenericCardLinkBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkBinding>;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkBinding;
						public getRoot(): globalAndroid.widget.TextView;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeGenericCardLinkDividerBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkDividerBinding>;
						public getRoot(): globalAndroid.view.View;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkDividerBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkDividerBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeGenericCardLinkDividerBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeLoadPastConversationViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeLoadPastConversationViewBinding>;
						public iadvizeLoad: globalAndroid.widget.Button;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeLoadPastConversationViewBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeLoadPastConversationViewBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeLoadPastConversationViewBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageAvatarBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding>;
						public iadvizeConversationItemAvatar: globalAndroid.widget.ImageView;
						public iadvizeConversationItemAvatarLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeConversationItemPresence: globalAndroid.widget.ImageView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageBundleBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageBundleBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeBundleViewPager: com.iadvize.conversation_ui.views.WrapContentViewPager;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageBundleBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageBundleBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageBundleBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageCardBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageCardBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeGenericCard: com.iadvize.conversation_ui.views.GenericCardView;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageCardBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageCardBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageCardBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageDateViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageDateViewBinding>;
						public iadvizeMessageDate: globalAndroid.widget.TextView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageDateViewBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageDateViewBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageDateViewBinding;
						public getRoot(): globalAndroid.widget.TextView;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageFileBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageFileBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
						public iadvizeMessageFile: androidx.appcompat.widget.AppCompatTextView;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageFileBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageFileBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageFileBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageImageBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageImageBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
						public iadvizeMessageImage: com.google.android.material.imageview.ShapeableImageView;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageImageBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageImageBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageImageBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessagePreviewLinkBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessagePreviewLinkBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.LinearLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeMessagePreviewLink: com.iadvize.conversation_ui.views.preview_link.PreviewLinkView;
						public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessagePreviewLinkBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessagePreviewLinkBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessagePreviewLinkBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageProductOfferBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageProductOfferBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeProductOffer: com.iadvize.conversation_ui.views.ProductOfferView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageProductOfferBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageProductOfferBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageProductOfferBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageQuickReplyBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.LinearLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeMessageQuickReplyChoicesParent: globalAndroid.widget.LinearLayout;
						public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageQuickReplyTextViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyTextViewBinding>;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyTextViewBinding;
						public getRoot(): globalAndroid.widget.TextView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyTextViewBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageQuickReplyTextViewBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageSenderNameViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageSenderNameViewBinding>;
						public iadvizeSenderName: globalAndroid.widget.TextView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageSenderNameViewBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageSenderNameViewBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageSenderNameViewBinding;
						public getRoot(): globalAndroid.widget.TextView;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageSnoozeBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageSnoozeBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeSnoozeLogo: androidx.appcompat.widget.AppCompatImageView;
						public iadvizeSnoozeLogoSpace: globalAndroid.widget.Space;
						public iadvizeSnoozeMessage: globalAndroid.widget.TextView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageSnoozeBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageSnoozeBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageSnoozeBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageStateViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageStateViewBinding>;
						public iadvizeMessageState: globalAndroid.widget.TextView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageStateViewBinding;
						public getRoot(): globalAndroid.widget.TextView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageStateViewBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageStateViewBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageSystemBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageSystemBinding>;
						public iadvizeMessageDate: com.iadvize.conversation.sdk.databinding.IadvizeMessageDateViewBinding;
						public iadvizeMessageSystemContent: globalAndroid.widget.TextView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageSystemBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageSystemBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageSystemBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageTextBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageTextBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
						public iadvizeMessageDate: com.iadvize.conversation.sdk.databinding.IadvizeMessageDateViewBinding;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeMessageState: com.iadvize.conversation.sdk.databinding.IadvizeMessageStateViewBinding;
						public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
						public iadvizeSenderName: com.iadvize.conversation.sdk.databinding.IadvizeMessageSenderNameViewBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageTextBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageTextBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageTextBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageTransferBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageTransferBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeTransferLogo: androidx.appcompat.widget.AppCompatImageView;
						public iadvizeTransferLogoSpace: globalAndroid.widget.Space;
						public iadvizeTransferMessage: globalAndroid.widget.TextView;
						public iadvizeTransferReasonContent: globalAndroid.widget.TextView;
						public iadvizeTransferReasonDivider: globalAndroid.view.View;
						public iadvizeTransferReasonLayout: androidx.constraintlayout.widget.Group;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageTransferBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageTransferBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageTransferBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageTranslatedBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageTranslatedBinding>;
						public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
						public iadvizeMessageAvatar: com.iadvize.conversation.sdk.databinding.IadvizeMessageAvatarBinding;
						public iadvizeMessageContentLayout: globalAndroid.widget.LinearLayout;
						public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
						public iadvizeMessageTranslated: androidx.appcompat.widget.AppCompatTextView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageTranslatedBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageTranslatedBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageTranslatedBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeMessageTypingIndicatorBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeMessageTypingIndicatorBinding>;
						public iadvizeMessageTypingIndicator: globalAndroid.widget.LinearLayout;
						public iadvizeTypeWriterView: com.iadvize.conversation_ui.views.TypewriterView;
						public iadvizeWaitingDotsView: com.iadvize.conversation_ui.views.WaitingDotsView;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeMessageTypingIndicatorBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeMessageTypingIndicatorBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeMessageTypingIndicatorBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizePreviewLinkBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizePreviewLinkBinding>;
						public iadvizePreviewLink: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizePreviewLinkContentGroup: androidx.constraintlayout.widget.Group;
						public iadvizePreviewLinkDescription: globalAndroid.widget.TextView;
						public iadvizePreviewLinkImage: com.google.android.material.imageview.ShapeableImageView;
						public iadvizePreviewLinkImageDivider: globalAndroid.view.View;
						public iadvizePreviewLinkLoader: globalAndroid.widget.ProgressBar;
						public iadvizePreviewLinkTitle: globalAndroid.widget.TextView;
						public iadvizePreviewLinkTitleContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizePreviewLinkBinding;
						public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizePreviewLinkBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizePreviewLinkBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeProductOfferBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBinding>;
						public iadvizeProductOffer: androidx.constraintlayout.widget.ConstraintLayout;
						public iadvizeProductOfferAvailability: globalAndroid.widget.TextView;
						public iadvizeProductOfferDescription: globalAndroid.widget.TextView;
						public iadvizeProductOfferImage: com.google.android.material.imageview.ShapeableImageView;
						public iadvizeProductOfferImageDivider: globalAndroid.view.View;
						public iadvizeProductOfferLinkLayout: globalAndroid.widget.LinearLayout;
						public iadvizeProductOfferName: globalAndroid.widget.TextView;
						public iadvizeProductOfferOriginPrice: globalAndroid.widget.TextView;
						public iadvizeProductOfferPrice: globalAndroid.widget.TextView;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBinding;
						public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeProductOfferBundleItemBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBundleItemBinding>;
						public iadvizeProductOfferBundleItem: com.iadvize.conversation_ui.views.ProductOfferView;
						public getRoot(): com.iadvize.conversation_ui.views.ProductOfferView;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBundleItemBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBundleItemBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeProductOfferBundleItemBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeViewConversationButtonBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeViewConversationButtonBinding>;
						public iadvizeViewConversationBadge: globalAndroid.widget.TextView;
						public iadvizeViewConversationButtonBackground: globalAndroid.widget.ImageView;
						public iadvizeViewConversationButtonParent: globalAndroid.widget.RelativeLayout;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeViewConversationButtonBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeViewConversationButtonBinding;
						public getRoot(): globalAndroid.widget.RelativeLayout;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeViewConversationButtonBinding;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module databinding {
					export class IadvizeWaitingDotsViewBinding {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeWaitingDotsViewBinding>;
						public iadvizeWaitingDot1: globalAndroid.widget.ImageView;
						public iadvizeWaitingDot2: globalAndroid.widget.ImageView;
						public iadvizeWaitingDot3: globalAndroid.widget.ImageView;
						public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation.sdk.databinding.IadvizeWaitingDotsViewBinding;
						public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeWaitingDotsViewBinding;
						public static bind(param0: globalAndroid.view.View): com.iadvize.conversation.sdk.databinding.IadvizeWaitingDotsViewBinding;
						public getRoot(): globalAndroid.widget.LinearLayout;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class AutomaticMessageSentSystemAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public text(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string, param2: com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant);
						public toString(): string;
						public participant(): com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant;
					}
					export module AutomaticMessageSentSystemAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment;
						}
						export class Participant {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant>;
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Fragments);
							public equals(param0: any): boolean;
							public fragments(): com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Fragments;
						}
						export module Participant {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Fragments>;
								public toString(): string;
								public conversationParticipant(): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationParticipant);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment.Participant;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class Bot {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Bot>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Bot {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.Bot> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Bot.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.Bot;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class CardAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public image(): com.iadvize.conversation.sdk.fragment.CardAttachment.Image;
						public actions(): java.util.List<com.iadvize.conversation.sdk.fragment.CardAttachment.Action>;
						public video(): com.iadvize.conversation.sdk.fragment.CardAttachment.Video;
						public optionalTitle(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public optionalText(): string;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.CardAttachment.Image, param2: string, param3: string, param4: string, param5: com.iadvize.conversation.sdk.fragment.CardAttachment.Video, param6: java.util.List<com.iadvize.conversation.sdk.fragment.CardAttachment.Action>);
						public style(): string;
						public toString(): string;
					}
					export module CardAttachment {
						export class Action {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Action>;
							public __typename(): string;
							public hashCode(): number;
							public fragments(): com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Fragments;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Fragments);
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Action {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Fragments>;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public conversationMessageAttachmentLinkAction(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment.Action> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Action.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment.Action;
								public constructor();
							}
						}
						export class Image {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Image>;
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public fragments(): com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Fragments;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Fragments);
						}
						export module Image {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Fragments>;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink);
								public equals(param0: any): boolean;
								public conversationMessageAttachmentImageLink(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink;
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment.Image> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Image.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment.Image;
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment;
						}
						export class Video {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Video>;
							public __typename(): string;
							public hashCode(): number;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Fragments);
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public fragments(): com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Fragments;
							public equals(param0: any): boolean;
						}
						export module Video {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Fragments>;
								public videoAttachment(): com.iadvize.conversation.sdk.fragment.VideoAttachment;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.VideoAttachment);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardAttachment.Video> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Video.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardAttachment.Video;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class CardBundleAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card>);
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public cards(): java.util.List<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card>;
						public toString(): string;
					}
					export module CardBundleAttachment {
						export class Card {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card>;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Fragments);
							public __typename(): string;
							public fragments(): com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Fragments;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Card {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Fragments>;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.CardAttachment);
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public cardAttachment(): com.iadvize.conversation.sdk.fragment.CardAttachment;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.CardBundleAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.CardBundleAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ConversationMessage {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessage>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessage.Fragments);
						public toString(): string;
						public fragments(): com.iadvize.conversation.sdk.fragment.ConversationMessage.Fragments;
					}
					export module ConversationMessage {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessage.Fragments>;
							public participantConversationMessage(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage;
							public hashCode(): number;
							public systemMessage(): com.iadvize.conversation.sdk.fragment.SystemMessage;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage, param1: com.iadvize.conversation.sdk.fragment.SystemMessage);
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ConversationMessage.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessage.Fragments.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ConversationMessage.Fragments;
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ConversationMessage> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessage.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ConversationMessage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ConversationMessageAttachmentImageLink {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public description(): string;
						public constructor(param0: string, param1: string, param2: string);
						public url(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module ConversationMessageAttachmentImageLink {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ConversationMessageAttachmentLinkAction {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public constructor(param0: string, param1: string, param2: string);
						public url(): string;
						public title(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module ConversationMessageAttachmentLinkAction {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ConversationParticipant {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipant>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public fragments(): com.iadvize.conversation.sdk.fragment.ConversationParticipant.Fragments;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationParticipant.Fragments);
						public toString(): string;
					}
					export module ConversationParticipant {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipant.Fragments>;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.Bot, param1: com.iadvize.conversation.sdk.fragment.Expert, param2: com.iadvize.conversation.sdk.fragment.IbbuManager, param3: com.iadvize.conversation.sdk.fragment.Professional, param4: com.iadvize.conversation.sdk.fragment.ThirdPartyAccount, param5: com.iadvize.conversation.sdk.fragment.Visitor);
							public thirdPartyAccount(): com.iadvize.conversation.sdk.fragment.ThirdPartyAccount;
							public hashCode(): number;
							public expert(): com.iadvize.conversation.sdk.fragment.Expert;
							public professional(): com.iadvize.conversation.sdk.fragment.Professional;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public bot(): com.iadvize.conversation.sdk.fragment.Bot;
							public ibbuManager(): com.iadvize.conversation.sdk.fragment.IbbuManager;
							public toString(): string;
							public equals(param0: any): boolean;
							public visitor(): com.iadvize.conversation.sdk.fragment.Visitor;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ConversationParticipant.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipant.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ConversationParticipant.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ConversationParticipant> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipant.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class Expert {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Expert>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Expert {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.Expert> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Expert.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.Expert;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class FileAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public __typename(): string;
						public url(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public fileName(): string;
						public mimeType(): string;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module FileAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.FileAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.FileAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class FileBundleAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment>);
						public attachments(): java.util.List<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module FileBundleAttachment {
						export class Attachment {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment>;
							public __typename(): string;
							public hashCode(): number;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Fragments);
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public fragments(): com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Fragments;
							public equals(param0: any): boolean;
						}
						export module Attachment {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Fragments>;
								public fileAttachment(): com.iadvize.conversation.sdk.fragment.FileAttachment;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.FileAttachment);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment;
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.FileBundleAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.FileBundleAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class IbbuManager {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.IbbuManager>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module IbbuManager {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.IbbuManager> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.IbbuManager.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.IbbuManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ImageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ImageAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public __typename(): string;
						public url(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public fileName(): string;
						public mimeType(): string;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module ImageAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ImageAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ImageAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ImageAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class LinkAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.LinkAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public constructor(param0: string, param1: string, param2: string);
						public url(): string;
						public title(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module LinkAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.LinkAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.LinkAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.LinkAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class OfferAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.OfferAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public description(): string;
						public title(): string;
						public url(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
						public imageUrl(): string;
						public toString(): string;
					}
					export module OfferAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.OfferAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.OfferAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.OfferAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ParticipantConversationMessage {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public sentAs(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs;
						public text(): string;
						public attachments(): java.util.List<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public messageId(): string;
						public author(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author;
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: java.util.Date, param4: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author, param5: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs, param6: java.util.List<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment>);
						public createdAt(): java.util.Date;
					}
					export module ParticipantConversationMessage {
						export class Attachment {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment>;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Fragments);
							public __typename(): string;
							public hashCode(): number;
							public fragments(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Fragments;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Attachment {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Fragments>;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public participantConversationMessageAttachment(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment;
								public constructor();
							}
						}
						export class Author {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author>;
							public __typename(): string;
							public hashCode(): number;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Fragments);
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public fragments(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Fragments;
							public equals(param0: any): boolean;
						}
						export module Author {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Fragments>;
								public toString(): string;
								public conversationParticipant(): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationParticipant);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author;
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage;
						}
						export class SentAs {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs>;
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public fragments(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Fragments;
							public toString(): string;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Fragments);
							public equals(param0: any): boolean;
						}
						export module SentAs {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Fragments>;
								public toString(): string;
								public conversationParticipant(): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationParticipant);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ParticipantConversationMessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public fragments(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Fragments;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Fragments);
						public toString(): string;
					}
					export module ParticipantConversationMessageAttachment {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Fragments>;
							public productOfferBundleAttachment(): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment;
							public hashCode(): number;
							public productAttachment(): com.iadvize.conversation.sdk.fragment.ProductAttachment;
							public productOfferAttachment(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment;
							public cardAttachment(): com.iadvize.conversation.sdk.fragment.CardAttachment;
							public linkAttachment(): com.iadvize.conversation.sdk.fragment.LinkAttachment;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public quickReplyMenuAttachment(): com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment;
							public unsupportedAttachment(): com.iadvize.conversation.sdk.fragment.UnsupportedAttachment;
							public imageAttachment(): com.iadvize.conversation.sdk.fragment.ImageAttachment;
							public cardBundleAttachment(): com.iadvize.conversation.sdk.fragment.CardBundleAttachment;
							public fileBundleAttachment(): com.iadvize.conversation.sdk.fragment.FileBundleAttachment;
							public offerAttachment(): com.iadvize.conversation.sdk.fragment.OfferAttachment;
							public fileAttachment(): com.iadvize.conversation.sdk.fragment.FileAttachment;
							public equals(param0: any): boolean;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.CardAttachment, param1: com.iadvize.conversation.sdk.fragment.CardBundleAttachment, param2: com.iadvize.conversation.sdk.fragment.FileAttachment, param3: com.iadvize.conversation.sdk.fragment.FileBundleAttachment, param4: com.iadvize.conversation.sdk.fragment.ImageAttachment, param5: com.iadvize.conversation.sdk.fragment.LinkAttachment, param6: com.iadvize.conversation.sdk.fragment.OfferAttachment, param7: com.iadvize.conversation.sdk.fragment.ProductAttachment, param8: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment, param9: com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment, param10: com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment, param11: com.iadvize.conversation.sdk.fragment.UnsupportedAttachment);
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ProductAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public productUrl(): string;
						public priceText(): string;
						public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string, param5: string, param6: string);
						public title(): string;
						public isAvailable(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public promotionPriceText(): string;
						public imageUrl(): string;
						public toString(): string;
					}
					export module ProductAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ProductOfferAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public title(): string;
						public actions(): java.util.List<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action>;
						public isAvailable(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public __typename(): string;
						public priceText(): string;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: java.util.List<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action>);
						public offerPriceText(): string;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public optionalDescription(): string;
						public image(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image;
					}
					export module ProductOfferAttachment {
						export class Action {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action>;
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
							public fragments(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Fragments;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Fragments);
						}
						export module Action {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Fragments>;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public conversationMessageAttachmentLinkAction(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction;
								public equals(param0: any): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction);
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action.Mapper>;
								public constructor();
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action;
							}
						}
						export class Image {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image>;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Fragments);
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
							public fragments(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Fragments;
						}
						export module Image {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Fragments>;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink);
								public equals(param0: any): boolean;
								public conversationMessageAttachmentImageLink(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink;
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ProductOfferBundleAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer>);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public productOffers(): java.util.List<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer>;
					}
					export module ProductOfferBundleAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment;
						}
						export class ProductOffer {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer>;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Fragments);
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public fragments(): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Fragments;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module ProductOffer {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Fragments>;
								public toString(): string;
								public productOfferAttachment(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment);
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class Professional {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Professional>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Professional {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.Professional> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Professional.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.Professional;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class QuickReplyMenuAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public message(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: string, param2: java.util.List<string>);
						public toString(): string;
						public choices(): java.util.List<string>;
					}
					export module QuickReplyMenuAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class SystemConversationMessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Fragments);
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public fragments(): com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Fragments;
						public toString(): string;
					}
					export module SystemConversationMessageAttachment {
						export class Fragments {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Fragments>;
							public hashCode(): number;
							public constructor(param0: com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment, param1: com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment);
							public automaticMessageSentSystemAttachment(): com.iadvize.conversation.sdk.fragment.AutomaticMessageSentSystemAttachment;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public unsupportedSystemMessageAttachment(): com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment;
							public equals(param0: any): boolean;
						}
						export module Fragments {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Fragments> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Fragments.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Fragments;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class SystemMessage {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public constructor(param0: string, param1: java.util.UUID, param2: java.util.Date, param3: java.util.List<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment>);
						public systemMessageId(): java.util.UUID;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public createdAt(): java.util.Date;
						public attachments(): java.util.List<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment>;
					}
					export module SystemMessage {
						export class Attachment {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment>;
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public fragments(): com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Fragments;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Fragments);
							public equals(param0: any): boolean;
						}
						export module Attachment {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Fragments>;
								public toString(): string;
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment);
								public equals(param0: any): boolean;
								public systemConversationMessageAttachment(): com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment;
								public hashCode(): number;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.SystemMessage> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.SystemMessage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class ThirdPartyAccount {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ThirdPartyAccount>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module ThirdPartyAccount {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.ThirdPartyAccount> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ThirdPartyAccount.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.ThirdPartyAccount;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class UnsupportedAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public _unusedField(): java.lang.Boolean;
						public constructor(param0: string, param1: java.lang.Boolean);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module UnsupportedAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.UnsupportedAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.UnsupportedAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class UnsupportedSystemMessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public _unusedField(): java.lang.Boolean;
						public constructor(param0: string, param1: java.lang.Boolean);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module UnsupportedSystemMessageAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class VideoAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VideoAttachment>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public description(): string;
						public constructor(param0: string, param1: string, param2: string);
						public url(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
					}
					export module VideoAttachment {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.VideoAttachment> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VideoAttachment.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.VideoAttachment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class Visitor {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Visitor>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Visitor {
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.Visitor> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Visitor.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.Visitor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module fragment {
					export class VisitorMessages {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages>;
						public static FRAGMENT_DEFINITION: string;
						public __typename(): string;
						public edges(): java.util.List<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
						public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge>);
						public toString(): string;
					}
					export module VisitorMessages {
						export class Edge {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge>;
							public __typename(): string;
							public hashCode(): number;
							public node(): com.iadvize.conversation.sdk.fragment.VisitorMessages.Node;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages.Node);
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Edge {
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge;
								public constructor();
							}
						}
						export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.VisitorMessages> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Mapper>;
							public constructor();
							public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.VisitorMessages;
						}
						export class Node {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node>;
							public fragments(): com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Fragments;
							public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Fragments);
							public __typename(): string;
							public hashCode(): number;
							public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Node {
							export class Fragments {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Fragments>;
								public toString(): string;
								public constructor(param0: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage);
								public marshaller(): com.apollographql.apollo.api.internal.ResponseFieldMarshaller;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public participantConversationMessage(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage;
							}
							export module Fragments {
								export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Fragments> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Fragments.Mapper>;
									public constructor();
									public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Fragments;
								}
							}
							export class Mapper extends com.apollographql.apollo.api.internal.ResponseFieldMapper<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node.Mapper>;
								public map(param0: com.apollographql.apollo.api.internal.ResponseReader): com.iadvize.conversation.sdk.fragment.VisitorMessages.Node;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export class IAdvizeSDKCallback {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.model.IAdvizeSDKCallback>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation.sdk.model.IAdvizeSDKCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(): void;
							onFailure(param0: java.lang.Throwable): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onSuccess(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export class SdkActivationError {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.model.SdkActivationError>;
						public getMessage(): string;
						public constructor(param0: com.iadvize.conversation.sdk.model.SdkActivationErrorReason);
						public getReason(): com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export class SdkActivationErrorReason {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.model.SdkActivationErrorReason>;
						public static INVALID_PROJECT_ID: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
						public static INVALID_AUTH_VUID: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
						public static INVALID_AUTH_USER_ID: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
						public static REQUEST_TOKEN_ERROR: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.model.SdkActivationErrorReason>;
						public getDescription(): string;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module attachments {
						export class AttachmentUrls {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.attachments.AttachmentUrls>;
							public setWriteUrl(param0: string): void;
							public component2(): string;
							public getWriteUrl(): string;
							public copy(param0: string, param1: string): com.iadvize.conversation.sdk.model.attachments.AttachmentUrls;
							public setReadUrl(param0: string): void;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
							public getReadUrl(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module attachments {
						export class UploadFile {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.attachments.UploadFile>;
							public component2(): string;
							public getUri(): globalAndroid.net.Uri;
							public hashCode(): number;
							public component5(): number;
							public component1(): globalAndroid.net.Uri;
							public toString(): string;
							public copy(param0: globalAndroid.net.Uri, param1: string, param2: string, param3: string, param4: number): com.iadvize.conversation.sdk.model.attachments.UploadFile;
							public component3(): string;
							public constructor(param0: globalAndroid.net.Uri, param1: string, param2: string, param3: string, param4: number);
							public getPath(): string;
							public getSize(): number;
							public getMimeType(): string;
							public getFileName(): string;
							public component4(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module attachments {
						export class UploadManagerKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.attachments.UploadManagerKt>;
							public static await(param0: okhttp3.Call, param1: kotlin.coroutines.Continuation<any>): any;
							public static uploadFile(param0: string, param1: string, param2: androidNative.Array<number>, param3: kotlin.coroutines.Continuation<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module auth {
						export abstract class AuthenticationOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption>;
							public static Companion: com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Companion;
						}
						export module AuthenticationOption {
							export class Anonymous extends com.iadvize.conversation.sdk.model.auth.AuthenticationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Anonymous>;
								public constructor();
							}
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Companion>;
								public fromJson(param0: string, param1: number): com.iadvize.conversation.sdk.model.auth.AuthenticationOption;
							}
							export class Simple extends com.iadvize.conversation.sdk.model.auth.AuthenticationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Simple>;
								public getUserId(): string;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module auth {
						export class JWT {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.JWT>;
							public getRawString(): string;
							public constructor(param0: string);
							public getPayload(): com.iadvize.conversation.sdk.model.auth.JWT.JWTPayload;
							public getSignature(): string;
							public getHeader(): com.iadvize.conversation.sdk.model.auth.JWT.JWTHeader;
						}
						export module JWT {
							export class JWTHeader {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.JWT.JWTHeader>;
								public component1(): string;
								public copy(param0: string): com.iadvize.conversation.sdk.model.auth.JWT.JWTHeader;
								public toString(): string;
								public equals(param0: any): boolean;
								public getAlgorithm(): string;
								public constructor();
								public constructor(param0: string);
								public hashCode(): number;
							}
							export class JWTPayload {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.JWT.JWTPayload>;
								public getWebsiteId(): number;
								public toString(): string;
								public component7(): number;
								public getVuid(): string;
								public component5(): number;
								public equals(param0: any): boolean;
								public component4(): string;
								public constructor();
								public copy(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: number): com.iadvize.conversation.sdk.model.auth.JWT.JWTPayload;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: number);
								public getIss(): string;
								public component2(): string;
								public getExp(): number;
								public component1(): string;
								public getProfileId(): string;
								public getIat(): number;
								public getJid(): string;
								public component6(): number;
								public component3(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module auth {
						export class JWTTokenListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.JWTTokenListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.model.auth.JWTTokenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onJWTTokenExpired(): void;
							});
							public constructor();
							public onJWTTokenExpired(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module configuration {
						export class ChatButtonPosition {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition>;
							public setBottomMargin(param0: number): void;
							public copy(param0: number, param1: number): com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition;
							public setLeftMargin(param0: number): void;
							public component1(): number;
							public constructor(param0: number, param1: number);
							public getLeftMargin(): number;
							public hashCode(): number;
							public getBottomMargin(): number;
							public component2(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module configuration {
						export class ChatboxConfiguration {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration>;
							public hashCode(): number;
							public getToolbarBackgroundColor(): java.lang.Integer;
							public setMainColor(param0: number): void;
							public getGdprMessage(): string;
							public toString(): string;
							public setFontPath(param0: string): void;
							public component3(): string;
							public setToolbarBackgroundColor(param0: java.lang.Integer): void;
							public constructor(param0: number, param1: string, param2: string);
							public constructor(param0: number, param1: string, param2: string, param3: string);
							public component6(): java.lang.Integer;
							public getToolbarMainColor(): java.lang.Integer;
							public setToolbarTitle(param0: string): void;
							public component7(): java.lang.Integer;
							public getFontPath(): string;
							public setGdprMessage(param0: string): void;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer);
							public component2(): string;
							public setIncomingMessageAvatar(param0: com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar): void;
							public getAutomaticMessage(): string;
							public component5(): string;
							public component8(): com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar;
							public getMainColor(): number;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);
							public constructor(param0: number);
							public copy(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar);
							public setAutomaticMessage(param0: string): void;
							public component1(): number;
							public getIncomingMessageAvatar(): com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar;
							public setToolbarMainColor(param0: java.lang.Integer): void;
							public component4(): string;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer);
							public getToolbarTitle(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export class Conversation {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.Conversation>;
							public constructor();
							public getDateFromFirstVisitorMessage$sdk_haRelease(): java.util.Date;
							public getMessages(): java.util.List<com.iadvize.conversation_ui.models.Message>;
							public clear(): void;
							public reset(param0: java.util.List<any>): void;
							public add(param0: com.iadvize.conversation_ui.models.Message): void;
							public update$sdk_haRelease(param0: com.iadvize.conversation_ui.models.Message): com.iadvize.conversation_ui.models.Message;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export abstract class IncomingMessageAvatar {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar>;
							public toSenderAvatar(): com.iadvize.conversation_ui.models.SenderAvatar;
						}
						export module IncomingMessageAvatar {
							export class Image extends com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar.Image>;
								public constructor(param0: globalAndroid.graphics.drawable.Drawable);
								public getValue(): globalAndroid.graphics.drawable.Drawable;
							}
							export class Url extends com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar.Url>;
								public getValue(): java.net.URL;
								public constructor(param0: java.net.URL);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export abstract class LocalOperatorMessage {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage>;
							public static Companion: com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.Companion;
							public static AUTHOR_ID: number;
						}
						export module LocalOperatorMessage {
							export class Automatic extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.Automatic>;
								public static Companion: com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.Automatic.Companion;
								public static MESSAGE_ID: number;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public getContent(): string;
								public getCreatedAt(): java.util.Date;
								public constructor(param0: string, param1: java.util.Date);
							}
							export module Automatic {
								export class Companion {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.Automatic.Companion>;
								}
							}
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.Companion>;
							}
							export class GDPRConsentKO extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRConsentKO>;
								public static Companion: com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRConsentKO.Companion;
								public static MESSAGE_ID: number;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public getContent(): string;
								public getCreatedAt(): java.util.Date;
								public constructor(param0: string, param1: java.util.Date);
							}
							export module GDPRConsentKO {
								export class Companion {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRConsentKO.Companion>;
								}
							}
							export class GDPRConsentOK extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRConsentOK>;
								public static Companion: com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRConsentOK.Companion;
								public static MESSAGE_ID: number;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public getContent(): string;
								public getCreatedAt(): java.util.Date;
								public constructor(param0: string, param1: java.util.Date);
							}
							export module GDPRConsentOK {
								export class Companion {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRConsentOK.Companion>;
								}
							}
							export class GDPRQuestion extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRQuestion>;
								public static Companion: com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRQuestion.Companion;
								public static MESSAGE_ID: number;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public getContent(): string;
								public constructor(param0: string, param1: androidNative.Array<string>);
								public getChoices(): androidNative.Array<string>;
							}
							export module GDPRQuestion {
								export class Companion {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.GDPRQuestion.Companion>;
								}
							}
							export class ProactiveBotTypingMessage extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.ProactiveBotTypingMessage>;
								public static Companion: com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.ProactiveBotTypingMessage.Companion;
								public static MESSAGE_ID: number;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public constructor();
							}
							export module ProactiveBotTypingMessage {
								export class Companion {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalOperatorMessage.ProactiveBotTypingMessage.Companion>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export abstract class LocalVisitorMessage {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalVisitorMessage>;
						}
						export module LocalVisitorMessage {
							export class Attachment extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalVisitorMessage.Attachment>;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment);
							}
							export class Text extends com.iadvize.conversation_ui.models.Message {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.LocalVisitorMessage.Text>;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
								public getContent(): string;
								public getCreatedAt(): java.util.Date;
								public getState(): com.iadvize.conversation_ui.models.MessageState;
								public constructor(param0: string, param1: com.iadvize.conversation_ui.models.MessageState, param2: java.util.Date);
								public setState(param0: com.iadvize.conversation_ui.models.MessageState): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export class MessageExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.MessageExtensionsKt>;
							public static update(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean): com.iadvize.conversation_ui.models.Message;
							public static updateAttachmentUrl(param0: com.iadvize.conversation_ui.models.MessageKind, param1: string): com.iadvize.conversation_ui.models.MessageKind;
							public static textDescription(param0: com.iadvize.conversation_ui.models.Message): string;
							public static toFileExtension(param0: com.iadvize.conversation_ui.models.MessageAttachment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension;
							public static mimeType(param0: com.iadvize.conversation_ui.models.MessageAttachment): string;
							public static content(param0: com.iadvize.conversation_ui.models.Message): string;
							public static attachments(param0: com.iadvize.conversation_ui.models.Message): java.util.ArrayList<com.iadvize.conversation_ui.models.MessageAttachment>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export class MessageMapperKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.MessageMapperKt>;
							public static graphqlToMessageCard(param0: com.iadvize.conversation.sdk.fragment.CardAttachment): com.iadvize.conversation_ui.models.MessageAttachment.Card;
							public static graphqlToMessageAction(param0: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action): com.iadvize.conversation_ui.models.MessageAttachment.Action;
							public static graphqlToMessageProductOffer(param0: com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer;
							public static graphqlToUiAttachments(param0: java.util.List<any>): java.util.ArrayList<com.iadvize.conversation_ui.models.MessageAttachment>;
							public static graphqlToMessageCard(param0: com.iadvize.conversation.sdk.fragment.OfferAttachment): com.iadvize.conversation_ui.models.MessageAttachment.Card;
							public static graphqlToMessageImage(param0: com.iadvize.conversation.sdk.fragment.CardAttachment.Image): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
							public static graphqlToMessageProductOffer(param0: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer;
							public static graphqlToMessageImage(param0: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
							public static xmppToUiMessage(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension, param1: string): com.iadvize.conversation_ui.models.Message;
							public static graphqlToMessageCard(param0: com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card): com.iadvize.conversation_ui.models.MessageAttachment.Card;
							public static graphqlToUiMessages(param0: java.util.List<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge>): java.util.ArrayList<com.iadvize.conversation_ui.models.Message>;
							public static graphqlToMessageAction(param0: com.iadvize.conversation.sdk.fragment.CardAttachment.Action): com.iadvize.conversation_ui.models.MessageAttachment.Action;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export abstract class MessageSender {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.MessageSender>;
							public static Companion: com.iadvize.conversation.sdk.model.conversation.MessageSender.Companion;
						}
						export module MessageSender {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.MessageSender.Companion>;
								public fromTypeName(param0: string): com.iadvize.conversation_ui.models.Sender;
								public fromId(param0: string): com.iadvize.conversation_ui.models.Sender;
							}
							export class Operator extends com.iadvize.conversation_ui.models.Sender {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.MessageSender.Operator>;
								public constructor(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.SenderAvatar, param3: com.iadvize.conversation_ui.models.SenderAlignment);
								public constructor(param0: string);
							}
							export class Visitor extends com.iadvize.conversation_ui.models.Sender {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.MessageSender.Visitor>;
								public constructor(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.SenderAvatar, param3: com.iadvize.conversation_ui.models.SenderAlignment);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module conversation {
						export class UnsentAttachmentMessage extends com.iadvize.conversation_ui.models.Message {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.UnsentAttachmentMessage>;
							public getData(): androidNative.Array<number>;
							public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
							public constructor(param0: com.iadvize.conversation_ui.models.Message, param1: androidNative.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module gdpr {
						export abstract class GDPREnabledOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption>;
						}
						export module GDPREnabledOption {
							export class LegalUrl extends com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption.LegalUrl>;
								public getLegalInformationURI(): java.net.URI;
								public constructor(param0: java.net.URI);
							}
							export class Listener extends com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption.Listener>;
								public getListener(): com.iadvize.conversation.sdk.model.gdpr.GDPRListener;
								public constructor(param0: com.iadvize.conversation.sdk.model.gdpr.GDPRListener);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module gdpr {
						export class GDPRListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPRListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.model.gdpr.GDPRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								didTapMoreInformation(): void;
							});
							public constructor();
							public didTapMoreInformation(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module gdpr {
						export abstract class GDPROption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPROption>;
						}
						export module GDPROption {
							export class Disabled extends com.iadvize.conversation.sdk.model.gdpr.GDPROption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPROption.Disabled>;
								public constructor();
							}
							export class Enabled extends com.iadvize.conversation.sdk.model.gdpr.GDPROption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPROption.Enabled>;
								public getOption(): com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption;
								public constructor(param0: com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export class ApolloCallback<T>  extends com.apollographql.apollo.ApolloCall.Callback<any> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.ApolloCallback<any>>;
							public static Companion: com.iadvize.conversation.sdk.model.graphql.ApolloCallback.Companion;
							public constructor(param0: com.apollographql.apollo.ApolloCall.Callback<any>, param1: globalAndroid.os.Handler);
							public onParseError(param0: com.apollographql.apollo.exception.ApolloParseException): void;
							public onStatusEvent(param0: com.apollographql.apollo.ApolloCall.StatusEvent): void;
							public onResponse(param0: com.apollographql.apollo.api.Response<any>): void;
							public onNetworkError(param0: com.apollographql.apollo.exception.ApolloNetworkException): void;
							public getDelegate$sdk_haRelease(): com.apollographql.apollo.ApolloCall.Callback<any>;
							public onFailure(param0: com.apollographql.apollo.exception.ApolloException): void;
							public onHttpError(param0: com.apollographql.apollo.exception.ApolloHttpException): void;
						}
						export module ApolloCallback {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.ApolloCallback.Companion>;
								public wrap(param0: com.apollographql.apollo.ApolloCall.Callback, param1: globalAndroid.os.Handler): com.iadvize.conversation.sdk.model.graphql.ApolloCallback<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export class ApolloDateAdapter extends com.apollographql.apollo.api.CustomTypeAdapter<java.util.Date> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.ApolloDateAdapter>;
							public static Companion: com.iadvize.conversation.sdk.model.graphql.ApolloDateAdapter.Companion;
							public constructor();
							public decode(param0: com.apollographql.apollo.api.CustomTypeValue<any>): java.util.Date;
							public encode(param0: java.util.Date): com.apollographql.apollo.api.CustomTypeValue<any>;
						}
						export module ApolloDateAdapter {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.ApolloDateAdapter.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export class ApolloURLAdapter extends com.apollographql.apollo.api.CustomTypeAdapter<string> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.ApolloURLAdapter>;
							public constructor();
							public decode(param0: com.apollographql.apollo.api.CustomTypeValue<any>): string;
							public encode(param0: string): com.apollographql.apollo.api.CustomTypeValue<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export class ApolloUUIDAdapter extends com.apollographql.apollo.api.CustomTypeAdapter<java.util.UUID> {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.ApolloUUIDAdapter>;
							public constructor();
							public decode(param0: com.apollographql.apollo.api.CustomTypeValue<any>): java.util.UUID;
							public encode(param0: java.util.UUID): com.apollographql.apollo.api.CustomTypeValue<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export class GraphQLApi {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.GraphQLApi>;
							public constructor();
							public enablePushToken(param0: kotlin.coroutines.Continuation<any>): any;
							public getVisitorMessages(param0: string, param1: kotlin.coroutines.Continuation<any>): any;
							public sendGDPRConsent(param0: boolean, param1: kotlin.coroutines.Continuation<any>): any;
							public refreshVisitorToken(param0: kotlin.coroutines.Continuation<any>): any;
							public disablePushToken(param0: kotlin.coroutines.Continuation<any>): any;
							public registerTransaction(param0: com.iadvize.conversation.sdk.model.transaction.Transaction, param1: kotlin.coroutines.Continuation<any>): any;
							public registerPushToken(param0: kotlin.coroutines.Continuation<any>): any;
							public sendEvent(param0: com.iadvize.conversation.sdk.type.SDKEventInput, param1: kotlin.coroutines.Continuation<any>): any;
							public createConversation(param0: string, param1: kotlin.coroutines.Continuation<any>): any;
							public getOngoingConversationId(param0: kotlin.coroutines.Continuation<any>): any;
							public getGDPRConsent(param0: kotlin.coroutines.Continuation<any>): any;
							public triggerTargetingRule(param0: java.util.UUID, param1: string, param2: kotlin.coroutines.Continuation<any>): any;
							public getAttachmentUrls(param0: com.iadvize.conversation_ui.models.MessageAttachment, param1: kotlin.coroutines.Continuation<any>): any;
							public authenticateVisitor(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption, param2: kotlin.coroutines.Continuation<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export module interceptors {
							export class AddPreviewInterceptor {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.interceptors.AddPreviewInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export module interceptors {
							export class AddTokenInterceptor {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.interceptors.AddTokenInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export module interceptors {
							export class AddVersionInterceptor {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.interceptors.AddVersionInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module graphql {
						export module interceptors {
							export class RefreshTokenInterceptor {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.graphql.interceptors.RefreshTokenInterceptor>;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module language {
						export abstract class SDKLanguageOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.language.SDKLanguageOption>;
						}
						export module SDKLanguageOption {
							export class Custom extends com.iadvize.conversation.sdk.model.language.SDKLanguageOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.language.SDKLanguageOption.Custom>;
								public constructor(param0: com.iadvize.conversation.sdk.type.Language);
								public getValue(): com.iadvize.conversation.sdk.type.Language;
							}
							export class Default extends com.iadvize.conversation.sdk.model.language.SDKLanguageOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.language.SDKLanguageOption.Default>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module preferences {
						export class PreferencesManager {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.preferences.PreferencesManager>;
							public static INSTANCE: com.iadvize.conversation.sdk.model.preferences.PreferencesManager;
							public static DEFAULT_INT_VALUE: number;
							public static securedPreferences: globalAndroid.content.SharedPreferences;
							public initPreferences(param0: globalAndroid.content.Context): void;
							public find(param0: string, param1: any): any;
							public getSecuredPreferences(): globalAndroid.content.SharedPreferences;
							public setSecuredPreferences(param0: globalAndroid.content.SharedPreferences): void;
							public findSet(param0: string): java.util.Set<string>;
							public find(param0: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences, param1: any): any;
							public put(param0: string, param1: any): void;
							public put(param0: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences, param1: any): void;
							public put(param0: string, param1: java.util.Set<string>): void;
							public remove(param0: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences): void;
							public remove(param0: string): void;
						}
						export module PreferencesManager {
							export class Preferences {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences>;
								public static projectId: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static currentText: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static gdprConsent: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static authenticationOption: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static pushToken: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static visitorName: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static visitorJwtToken: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static visitorVuid: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static authenticationOptionType: com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
								public static values(): androidNative.Array<com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences>;
								public getRemoveOnClear(): boolean;
								public getKey(): string;
								public static valueOf(param0: string): com.iadvize.conversation.sdk.model.preferences.PreferencesManager.Preferences;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module provider {
						export class IAdvizeConversationFileProvider {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.provider.IAdvizeConversationFileProvider>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module tracking {
						export class TrackingManagerKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.tracking.TrackingManagerKt>;
							public static conversationReduced(): com.iadvize.conversation.sdk.type.SDKEventInput;
							public static chatButtonTouched(): com.iadvize.conversation.sdk.type.SDKEventInput;
							public static notificationTouched(): com.iadvize.conversation.sdk.type.SDKEventInput;
							public static moreInformationTouched(): com.iadvize.conversation.sdk.type.SDKEventInput;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module transaction {
						export class Transaction {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.transaction.Transaction>;
							public copy(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency): com.iadvize.conversation.sdk.model.transaction.Transaction;
							public hashCode(): number;
							public getId(): string;
							public getAmount(): number;
							public setAmount(param0: number): void;
							public setId(param0: string): void;
							public toString(): string;
							public component4(): com.iadvize.conversation.sdk.type.Currency;
							public component1(): string;
							public setDate(param0: java.util.Date): void;
							public setCurrency(param0: com.iadvize.conversation.sdk.type.Currency): void;
							public component3(): number;
							public constructor(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency);
							public component2(): java.util.Date;
							public equals(param0: any): boolean;
							public getCurrency(): com.iadvize.conversation.sdk.type.Currency;
							public getDate(): java.util.Date;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module user {
						export class User {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.user.User>;
							public copy(param0: string): com.iadvize.conversation.sdk.model.user.User;
							public hashCode(): number;
							public constructor(param0: string);
							public getName(): string;
							public setName(param0: string): void;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module visitorcustomdata {
						export abstract class VisitorCustomData {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData>;
						}
						export module VisitorCustomData {
							export class VisitorCustomDataBoolean extends com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData.VisitorCustomDataBoolean>;
								public getValue(): boolean;
								public constructor(param0: boolean);
							}
							export class VisitorCustomDataDouble extends com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData.VisitorCustomDataDouble>;
								public constructor(param0: number);
								public getValue(): number;
							}
							export class VisitorCustomDataInt extends com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData.VisitorCustomDataInt>;
								public constructor(param0: number);
								public getValue(): number;
							}
							export class VisitorCustomDataString extends com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomData.VisitorCustomDataString>;
								public constructor(param0: string);
								public getValue(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module visitorcustomdata {
						export class VisitorCustomDataListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomDataListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.model.visitorcustomdata.VisitorCustomDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAddVisitorCustomDataFailure(param0: java.lang.Throwable): void;
								onVisitorCustomDataSuccess(): void;
							});
							public constructor();
							public onAddVisitorCustomDataFailure(param0: java.lang.Throwable): void;
							public onVisitorCustomDataSuccess(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module connection {
							export class ConnectionStatusObserver {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver>;
								public static INSTANCE: com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver;
								public isConnectedToNetwork(): boolean;
								public isConnectedToXmpp(): boolean;
								public onXmppConnectionStateUpdateEvent(param0: com.iadvize.conversation.sdk.model.xmpp.connection.events.XmppConnectionStateUpdateEvent): void;
								public getStatus(): com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
								public initConnectionStatusObserver(param0: globalAndroid.content.Context): void;
								public release(): void;
								public isConnectedToWifi(): boolean;
								public onNetworkConnectionStateUpdate(param0: com.iadvize.conversation.sdk.utils.network.NetworkConnectionStateUpdateEvent): void;
							}
							export module ConnectionStatusObserver {
								export class Status {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status>;
									public static DISCONNECTED: com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
									public static CONNECTING: com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
									public static CONNECTED: com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
									public static values(): androidNative.Array<com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status>;
									public static valueOf(param0: string): com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module connection {
							export module events {
								export class ConnectionStatusUpdateEvent {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.connection.events.ConnectionStatusUpdateEvent>;
									public component1(): com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public toString(): string;
									public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status);
									public copy(param0: com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status): com.iadvize.conversation.sdk.model.xmpp.connection.events.ConnectionStatusUpdateEvent;
									public getStatus(): com.iadvize.conversation.sdk.model.xmpp.connection.ConnectionStatusObserver.Status;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module connection {
							export module events {
								export class XmppConnectionStateUpdateEvent {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.connection.events.XmppConnectionStateUpdateEvent>;
									public hashCode(): number;
									public getConnected(): boolean;
									public component2(): boolean;
									public equals(param0: any): boolean;
									public getFromManualAction(): boolean;
									public toString(): string;
									public constructor(param0: boolean, param1: boolean);
									public component1(): boolean;
									public copy(param0: boolean, param1: boolean): com.iadvize.conversation.sdk.model.xmpp.connection.events.XmppConnectionStateUpdateEvent;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module connection {
							export module exceptions {
								export class ConnectionExceptionsKt {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.connection.exceptions.ConnectionExceptionsKt>;
									public static isConnectionException(param0: java.lang.Exception): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module connection {
							export module exceptions {
								export class InvalidJwtException {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.connection.exceptions.InvalidJwtException>;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module exceptions {
								export class InvalidConversationException {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.exceptions.InvalidConversationException>;
									public constructor(param0: string);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module exceptions {
								export class InvalidVisitorSubscription {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.exceptions.InvalidVisitorSubscription>;
									public constructor(param0: string);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export class DirectMessageListener {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.DirectMessageListener>;
									public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.DirectMessageListener.DirectMessageReceivedListener);
									public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
								}
								export module DirectMessageListener {
									export class DirectMessageReceivedListener {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.DirectMessageListener.DirectMessageReceivedListener>;
										/**
										 * Constructs a new instance of the com.iadvize.conversation.sdk.model.xmpp.conversation.messages.DirectMessageListener$DirectMessageReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											onRoutingOperatorNotFound(): void;
										});
										public constructor();
										public onRoutingOperatorNotFound(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export class MucSubMessageExtension {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension>;
									public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension.Companion;
									public static ID_ATTRIBUTE: string;
									public static TO_ATTRIBUTE: string;
									public static FROM_ATTRIBUTE: string;
									public static TYPE_ATTRIBUTE: string;
									public getType(): org.jivesoftware.smack.packet.Message.Type;
									public getElementName(): string;
									public getId(): string;
									public getTo(): string;
									public getExtensions(): java.util.List<any>;
									public toString(): string;
									public getFromResource(): string;
									public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
									public constructor(param0: java.util.Map<string,string>, param1: java.util.List<any>);
									public getFrom(): string;
									public getNamespace(): string;
								}
								export module MucSubMessageExtension {
									export class Companion {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension.Companion>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export class MucSubMessageExtensionListener {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionListener>;
									public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionListener.MessageReceivedListener);
									public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
								}
								export module MucSubMessageExtensionListener {
									export class MessageReceivedListener {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionListener.MessageReceivedListener>;
										/**
										 * Constructs a new instance of the com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionListener$MessageReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											onMucSubMessageExtensionReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension): void;
											onSubscribeReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension, param1: string): void;
											onUnsubscribeReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension, param1: string): void;
										});
										public constructor();
										public onSubscribeReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension, param1: string): void;
										public onUnsubscribeReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension, param1: string): void;
										public onMucSubMessageExtensionReceived(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export class MucSubMessageExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionProvider>;
									public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionProvider.Companion;
									public constructor();
									public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtension;
								}
								export module MucSubMessageExtensionProvider {
									export class Companion {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.MucSubMessageExtensionProvider.Companion>;
										public add(): void;
										public remove(): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ActionExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static TITLE_ELEMENT: string;
										public static URL_ELEMENT: string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public constructor(param0: string, param1: string);
										public getTitle(): string;
										public getNamespace(): string;
										public getUrl(): string;
									}
									export module ActionExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ActionExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtensionProvider.Companion;
										public constructor();
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension;
									}
									export module ActionExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ActionsExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public constructor(param0: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension>);
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public getActionExtensions(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionExtension>;
									}
									export module ActionsExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ActionsExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension;
									}
									export module ActionsExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ArchivedExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static ID_ATTRIBUTE: string;
										public static BY_ATTRIBUTE: string;
										public getId(): string;
										public getBy(): string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
									}
									export module ArchivedExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ArchivedExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtension;
										public constructor();
									}
									export module ArchivedExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ArchivedExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class AutomaticMessageEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtension.Companion;
										public static NAMESPACE: string;
										public static SENT_AS_ELEMENT: string;
										public static PARTICIPANT_ELEMENT: string;
										public static PARTICIPANT_NAMESPACE: string;
										public static JID_ATTRIBUTE: string;
										public getBody(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.SystemMessage;
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
										public getParticipantJid(): string;
									}
									export module AutomaticMessageEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class AutomaticMessageEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtension;
										public constructor();
									}
									export module AutomaticMessageEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.AutomaticMessageEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardBundleSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtension.Companion;
										public static NAMESPACE: string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public getCardExtensions(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension>;
										public constructor();
										public constructor(param0: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension>);
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
									}
									export module CardBundleSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardBundleSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtension;
									}
									export module CardBundleSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardBundleSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static TITLE_ELEMENT: string;
										public static TEXT_ELEMENT: string;
										public static STYLE_ELEMENT: string;
										public constructor();
										public getText(): string;
										public getNamespace(): string;
										public getCardImageExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension;
										public getExtensions(): java.util.List<any>;
										public getStyle(): string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.Card;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension, param4: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension, param5: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension);
										public getTitle(): string;
										public getCardVideoExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension;
										public getActionsExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension;
									}
									export module CardExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtensionProvider.Companion;
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension;
										public constructor();
									}
									export module CardExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardImageExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static URL_ELEMENT: string;
										public static DESCRIPTION_ELEMENT: string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public getDescription(): string;
										public constructor();
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
										public getUrl(): string;
									}
									export module CardImageExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardImageExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension;
										public constructor();
									}
									export module CardImageExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtension.Companion;
										public static NAMESPACE: string;
										public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension);
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getCardExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardExtension;
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
									}
									export module CardSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtension;
									}
									export module CardSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardVideoExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static URL_ELEMENT: string;
										public static DESCRIPTION_ELEMENT: string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public getDescription(): string;
										public constructor();
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
										public getUrl(): string;
									}
									export module CardVideoExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class CardVideoExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtensionProvider.Companion;
										public constructor();
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtension;
									}
									export module CardVideoExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardVideoExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ChoicesExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static CHOICE_ELEMENT: string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getNamespace(): string;
										public constructor(param0: java.util.List<string>);
										public getChoices(): java.util.List<string>;
									}
									export module ChoicesExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ChoicesExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtensionProvider.Companion;
										public constructor();
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension;
									}
									export module ChoicesExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ConversationClosedEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtension.Companion;
										public static NAMESPACE: string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getNamespace(): string;
									}
									export module ConversationClosedEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ConversationClosedEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtension;
										public constructor();
									}
									export module ConversationClosedEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ConversationClosedEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export abstract class EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension.Companion;
										public static ELEMENT: string;
										public static EVENT_PROTOCOL_ENDPOINT: string;
										public getElementName(): string;
										public constructor();
									}
									export module EventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class FileBundleSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtension.Companion;
										public static NAMESPACE: string;
										public getFileExtensions(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public constructor(param0: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>);
									}
									export module FileBundleSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class FileBundleSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtension;
									}
									export module FileBundleSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileBundleSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class FileExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension.Companion;
										public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static FILENAME_ELEMENT: string;
										public static MIME_TYPE_ELEMENT: string;
										public static URL_ELEMENT: string;
										public getElementName(): string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public describeContents(): number;
										public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
										public constructor();
										public getMimeType(): string;
										public getNamespace(): string;
										public getUrl(): string;
										public constructor(param0: string, param1: string, param2: string);
										public getFilename(): string;
									}
									export module FileExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension.Companion>;
										}
										export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension> {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension.Creator>;
											public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension;
											public newArray(param0: number): androidNative.Array<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>;
											public constructor();
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class FileExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension;
										public constructor();
									}
									export module FileExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class FileSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtension.Companion;
										public static NAMESPACE: string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension);
										public constructor();
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public getFileExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension;
									}
									export module FileSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class FileSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtensionProvider.Companion;
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtension;
										public constructor();
									}
									export module FileSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class LinkExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static NAME_ELEMENT: string;
										public static URL_ELEMENT: string;
										public getName(): string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.Text;
										public constructor();
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
										public getUrl(): string;
									}
									export module LinkExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class LinkExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtensionProvider.Companion;
										public constructor();
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension;
									}
									export module LinkExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class LinkSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtension.Companion;
										public static NAMESPACE: string;
										public getLinkExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.Text;
										public constructor();
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkExtension);
									}
									export module LinkSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class LinkSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtension;
									}
									export module LinkSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.LinkSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class OfferExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static IMAGE_ELEMENT: string;
										public static NAME_ELEMENT: string;
										public static DESCRIPTION_ELEMENT: string;
										public static URL_ELEMENT: string;
										public getName(): string;
										public getImage(): string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.Card;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public getDescription(): string;
										public constructor();
										public constructor(param0: string, param1: string, param2: string, param3: string);
										public getNamespace(): string;
										public getUrl(): string;
									}
									export module OfferExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class OfferExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension;
										public constructor();
									}
									export module OfferExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class OfferSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtension.Companion;
										public static NAMESPACE: string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.Card;
										public getOfferExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferExtension);
									}
									export module OfferSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class OfferSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtensionProvider.Companion;
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtension;
										public constructor();
									}
									export module OfferSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.OfferSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ProductOfferBundleSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtension.Companion;
										public static NAMESPACE: string;
										public constructor(param0: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension>);
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public getProductOfferExtensions(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension>;
									}
									export module ProductOfferBundleSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ProductOfferBundleSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtensionProvider.Companion;
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtension;
										public constructor();
									}
									export module ProductOfferBundleSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferBundleSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ProductOfferExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public static NAME_ELEMENT: string;
										public static PRICE_ELEMENT: string;
										public static OFFER_PRICE_ELEMENT: string;
										public static AVAILABILITY_ELEMENT: string;
										public static STATUS_ATTRIBUTE: string;
										public static DESCRIPTION_ELEMENT: string;
										public getName(): string;
										public getPrice(): string;
										public getDescription(): string;
										public constructor();
										public getNamespace(): string;
										public getCardImageExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension;
										public getExtensions(): java.util.List<any>;
										public getAvailability(): string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public getOfferPrice(): string;
										public getActionsExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.ProductOffer;
										public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.CardImageExtension, param6: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ActionsExtension);
									}
									export module ProductOfferExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ProductOfferExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtensionProvider.Companion;
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension;
										public constructor();
									}
									export module ProductOfferExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ProductOfferSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtension.Companion;
										public static NAMESPACE: string;
										public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension);
										public getProductOfferExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferExtension;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
									}
									export module ProductOfferSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class ProductOfferSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtension;
									}
									export module ProductOfferSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProductOfferSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export abstract class ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension.Companion;
										public static PROTOCOL_ENDPOINT: string;
										public constructor();
									}
									export module ProtocolExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class QuickRepliesExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ProtocolExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension.Companion;
										public static ELEMENT: string;
										public static NAMESPACE: string;
										public getChoicesExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage;
										public constructor();
										public constructor(param0: string, param1: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.ChoicesExtension);
										public getNamespace(): string;
										public getMessage(): string;
										public getExtensions(): java.util.List<any>;
									}
									export module QuickRepliesExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class QuickRepliesExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension;
									}
									export module QuickRepliesExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class QuickRepliesSentEventExtension extends com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.EventExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtension.Companion;
										public static NAMESPACE: string;
										public toMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor();
										public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension);
										public getNamespace(): string;
										public getExtensions(): java.util.List<any>;
										public getQuickRepliesExtension(): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesExtension;
									}
									export module QuickRepliesSentEventExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtension.Companion>;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class QuickRepliesSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtensionProvider.Companion;
										public constructor();
										public createReturnExtension(param0: string, param1: string, param2: java.util.Map<string,string>, param3: java.util.List<any>): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtension;
									}
									export module QuickRepliesSentEventExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.QuickRepliesSentEventExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class SubscribeExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension.Companion;
										public static NAMESPACE: string;
										public getNick(): string;
										public getJid(): string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
									}
									export module SubscribeExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension.Companion>;
											public getELEMENT(): string;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class SubscribeExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtension;
										public constructor();
									}
									export module SubscribeExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.SubscribeExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class UnsubscribeExtension {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension.Companion;
										public static NAMESPACE: string;
										public getNick(): string;
										public getJid(): string;
										public getElementName(): string;
										public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
										public constructor(param0: string, param1: string);
										public getNamespace(): string;
									}
									export module UnsubscribeExtension {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension.Companion>;
											public getELEMENT(): string;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module messages {
								export module extensions {
									export class UnsubscribeExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension> {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtensionProvider>;
										public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtensionProvider.Companion;
										public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtension;
										public constructor();
									}
									export module UnsubscribeExtensionProvider {
										export class Companion {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.UnsubscribeExtensionProvider.Companion>;
											public add(): void;
											public remove(): void;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module subscriptions {
								export class Event {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event>;
									public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event.Companion;
									public static NODE_ATTRIBUTE: string;
									public constructor(param0: string);
									public hashCode(): number;
									public getNode(): string;
									public equals(param0: any): boolean;
									public toString(): string;
									public component1(): string;
									public copy(param0: string): com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event;
								}
								export module Event {
									export class Companion {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event.Companion>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module subscriptions {
								export class Subscription {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Subscription>;
									public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Subscription.Companion;
									public static MUCSUB_NAMESPACE: string;
									public static MUCSUB_MESSAGE_NODE: string;
									public static NICK_ATTRIBUTE: string;
									public static JID_ATTRIBUTE: string;
									public constructor(param0: string, param1: string, param2: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event>);
									public component2(): string;
									public getRoomJid(): string;
									public hashCode(): number;
									public component3(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event>;
									public canSendMessage(): boolean;
									public getEvents(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event>;
									public equals(param0: any): boolean;
									public toString(): string;
									public getNick(): string;
									public component1(): string;
									public copy(param0: string, param1: string, param2: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Event>): com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Subscription;
								}
								export module Subscription {
									export class Companion {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Subscription.Companion>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module subscriptions {
								export class SubscriptionsRequestIQ {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsRequestIQ>;
									public constructor();
									public getIQChildElementBuilder(param0: org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder): org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module subscriptions {
								export class SubscriptionsResultIQ {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQ>;
									public getIQChildElementBuilder(param0: org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder): org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder;
									public getSubscriptions(): java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Subscription>;
									public constructor(param0: java.util.List<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.Subscription>);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module subscriptions {
								export class SubscriptionsResultIQListener {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQListener>;
									public constructor(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQListener.SubscriptionsReceivedListener);
									public accept(param0: org.jivesoftware.smack.packet.Stanza): boolean;
									public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
								}
								export module SubscriptionsResultIQListener {
									export class SubscriptionsReceivedListener {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQListener.SubscriptionsReceivedListener>;
										/**
										 * Constructs a new instance of the com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQListener$SubscriptionsReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
										 */
										public constructor(implementation: {
											onVisitorSubscriptionsRetrieved(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQ): void;
										});
										public constructor();
										public onVisitorSubscriptionsRetrieved(param0: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQ): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module model {
					export module xmpp {
						export module conversation {
							export module subscriptions {
								export class SubscriptionsResultIQProvider extends org.jivesoftware.smack.provider.IQProvider<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQ> {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQProvider>;
									public static Companion: com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQProvider.Companion;
									public constructor();
									public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQ;
								}
								export module SubscriptionsResultIQProvider {
									export class Companion {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQProvider.Companion>;
										public add(): void;
										public remove(): void;
									}
									export class WhenMappings {
										public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.subscriptions.SubscriptionsResultIQProvider.WhenMappings>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class ApplicationMode {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ApplicationMode>;
						public static DEV: com.iadvize.conversation.sdk.type.ApplicationMode;
						public static PROD: com.iadvize.conversation.sdk.type.ApplicationMode;
						public static $UNKNOWN: com.iadvize.conversation.sdk.type.ApplicationMode;
						public rawValue(): string;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.ApplicationMode>;
						public static safeValueOf(param0: string): com.iadvize.conversation.sdk.type.ApplicationMode;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.ApplicationMode;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class Currency {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Currency>;
						public static ADP: com.iadvize.conversation.sdk.type.Currency;
						public static AED: com.iadvize.conversation.sdk.type.Currency;
						public static AFA: com.iadvize.conversation.sdk.type.Currency;
						public static AFN: com.iadvize.conversation.sdk.type.Currency;
						public static ALL: com.iadvize.conversation.sdk.type.Currency;
						public static AMD: com.iadvize.conversation.sdk.type.Currency;
						public static ANG: com.iadvize.conversation.sdk.type.Currency;
						public static AOA: com.iadvize.conversation.sdk.type.Currency;
						public static ARS: com.iadvize.conversation.sdk.type.Currency;
						public static ATS: com.iadvize.conversation.sdk.type.Currency;
						public static AUD: com.iadvize.conversation.sdk.type.Currency;
						public static AWG: com.iadvize.conversation.sdk.type.Currency;
						public static AYM: com.iadvize.conversation.sdk.type.Currency;
						public static AZM: com.iadvize.conversation.sdk.type.Currency;
						public static AZN: com.iadvize.conversation.sdk.type.Currency;
						public static BAM: com.iadvize.conversation.sdk.type.Currency;
						public static BBD: com.iadvize.conversation.sdk.type.Currency;
						public static BDT: com.iadvize.conversation.sdk.type.Currency;
						public static BEF: com.iadvize.conversation.sdk.type.Currency;
						public static BGL: com.iadvize.conversation.sdk.type.Currency;
						public static BGN: com.iadvize.conversation.sdk.type.Currency;
						public static BHD: com.iadvize.conversation.sdk.type.Currency;
						public static BIF: com.iadvize.conversation.sdk.type.Currency;
						public static BMD: com.iadvize.conversation.sdk.type.Currency;
						public static BND: com.iadvize.conversation.sdk.type.Currency;
						public static BOB: com.iadvize.conversation.sdk.type.Currency;
						public static BOV: com.iadvize.conversation.sdk.type.Currency;
						public static BRL: com.iadvize.conversation.sdk.type.Currency;
						public static BSD: com.iadvize.conversation.sdk.type.Currency;
						public static BTN: com.iadvize.conversation.sdk.type.Currency;
						public static BWP: com.iadvize.conversation.sdk.type.Currency;
						public static BYB: com.iadvize.conversation.sdk.type.Currency;
						public static BYN: com.iadvize.conversation.sdk.type.Currency;
						public static BYR: com.iadvize.conversation.sdk.type.Currency;
						public static BZD: com.iadvize.conversation.sdk.type.Currency;
						public static CAD: com.iadvize.conversation.sdk.type.Currency;
						public static CDF: com.iadvize.conversation.sdk.type.Currency;
						public static CHE: com.iadvize.conversation.sdk.type.Currency;
						public static CHF: com.iadvize.conversation.sdk.type.Currency;
						public static CHW: com.iadvize.conversation.sdk.type.Currency;
						public static CLF: com.iadvize.conversation.sdk.type.Currency;
						public static CLP: com.iadvize.conversation.sdk.type.Currency;
						public static CNY: com.iadvize.conversation.sdk.type.Currency;
						public static COP: com.iadvize.conversation.sdk.type.Currency;
						public static COU: com.iadvize.conversation.sdk.type.Currency;
						public static CRC: com.iadvize.conversation.sdk.type.Currency;
						public static CSD: com.iadvize.conversation.sdk.type.Currency;
						public static CUC: com.iadvize.conversation.sdk.type.Currency;
						public static CUP: com.iadvize.conversation.sdk.type.Currency;
						public static CVE: com.iadvize.conversation.sdk.type.Currency;
						public static CYP: com.iadvize.conversation.sdk.type.Currency;
						public static CZK: com.iadvize.conversation.sdk.type.Currency;
						public static DEM: com.iadvize.conversation.sdk.type.Currency;
						public static DJF: com.iadvize.conversation.sdk.type.Currency;
						public static DKK: com.iadvize.conversation.sdk.type.Currency;
						public static DOP: com.iadvize.conversation.sdk.type.Currency;
						public static DZD: com.iadvize.conversation.sdk.type.Currency;
						public static EEK: com.iadvize.conversation.sdk.type.Currency;
						public static EGP: com.iadvize.conversation.sdk.type.Currency;
						public static ERN: com.iadvize.conversation.sdk.type.Currency;
						public static ESP: com.iadvize.conversation.sdk.type.Currency;
						public static ETB: com.iadvize.conversation.sdk.type.Currency;
						public static EUR: com.iadvize.conversation.sdk.type.Currency;
						public static FIM: com.iadvize.conversation.sdk.type.Currency;
						public static FJD: com.iadvize.conversation.sdk.type.Currency;
						public static FKP: com.iadvize.conversation.sdk.type.Currency;
						public static FRF: com.iadvize.conversation.sdk.type.Currency;
						public static GBP: com.iadvize.conversation.sdk.type.Currency;
						public static GEL: com.iadvize.conversation.sdk.type.Currency;
						public static GHC: com.iadvize.conversation.sdk.type.Currency;
						public static GHS: com.iadvize.conversation.sdk.type.Currency;
						public static GIP: com.iadvize.conversation.sdk.type.Currency;
						public static GMD: com.iadvize.conversation.sdk.type.Currency;
						public static GNF: com.iadvize.conversation.sdk.type.Currency;
						public static GRD: com.iadvize.conversation.sdk.type.Currency;
						public static GTQ: com.iadvize.conversation.sdk.type.Currency;
						public static GWP: com.iadvize.conversation.sdk.type.Currency;
						public static GYD: com.iadvize.conversation.sdk.type.Currency;
						public static HKD: com.iadvize.conversation.sdk.type.Currency;
						public static HNL: com.iadvize.conversation.sdk.type.Currency;
						public static HRK: com.iadvize.conversation.sdk.type.Currency;
						public static HTG: com.iadvize.conversation.sdk.type.Currency;
						public static HUF: com.iadvize.conversation.sdk.type.Currency;
						public static IDR: com.iadvize.conversation.sdk.type.Currency;
						public static IEP: com.iadvize.conversation.sdk.type.Currency;
						public static ILS: com.iadvize.conversation.sdk.type.Currency;
						public static INR: com.iadvize.conversation.sdk.type.Currency;
						public static IQD: com.iadvize.conversation.sdk.type.Currency;
						public static IRR: com.iadvize.conversation.sdk.type.Currency;
						public static ISK: com.iadvize.conversation.sdk.type.Currency;
						public static ITL: com.iadvize.conversation.sdk.type.Currency;
						public static JMD: com.iadvize.conversation.sdk.type.Currency;
						public static JOD: com.iadvize.conversation.sdk.type.Currency;
						public static JPY: com.iadvize.conversation.sdk.type.Currency;
						public static KES: com.iadvize.conversation.sdk.type.Currency;
						public static KGS: com.iadvize.conversation.sdk.type.Currency;
						public static KHR: com.iadvize.conversation.sdk.type.Currency;
						public static KMF: com.iadvize.conversation.sdk.type.Currency;
						public static KPW: com.iadvize.conversation.sdk.type.Currency;
						public static KRW: com.iadvize.conversation.sdk.type.Currency;
						public static KWD: com.iadvize.conversation.sdk.type.Currency;
						public static KYD: com.iadvize.conversation.sdk.type.Currency;
						public static KZT: com.iadvize.conversation.sdk.type.Currency;
						public static LAK: com.iadvize.conversation.sdk.type.Currency;
						public static LBP: com.iadvize.conversation.sdk.type.Currency;
						public static LKR: com.iadvize.conversation.sdk.type.Currency;
						public static LRD: com.iadvize.conversation.sdk.type.Currency;
						public static LSL: com.iadvize.conversation.sdk.type.Currency;
						public static LTL: com.iadvize.conversation.sdk.type.Currency;
						public static LUF: com.iadvize.conversation.sdk.type.Currency;
						public static LVL: com.iadvize.conversation.sdk.type.Currency;
						public static LYD: com.iadvize.conversation.sdk.type.Currency;
						public static MAD: com.iadvize.conversation.sdk.type.Currency;
						public static MDL: com.iadvize.conversation.sdk.type.Currency;
						public static MGA: com.iadvize.conversation.sdk.type.Currency;
						public static MGF: com.iadvize.conversation.sdk.type.Currency;
						public static MKD: com.iadvize.conversation.sdk.type.Currency;
						public static MMK: com.iadvize.conversation.sdk.type.Currency;
						public static MNT: com.iadvize.conversation.sdk.type.Currency;
						public static MOP: com.iadvize.conversation.sdk.type.Currency;
						public static MRO: com.iadvize.conversation.sdk.type.Currency;
						public static MRU: com.iadvize.conversation.sdk.type.Currency;
						public static MTL: com.iadvize.conversation.sdk.type.Currency;
						public static MUR: com.iadvize.conversation.sdk.type.Currency;
						public static MVR: com.iadvize.conversation.sdk.type.Currency;
						public static MWK: com.iadvize.conversation.sdk.type.Currency;
						public static MXN: com.iadvize.conversation.sdk.type.Currency;
						public static MXV: com.iadvize.conversation.sdk.type.Currency;
						public static MYR: com.iadvize.conversation.sdk.type.Currency;
						public static MZM: com.iadvize.conversation.sdk.type.Currency;
						public static MZN: com.iadvize.conversation.sdk.type.Currency;
						public static NAD: com.iadvize.conversation.sdk.type.Currency;
						public static NGN: com.iadvize.conversation.sdk.type.Currency;
						public static NIO: com.iadvize.conversation.sdk.type.Currency;
						public static NLG: com.iadvize.conversation.sdk.type.Currency;
						public static NOK: com.iadvize.conversation.sdk.type.Currency;
						public static NPR: com.iadvize.conversation.sdk.type.Currency;
						public static NZD: com.iadvize.conversation.sdk.type.Currency;
						public static OMR: com.iadvize.conversation.sdk.type.Currency;
						public static PAB: com.iadvize.conversation.sdk.type.Currency;
						public static PEN: com.iadvize.conversation.sdk.type.Currency;
						public static PGK: com.iadvize.conversation.sdk.type.Currency;
						public static PHP: com.iadvize.conversation.sdk.type.Currency;
						public static PKR: com.iadvize.conversation.sdk.type.Currency;
						public static PLN: com.iadvize.conversation.sdk.type.Currency;
						public static PTE: com.iadvize.conversation.sdk.type.Currency;
						public static PYG: com.iadvize.conversation.sdk.type.Currency;
						public static QAR: com.iadvize.conversation.sdk.type.Currency;
						public static ROL: com.iadvize.conversation.sdk.type.Currency;
						public static RON: com.iadvize.conversation.sdk.type.Currency;
						public static RSD: com.iadvize.conversation.sdk.type.Currency;
						public static RUB: com.iadvize.conversation.sdk.type.Currency;
						public static RUR: com.iadvize.conversation.sdk.type.Currency;
						public static RWF: com.iadvize.conversation.sdk.type.Currency;
						public static SAR: com.iadvize.conversation.sdk.type.Currency;
						public static SBD: com.iadvize.conversation.sdk.type.Currency;
						public static SCR: com.iadvize.conversation.sdk.type.Currency;
						public static SDD: com.iadvize.conversation.sdk.type.Currency;
						public static SDG: com.iadvize.conversation.sdk.type.Currency;
						public static SEK: com.iadvize.conversation.sdk.type.Currency;
						public static SGD: com.iadvize.conversation.sdk.type.Currency;
						public static SHP: com.iadvize.conversation.sdk.type.Currency;
						public static SIT: com.iadvize.conversation.sdk.type.Currency;
						public static SKK: com.iadvize.conversation.sdk.type.Currency;
						public static SLL: com.iadvize.conversation.sdk.type.Currency;
						public static SOS: com.iadvize.conversation.sdk.type.Currency;
						public static SRD: com.iadvize.conversation.sdk.type.Currency;
						public static SRG: com.iadvize.conversation.sdk.type.Currency;
						public static SSP: com.iadvize.conversation.sdk.type.Currency;
						public static STD: com.iadvize.conversation.sdk.type.Currency;
						public static STN: com.iadvize.conversation.sdk.type.Currency;
						public static SVC: com.iadvize.conversation.sdk.type.Currency;
						public static SYP: com.iadvize.conversation.sdk.type.Currency;
						public static SZL: com.iadvize.conversation.sdk.type.Currency;
						public static THB: com.iadvize.conversation.sdk.type.Currency;
						public static TJS: com.iadvize.conversation.sdk.type.Currency;
						public static TMM: com.iadvize.conversation.sdk.type.Currency;
						public static TMT: com.iadvize.conversation.sdk.type.Currency;
						public static TND: com.iadvize.conversation.sdk.type.Currency;
						public static TOP: com.iadvize.conversation.sdk.type.Currency;
						public static TPE: com.iadvize.conversation.sdk.type.Currency;
						public static TRL: com.iadvize.conversation.sdk.type.Currency;
						public static TRY: com.iadvize.conversation.sdk.type.Currency;
						public static TTD: com.iadvize.conversation.sdk.type.Currency;
						public static TWD: com.iadvize.conversation.sdk.type.Currency;
						public static TZS: com.iadvize.conversation.sdk.type.Currency;
						public static UAH: com.iadvize.conversation.sdk.type.Currency;
						public static UGX: com.iadvize.conversation.sdk.type.Currency;
						public static USD: com.iadvize.conversation.sdk.type.Currency;
						public static USN: com.iadvize.conversation.sdk.type.Currency;
						public static USS: com.iadvize.conversation.sdk.type.Currency;
						public static UYI: com.iadvize.conversation.sdk.type.Currency;
						public static UYU: com.iadvize.conversation.sdk.type.Currency;
						public static UZS: com.iadvize.conversation.sdk.type.Currency;
						public static VEB: com.iadvize.conversation.sdk.type.Currency;
						public static VEF: com.iadvize.conversation.sdk.type.Currency;
						public static VES: com.iadvize.conversation.sdk.type.Currency;
						public static VND: com.iadvize.conversation.sdk.type.Currency;
						public static VUV: com.iadvize.conversation.sdk.type.Currency;
						public static WST: com.iadvize.conversation.sdk.type.Currency;
						public static XAF: com.iadvize.conversation.sdk.type.Currency;
						public static XAG: com.iadvize.conversation.sdk.type.Currency;
						public static XAU: com.iadvize.conversation.sdk.type.Currency;
						public static XBA: com.iadvize.conversation.sdk.type.Currency;
						public static XBB: com.iadvize.conversation.sdk.type.Currency;
						public static XBC: com.iadvize.conversation.sdk.type.Currency;
						public static XBD: com.iadvize.conversation.sdk.type.Currency;
						public static XCD: com.iadvize.conversation.sdk.type.Currency;
						public static XDR: com.iadvize.conversation.sdk.type.Currency;
						public static XFO: com.iadvize.conversation.sdk.type.Currency;
						public static XFU: com.iadvize.conversation.sdk.type.Currency;
						public static XOF: com.iadvize.conversation.sdk.type.Currency;
						public static XPD: com.iadvize.conversation.sdk.type.Currency;
						public static XPF: com.iadvize.conversation.sdk.type.Currency;
						public static XPT: com.iadvize.conversation.sdk.type.Currency;
						public static XSU: com.iadvize.conversation.sdk.type.Currency;
						public static XTS: com.iadvize.conversation.sdk.type.Currency;
						public static XUA: com.iadvize.conversation.sdk.type.Currency;
						public static XXX: com.iadvize.conversation.sdk.type.Currency;
						public static YER: com.iadvize.conversation.sdk.type.Currency;
						public static YUM: com.iadvize.conversation.sdk.type.Currency;
						public static ZAR: com.iadvize.conversation.sdk.type.Currency;
						public static ZMK: com.iadvize.conversation.sdk.type.Currency;
						public static ZMW: com.iadvize.conversation.sdk.type.Currency;
						public static ZWD: com.iadvize.conversation.sdk.type.Currency;
						public static ZWL: com.iadvize.conversation.sdk.type.Currency;
						public static ZWN: com.iadvize.conversation.sdk.type.Currency;
						public static ZWR: com.iadvize.conversation.sdk.type.Currency;
						public static $UNKNOWN: com.iadvize.conversation.sdk.type.Currency;
						public rawValue(): string;
						public static safeValueOf(param0: string): com.iadvize.conversation.sdk.type.Currency;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Currency>;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Currency;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export abstract class CustomType extends com.apollographql.apollo.api.ScalarType {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CustomType>;
						public static DATETIME: com.iadvize.conversation.sdk.type.CustomType;
						public static ID: com.iadvize.conversation.sdk.type.CustomType;
						public static LEGACYID: com.iadvize.conversation.sdk.type.CustomType;
						public static URL: com.iadvize.conversation.sdk.type.CustomType;
						public static UUID: com.iadvize.conversation.sdk.type.CustomType;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.CustomType;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.CustomType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class Language {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Language>;
						public static AA: com.iadvize.conversation.sdk.type.Language;
						public static AB: com.iadvize.conversation.sdk.type.Language;
						public static AE: com.iadvize.conversation.sdk.type.Language;
						public static AF: com.iadvize.conversation.sdk.type.Language;
						public static AK: com.iadvize.conversation.sdk.type.Language;
						public static AM: com.iadvize.conversation.sdk.type.Language;
						public static AN: com.iadvize.conversation.sdk.type.Language;
						public static AR: com.iadvize.conversation.sdk.type.Language;
						public static AS: com.iadvize.conversation.sdk.type.Language;
						public static AV: com.iadvize.conversation.sdk.type.Language;
						public static AY: com.iadvize.conversation.sdk.type.Language;
						public static AZ: com.iadvize.conversation.sdk.type.Language;
						public static BA: com.iadvize.conversation.sdk.type.Language;
						public static BE: com.iadvize.conversation.sdk.type.Language;
						public static BG: com.iadvize.conversation.sdk.type.Language;
						public static BH: com.iadvize.conversation.sdk.type.Language;
						public static BI: com.iadvize.conversation.sdk.type.Language;
						public static BM: com.iadvize.conversation.sdk.type.Language;
						public static BN: com.iadvize.conversation.sdk.type.Language;
						public static BO: com.iadvize.conversation.sdk.type.Language;
						public static BR: com.iadvize.conversation.sdk.type.Language;
						public static BS: com.iadvize.conversation.sdk.type.Language;
						public static CA: com.iadvize.conversation.sdk.type.Language;
						public static CE: com.iadvize.conversation.sdk.type.Language;
						public static CH: com.iadvize.conversation.sdk.type.Language;
						public static CO: com.iadvize.conversation.sdk.type.Language;
						public static CR: com.iadvize.conversation.sdk.type.Language;
						public static CS: com.iadvize.conversation.sdk.type.Language;
						public static CU: com.iadvize.conversation.sdk.type.Language;
						public static CV: com.iadvize.conversation.sdk.type.Language;
						public static CY: com.iadvize.conversation.sdk.type.Language;
						public static DA: com.iadvize.conversation.sdk.type.Language;
						public static DE: com.iadvize.conversation.sdk.type.Language;
						public static DV: com.iadvize.conversation.sdk.type.Language;
						public static DZ: com.iadvize.conversation.sdk.type.Language;
						public static EE: com.iadvize.conversation.sdk.type.Language;
						public static EL: com.iadvize.conversation.sdk.type.Language;
						public static EN: com.iadvize.conversation.sdk.type.Language;
						public static EO: com.iadvize.conversation.sdk.type.Language;
						public static ES: com.iadvize.conversation.sdk.type.Language;
						public static ET: com.iadvize.conversation.sdk.type.Language;
						public static EU: com.iadvize.conversation.sdk.type.Language;
						public static FA: com.iadvize.conversation.sdk.type.Language;
						public static FF: com.iadvize.conversation.sdk.type.Language;
						public static FI: com.iadvize.conversation.sdk.type.Language;
						public static FJ: com.iadvize.conversation.sdk.type.Language;
						public static FO: com.iadvize.conversation.sdk.type.Language;
						public static FR: com.iadvize.conversation.sdk.type.Language;
						public static FY: com.iadvize.conversation.sdk.type.Language;
						public static GA: com.iadvize.conversation.sdk.type.Language;
						public static GD: com.iadvize.conversation.sdk.type.Language;
						public static GL: com.iadvize.conversation.sdk.type.Language;
						public static GN: com.iadvize.conversation.sdk.type.Language;
						public static GU: com.iadvize.conversation.sdk.type.Language;
						public static GV: com.iadvize.conversation.sdk.type.Language;
						public static HA: com.iadvize.conversation.sdk.type.Language;
						public static HE: com.iadvize.conversation.sdk.type.Language;
						public static HI: com.iadvize.conversation.sdk.type.Language;
						public static HO: com.iadvize.conversation.sdk.type.Language;
						public static HR: com.iadvize.conversation.sdk.type.Language;
						public static HT: com.iadvize.conversation.sdk.type.Language;
						public static HU: com.iadvize.conversation.sdk.type.Language;
						public static HY: com.iadvize.conversation.sdk.type.Language;
						public static HZ: com.iadvize.conversation.sdk.type.Language;
						public static IA: com.iadvize.conversation.sdk.type.Language;
						public static ID: com.iadvize.conversation.sdk.type.Language;
						public static IE: com.iadvize.conversation.sdk.type.Language;
						public static IG: com.iadvize.conversation.sdk.type.Language;
						public static II: com.iadvize.conversation.sdk.type.Language;
						public static IK: com.iadvize.conversation.sdk.type.Language;
						public static IN: com.iadvize.conversation.sdk.type.Language;
						public static IO: com.iadvize.conversation.sdk.type.Language;
						public static IS: com.iadvize.conversation.sdk.type.Language;
						public static IT: com.iadvize.conversation.sdk.type.Language;
						public static IU: com.iadvize.conversation.sdk.type.Language;
						public static IW: com.iadvize.conversation.sdk.type.Language;
						public static JA: com.iadvize.conversation.sdk.type.Language;
						public static JI: com.iadvize.conversation.sdk.type.Language;
						public static JV: com.iadvize.conversation.sdk.type.Language;
						public static KA: com.iadvize.conversation.sdk.type.Language;
						public static KG: com.iadvize.conversation.sdk.type.Language;
						public static KI: com.iadvize.conversation.sdk.type.Language;
						public static KJ: com.iadvize.conversation.sdk.type.Language;
						public static KK: com.iadvize.conversation.sdk.type.Language;
						public static KL: com.iadvize.conversation.sdk.type.Language;
						public static KM: com.iadvize.conversation.sdk.type.Language;
						public static KN: com.iadvize.conversation.sdk.type.Language;
						public static KO: com.iadvize.conversation.sdk.type.Language;
						public static KR: com.iadvize.conversation.sdk.type.Language;
						public static KS: com.iadvize.conversation.sdk.type.Language;
						public static KU: com.iadvize.conversation.sdk.type.Language;
						public static KV: com.iadvize.conversation.sdk.type.Language;
						public static KW: com.iadvize.conversation.sdk.type.Language;
						public static KY: com.iadvize.conversation.sdk.type.Language;
						public static LA: com.iadvize.conversation.sdk.type.Language;
						public static LB: com.iadvize.conversation.sdk.type.Language;
						public static LG: com.iadvize.conversation.sdk.type.Language;
						public static LI: com.iadvize.conversation.sdk.type.Language;
						public static LN: com.iadvize.conversation.sdk.type.Language;
						public static LO: com.iadvize.conversation.sdk.type.Language;
						public static LT: com.iadvize.conversation.sdk.type.Language;
						public static LU: com.iadvize.conversation.sdk.type.Language;
						public static LV: com.iadvize.conversation.sdk.type.Language;
						public static MG: com.iadvize.conversation.sdk.type.Language;
						public static MH: com.iadvize.conversation.sdk.type.Language;
						public static MI: com.iadvize.conversation.sdk.type.Language;
						public static MK: com.iadvize.conversation.sdk.type.Language;
						public static ML: com.iadvize.conversation.sdk.type.Language;
						public static MN: com.iadvize.conversation.sdk.type.Language;
						public static MO: com.iadvize.conversation.sdk.type.Language;
						public static MR: com.iadvize.conversation.sdk.type.Language;
						public static MS: com.iadvize.conversation.sdk.type.Language;
						public static MT: com.iadvize.conversation.sdk.type.Language;
						public static MY: com.iadvize.conversation.sdk.type.Language;
						public static NA: com.iadvize.conversation.sdk.type.Language;
						public static NB: com.iadvize.conversation.sdk.type.Language;
						public static ND: com.iadvize.conversation.sdk.type.Language;
						public static NE: com.iadvize.conversation.sdk.type.Language;
						public static NG: com.iadvize.conversation.sdk.type.Language;
						public static NL: com.iadvize.conversation.sdk.type.Language;
						public static NN: com.iadvize.conversation.sdk.type.Language;
						public static NO: com.iadvize.conversation.sdk.type.Language;
						public static NR: com.iadvize.conversation.sdk.type.Language;
						public static NV: com.iadvize.conversation.sdk.type.Language;
						public static NY: com.iadvize.conversation.sdk.type.Language;
						public static OC: com.iadvize.conversation.sdk.type.Language;
						public static OJ: com.iadvize.conversation.sdk.type.Language;
						public static OM: com.iadvize.conversation.sdk.type.Language;
						public static OR: com.iadvize.conversation.sdk.type.Language;
						public static OS: com.iadvize.conversation.sdk.type.Language;
						public static PA: com.iadvize.conversation.sdk.type.Language;
						public static PI: com.iadvize.conversation.sdk.type.Language;
						public static PL: com.iadvize.conversation.sdk.type.Language;
						public static PS: com.iadvize.conversation.sdk.type.Language;
						public static PT: com.iadvize.conversation.sdk.type.Language;
						public static QU: com.iadvize.conversation.sdk.type.Language;
						public static RM: com.iadvize.conversation.sdk.type.Language;
						public static RN: com.iadvize.conversation.sdk.type.Language;
						public static RO: com.iadvize.conversation.sdk.type.Language;
						public static RU: com.iadvize.conversation.sdk.type.Language;
						public static RW: com.iadvize.conversation.sdk.type.Language;
						public static SA: com.iadvize.conversation.sdk.type.Language;
						public static SC: com.iadvize.conversation.sdk.type.Language;
						public static SD: com.iadvize.conversation.sdk.type.Language;
						public static SE: com.iadvize.conversation.sdk.type.Language;
						public static SG: com.iadvize.conversation.sdk.type.Language;
						public static SI: com.iadvize.conversation.sdk.type.Language;
						public static SK: com.iadvize.conversation.sdk.type.Language;
						public static SL: com.iadvize.conversation.sdk.type.Language;
						public static SM: com.iadvize.conversation.sdk.type.Language;
						public static SN: com.iadvize.conversation.sdk.type.Language;
						public static SO: com.iadvize.conversation.sdk.type.Language;
						public static SQ: com.iadvize.conversation.sdk.type.Language;
						public static SR: com.iadvize.conversation.sdk.type.Language;
						public static SS: com.iadvize.conversation.sdk.type.Language;
						public static ST: com.iadvize.conversation.sdk.type.Language;
						public static SU: com.iadvize.conversation.sdk.type.Language;
						public static SV: com.iadvize.conversation.sdk.type.Language;
						public static SW: com.iadvize.conversation.sdk.type.Language;
						public static TA: com.iadvize.conversation.sdk.type.Language;
						public static TE: com.iadvize.conversation.sdk.type.Language;
						public static TG: com.iadvize.conversation.sdk.type.Language;
						public static TH: com.iadvize.conversation.sdk.type.Language;
						public static TI: com.iadvize.conversation.sdk.type.Language;
						public static TK: com.iadvize.conversation.sdk.type.Language;
						public static TL: com.iadvize.conversation.sdk.type.Language;
						public static TN: com.iadvize.conversation.sdk.type.Language;
						public static TO: com.iadvize.conversation.sdk.type.Language;
						public static TR: com.iadvize.conversation.sdk.type.Language;
						public static TS: com.iadvize.conversation.sdk.type.Language;
						public static TT: com.iadvize.conversation.sdk.type.Language;
						public static TW: com.iadvize.conversation.sdk.type.Language;
						public static TY: com.iadvize.conversation.sdk.type.Language;
						public static UG: com.iadvize.conversation.sdk.type.Language;
						public static UK: com.iadvize.conversation.sdk.type.Language;
						public static UR: com.iadvize.conversation.sdk.type.Language;
						public static UZ: com.iadvize.conversation.sdk.type.Language;
						public static VE: com.iadvize.conversation.sdk.type.Language;
						public static VI: com.iadvize.conversation.sdk.type.Language;
						public static VO: com.iadvize.conversation.sdk.type.Language;
						public static WA: com.iadvize.conversation.sdk.type.Language;
						public static WO: com.iadvize.conversation.sdk.type.Language;
						public static XH: com.iadvize.conversation.sdk.type.Language;
						public static YI: com.iadvize.conversation.sdk.type.Language;
						public static YO: com.iadvize.conversation.sdk.type.Language;
						public static ZA: com.iadvize.conversation.sdk.type.Language;
						public static ZH: com.iadvize.conversation.sdk.type.Language;
						public static ZU: com.iadvize.conversation.sdk.type.Language;
						public static $UNKNOWN: com.iadvize.conversation.sdk.type.Language;
						public rawValue(): string;
						public static safeValueOf(param0: string): com.iadvize.conversation.sdk.type.Language;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Language;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Language>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class MobileDevicePlatform {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.MobileDevicePlatform>;
						public static APPLE: com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public static GOOGLE: com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public static $UNKNOWN: com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public rawValue(): string;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.MobileDevicePlatform>;
						public static safeValueOf(param0: string): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class SDKChatButtonTouchedInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput>;
						public eventId(): string;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public static builder(): com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput.Builder;
						public unreadCount(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public eventTime(): string;
					}
					export module SDKChatButtonTouchedInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput.Builder>;
							public eventTime(param0: string): com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput.Builder;
							public eventId(param0: string): com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput.Builder;
							public unreadCount(param0: number): com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput.Builder;
							public build(): com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class SDKConversationReducedInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKConversationReducedInput>;
						public static builder(): com.iadvize.conversation.sdk.type.SDKConversationReducedInput.Builder;
						public eventId(): string;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public eventTime(): string;
					}
					export module SDKConversationReducedInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKConversationReducedInput.Builder>;
							public eventId(param0: string): com.iadvize.conversation.sdk.type.SDKConversationReducedInput.Builder;
							public eventTime(param0: string): com.iadvize.conversation.sdk.type.SDKConversationReducedInput.Builder;
							public build(): com.iadvize.conversation.sdk.type.SDKConversationReducedInput;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class SDKEventInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKEventInput>;
						public sdkMoreInformationTouchedInput(): com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public sdkConversationReducedInput(): com.iadvize.conversation.sdk.type.SDKConversationReducedInput;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public sdkChatButtonTouchedInput(): com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput;
						public sdkNotificationTouchedInput(): com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput;
						public static builder(): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
					}
					export module SDKEventInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKEventInput.Builder>;
							public sdkConversationReducedInput(param0: com.iadvize.conversation.sdk.type.SDKConversationReducedInput): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkNotificationTouchedInputInput(param0: com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput>): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkMoreInformationTouchedInputInput(param0: com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput>): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkChatButtonTouchedInputInput(param0: com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput>): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkChatButtonTouchedInput(param0: com.iadvize.conversation.sdk.type.SDKChatButtonTouchedInput): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkMoreInformationTouchedInput(param0: com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkNotificationTouchedInput(param0: com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public sdkConversationReducedInputInput(param0: com.apollographql.apollo.api.Input<com.iadvize.conversation.sdk.type.SDKConversationReducedInput>): com.iadvize.conversation.sdk.type.SDKEventInput.Builder;
							public build(): com.iadvize.conversation.sdk.type.SDKEventInput;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class SDKMoreInformationTouchedInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput>;
						public eventId(): string;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static builder(): com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput.Builder;
						public eventTime(): string;
					}
					export module SDKMoreInformationTouchedInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput.Builder>;
							public eventId(param0: string): com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput.Builder;
							public eventTime(param0: string): com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput.Builder;
							public build(): com.iadvize.conversation.sdk.type.SDKMoreInformationTouchedInput;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class SDKNotificationTouchedInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput>;
						public eventId(): string;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static builder(): com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput.Builder;
						public eventTime(): string;
					}
					export module SDKNotificationTouchedInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput.Builder>;
							public build(): com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput;
							public eventTime(param0: string): com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput.Builder;
							public eventId(param0: string): com.iadvize.conversation.sdk.type.SDKNotificationTouchedInput.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class SDKTransactionInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKTransactionInput>;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public static builder(): com.iadvize.conversation.sdk.type.SDKTransactionInput.Builder;
						public amount(): number;
						public visitorDate(): java.util.Date;
						public currency(): com.iadvize.conversation.sdk.type.Currency;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public externalTransactionId(): string;
					}
					export module SDKTransactionInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKTransactionInput.Builder>;
							public externalTransactionId(param0: string): com.iadvize.conversation.sdk.type.SDKTransactionInput.Builder;
							public visitorDate(param0: java.util.Date): com.iadvize.conversation.sdk.type.SDKTransactionInput.Builder;
							public build(): com.iadvize.conversation.sdk.type.SDKTransactionInput;
							public amount(param0: number): com.iadvize.conversation.sdk.type.SDKTransactionInput.Builder;
							public currency(param0: com.iadvize.conversation.sdk.type.Currency): com.iadvize.conversation.sdk.type.SDKTransactionInput.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class VisitorCustomDataInput {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorCustomDataInput>;
						public booleanValue(): java.lang.Boolean;
						public marshaller(): com.apollographql.apollo.api.internal.InputFieldMarshaller;
						public stringValue(): string;
						public intValue(): java.lang.Integer;
						public static builder(): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public key(): string;
						public floatValue(): java.lang.Double;
					}
					export module VisitorCustomDataInput {
						export class Builder {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder>;
							public key(param0: string): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public stringValueInput(param0: com.apollographql.apollo.api.Input<string>): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public intValueInput(param0: com.apollographql.apollo.api.Input<java.lang.Integer>): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public stringValue(param0: string): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public floatValue(param0: java.lang.Double): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public floatValueInput(param0: com.apollographql.apollo.api.Input<java.lang.Double>): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public booleanValueInput(param0: com.apollographql.apollo.api.Input<java.lang.Boolean>): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public booleanValue(param0: java.lang.Boolean): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
							public build(): com.iadvize.conversation.sdk.type.VisitorCustomDataInput;
							public intValue(param0: java.lang.Integer): com.iadvize.conversation.sdk.type.VisitorCustomDataInput.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export class BitmapUtilsKt {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.BitmapUtilsKt>;
						public static getThumbnail(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: number): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export class FileUtilsKt {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.FileUtilsKt>;
						public static MAX_FILE_SIZE: number;
						public static MAX_SIZE: number;
						public static isMediaDocument(param0: globalAndroid.net.Uri): boolean;
						public static isImage(param0: string): boolean;
						public static isGif(param0: string): boolean;
						public static isUnderFileSizeLimit(param0: number): boolean;
						public static getFilename(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
						public static isExternalStorageDocument(param0: globalAndroid.net.Uri): boolean;
						public static getSize(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): number;
						public static isDisplayableMimeType(param0: string): boolean;
						public static isGooglePhotosUri(param0: globalAndroid.net.Uri): boolean;
						public static getContent(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): androidNative.Array<number>;
						public static formattedMimeType(param0: string): string;
						public static resizeImage(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: string): void;
						public static isPdf(param0: string): boolean;
						public static isDownloadsDocument(param0: globalAndroid.net.Uri): boolean;
						public static getPath(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
						public static getDataColumn(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: string, param3: androidNative.Array<string>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export class ViewUtilsKt {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.ViewUtilsKt>;
						public static convertDpToPx(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module bus {
						export class EventBusExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.bus.EventBusExtensionsKt>;
							public static unregisterEventBus(param0: any): void;
							public static registerEventBus(param0: any): void;
							public static postEvent(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class ActivityExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.ActivityExtensionsKt>;
							public static getScreenWidth(param0: globalAndroid.app.Activity): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class DateExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.DateExtensionsKt>;
							public static isToday(param0: java.util.Date): boolean;
							public static getCalendar(): java.util.Calendar;
							public static isYesterday(param0: java.util.Date): boolean;
							public static getBeginningOfDay(param0: java.util.Date): java.util.Date;
							public static with(param0: java.util.Date, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): java.util.Date;
							public static sameDay(param0: java.util.Date, param1: java.util.Date): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class ListExtensionKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.ListExtensionKt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class SpannableExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.SpannableExtensionsKt>;
							public static withClickableSpan(param0: globalAndroid.text.SpannableString, param1: string, param2: number, param3: kotlin.jvm.functions.Function0<kotlin.Unit>): globalAndroid.text.SpannableString;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class StringExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.StringExtensionsKt>;
							public static defaultValue(param0: string, param1: string): string;
							public static unescapeForXmlText(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class TextExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.TextExtensionsKt>;
							public static afterTextChanged(param0: globalAndroid.widget.EditText, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
							public static setFont(param0: globalAndroid.widget.TextView, param1: globalAndroid.content.res.AssetManager, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class ToolbarExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.ToolbarExtensionsKt>;
							public static setMainColor(param0: androidx.appcompat.widget.Toolbar, param1: java.lang.Integer): void;
							public static setFont(param0: androidx.appcompat.widget.Toolbar, param1: string): void;
							public static setConfiguration(param0: androidx.appcompat.widget.Toolbar, param1: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class UriExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.UriExtensionsKt>;
							public static getName(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module extensions {
						export class ViewExtensionsKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.extensions.ViewExtensionsKt>;
							public static isNotGone(param0: globalAndroid.view.View): boolean;
							public static visible(param0: globalAndroid.view.View): void;
							public static isNotInvisible(param0: globalAndroid.view.View): boolean;
							public static isInvisible(param0: globalAndroid.view.View): boolean;
							public static hideKeyboard(param0: globalAndroid.view.View): void;
							public static invisible(param0: globalAndroid.view.View): void;
							public static isVisible(param0: globalAndroid.view.View): boolean;
							public static isNotVisible(param0: globalAndroid.view.View): boolean;
							public static gone(param0: globalAndroid.view.View): void;
							public static isGone(param0: globalAndroid.view.View): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module logger {
						export class GraylogManager {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.GraylogManager>;
							public static INSTANCE: com.iadvize.conversation.sdk.utils.logger.GraylogManager;
							public getDeviceName(): string;
							public format(param0: com.iadvize.conversation.sdk.utils.logger.Logger.Level, param1: string, param2: java.lang.StackTraceElement): org.json.JSONObject;
							public log(param0: org.json.JSONObject): void;
							public initGraylog(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module logger {
						export class Logger {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.Logger>;
							public static INSTANCE: com.iadvize.conversation.sdk.utils.logger.Logger;
							public static PREFIX: string;
							public formatMessage$sdk_haRelease(param0: com.iadvize.conversation.sdk.utils.logger.Logger.Level, param1: string): string;
							public log(param0: com.iadvize.conversation.sdk.utils.logger.Logger.Level, param1: string): void;
							public invalidParameterLog$sdk_haRelease(param0: string): string;
						}
						export module Logger {
							export class Level {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.Logger.Level>;
								public static VERBOSE: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
								public static INFO: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
								public static WARNING: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
								public static ERROR: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
								public static SUCCESS: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
								public static valueOf(param0: string): com.iadvize.conversation.sdk.utils.logger.Logger.Level;
								public static values(): androidNative.Array<com.iadvize.conversation.sdk.utils.logger.Logger.Level>;
								public getCode(): number;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.Logger.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module network {
						export class NetworkConnectionStateUpdateEvent {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.network.NetworkConnectionStateUpdateEvent>;
							public getConnected(): boolean;
							public component1(): boolean;
							public hashCode(): number;
							public constructor(param0: boolean);
							public toString(): string;
							public equals(param0: any): boolean;
							public copy(param0: boolean): com.iadvize.conversation.sdk.utils.network.NetworkConnectionStateUpdateEvent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module network {
						export class NetworkUpdateReceiver {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.network.NetworkUpdateReceiver>;
							public constructor();
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module utils {
					export module security {
						export class SecurityProviderKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.security.SecurityProviderKt>;
							public static initSecurityProvider(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module attachments {
						export class AttachmentActivity {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.AttachmentActivity>;
							public static Companion: com.iadvize.conversation.sdk.view.attachments.AttachmentActivity.Companion;
							public constructor();
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						}
						export module AttachmentActivity {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.AttachmentActivity.Companion>;
								public start(param0: globalAndroid.app.Activity, param1: com.iadvize.conversation_ui.models.MessageAttachment.Image): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module attachments {
						export class AttachmentHelperKt {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.AttachmentHelperKt>;
							public static openDownloadedAttachment(param0: globalAndroid.content.Context, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module attachments {
						export class ImageAttachmentFragment {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.ImageAttachmentFragment>;
							public static Companion: com.iadvize.conversation.sdk.view.attachments.ImageAttachmentFragment.Companion;
							public static ATTACHMENT_EXTRA: string;
							public constructor();
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						}
						export module ImageAttachmentFragment {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.ImageAttachmentFragment.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module common {
						export class ClippedImageView {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView>;
							public static Companion: com.iadvize.conversation.sdk.view.common.ClippedImageView.Companion;
							public gestureDetector: globalAndroid.view.GestureDetector;
							public gestureListener: globalAndroid.view.GestureDetector.OnGestureListener;
							public static DISMISS_ANIMATION_TIME: number;
							public static SCROLL_TO_FLICK_DISTANCE: number;
							public setGestureListener(param0: globalAndroid.view.GestureDetector.OnGestureListener): void;
							public setClipHeight(param0: number): void;
							public setGestureDetector(param0: globalAndroid.view.GestureDetector): void;
							public getGestureDetector(): globalAndroid.view.GestureDetector;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public setClipWidth(param0: number): void;
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public setOnFlickListener(param0: com.iadvize.conversation.sdk.view.common.ClippedImageView.OnFlickableImageViewFlickListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getGestureListener(): globalAndroid.view.GestureDetector.OnGestureListener;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module ClippedImageView {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView.Companion>;
							}
							export class Direction {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction>;
								public static Companion: com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction.Companion;
								public static UP: com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction;
								public static DOWN: com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction;
								public static decide(param0: number): com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction;
								public static valueOf(param0: string): com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction;
								public static values(): androidNative.Array<com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction>;
							}
							export module Direction {
								export class Companion {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction.Companion>;
									public decide(param0: number): com.iadvize.conversation.sdk.view.common.ClippedImageView.Direction;
								}
							}
							export class GestureListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView.GestureListener>;
								public onLongPress(param0: globalAndroid.view.MotionEvent): void;
								public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
								public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
								public constructor(param0: com.iadvize.conversation.sdk.view.common.ClippedImageView);
							}
							export module GestureListener {
								export class WhenMappings {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView.GestureListener.WhenMappings>;
								}
							}
							export class OnFlickableImageViewFlickListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ClippedImageView.OnFlickableImageViewFlickListener>;
								/**
								 * Constructs a new instance of the com.iadvize.conversation.sdk.view.common.ClippedImageView$OnFlickableImageViewFlickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onStartFlick(): void;
									onFinishFlick(): void;
								});
								public constructor();
								public onStartFlick(): void;
								public onFinishFlick(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module common {
						export class ConversationErrorView {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.ConversationErrorView>;
							public setMainColor(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setSubtitle(param0: string): void;
							public setOnRetryClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module common {
						export class CustomClickableSpan {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.CustomClickableSpan>;
							public constructor();
							public onClick(param0: globalAndroid.view.View): void;
							public updateDrawState(param0: globalAndroid.text.TextPaint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module common {
						export class RoundedTransformation {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.common.RoundedTransformation>;
							public getRadius(): number;
							public constructor(param0: number, param1: number, param2: number);
							public getMargin(): number;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public getColor(): number;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module conversation {
						export class ChatboxActivity extends com.iadvize.conversation.sdk.view.conversation.ChatboxAttachmentActivity implements com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.ChatboxActivity>;
							public constructor();
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
							public onChatboxConfigurationUpdated(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
							public sendAttachment(param0: com.iadvize.conversation.sdk.model.attachments.UploadFile): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module conversation {
						export abstract class ChatboxAttachmentActivity {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.ChatboxAttachmentActivity>;
							public static Companion: com.iadvize.conversation.sdk.view.conversation.ChatboxAttachmentActivity.Companion;
							public constructor();
							public requestUpload(param0: boolean): void;
							public openAttachment(param0: com.iadvize.conversation_ui.models.MessageAttachment): void;
							public onDestroy(): void;
							public handlePermissionsRequestResult(param0: number, param1: androidNative.Array<number>): void;
							public handleActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public sendAttachment(param0: com.iadvize.conversation.sdk.model.attachments.UploadFile): void;
						}
						export module ChatboxAttachmentActivity {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.ChatboxAttachmentActivity.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module conversation {
						export class ChatboxFragment implements com.iadvize.conversation.sdk.controller.chatbox.ChatboxFragmentCallback, com.iadvize.conversation_ui.viewholders.MessageListeners, com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener, com.iadvize.conversation_ui.views.ComposeView.TextChangedListener, com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener, com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.ChatboxFragment>;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
							public localProactiveMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public onImageButtonClicked(): void;
							public onTextChanged(param0: string): void;
							public onAttach(param0: globalAndroid.content.Context): void;
							public onDestroyView(): void;
							public consentNotSent(param0: java.lang.Throwable): void;
							public conversationReceivedWithGdpr(): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onSendButtonClicked(param0: string): void;
							public onMessageQuickReplyChoiceClicked(param0: string): void;
							public fileSizeIsOverLimit(): void;
							public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
							public constructor();
							public messageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public messageSent(param0: com.iadvize.conversation_ui.models.Message): void;
							public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: string): void;
							public onFileButtonClicked(): void;
							public onStop(): void;
							public messageNotSent(param0: com.iadvize.conversation_ui.models.Message): void;
							public onMessageActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
							public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
							public sendAttachment(param0: com.iadvize.conversation.sdk.model.attachments.UploadFile): void;
							public messageSending(param0: com.iadvize.conversation_ui.models.Message): void;
							public onLoadPastConversationClicked(): void;
							public localMessageReceived(param0: com.iadvize.conversation_ui.models.Message): void;
							public setParent$sdk_haRelease(param0: com.iadvize.conversation.sdk.view.conversation.ChatboxAttachmentActivity): void;
							public onDetach(): void;
							public getParent$sdk_haRelease(): com.iadvize.conversation.sdk.view.conversation.ChatboxAttachmentActivity;
							public onConversationError(param0: java.lang.Throwable): void;
							public onMessageLinkClicked(param0: globalAndroid.net.Uri): void;
						}
						export module ChatboxFragment {
							export class WhenMappings {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.ChatboxFragment.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module view {
					export module conversation {
						export class TouchImageView {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView>;
							public static DISMISS_ANIMATION_TIME: number;
							public static SCROLL_TO_FLICK_DISTANCE: number;
							public canScrollHorizontally(param0: number): boolean;
							public setZoom(param0: number, param1: number, param2: number, param3: globalAndroid.widget.ImageView.ScaleType): void;
							public setImageResource(param0: number): void;
							public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public isZoomed(): boolean;
							public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
							public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
							public setZoom(param0: number): void;
							public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getZoomedRect(): globalAndroid.graphics.RectF;
							public getCurrentZoom(): number;
							public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
							public setIsGif(param0: boolean): void;
							public getMinZoom(): number;
							public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
							public resetZoom(): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
							public setZoom(param0: number, param1: number, param2: number): void;
							public getMaxZoom(): number;
							public setMinZoom(param0: number): void;
							public setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
							public setScrollPosition(param0: number, param1: number): void;
							public getScrollPosition(): globalAndroid.graphics.PointF;
							public canScrollHorizontallyFroyo(param0: number): boolean;
							public setZoom(param0: com.iadvize.conversation.sdk.view.conversation.TouchImageView): void;
							public setImageURI(param0: globalAndroid.net.Uri): void;
							public setMaxZoom(param0: number): void;
							public setOnTouchImageViewListener(param0: com.iadvize.conversation.sdk.view.conversation.TouchImageView.OnTouchImageViewListener): void;
							public onSaveInstanceState(): globalAndroid.os.Parcelable;
							public setOnFlickListener(param0: com.iadvize.conversation.sdk.view.conversation.TouchImageView.OnFlickableImageViewFlickListener): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module TouchImageView {
							export class CompatScroller {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.CompatScroller>;
								public constructor(param0: com.iadvize.conversation.sdk.view.conversation.TouchImageView, param1: globalAndroid.content.Context);
								public getCurrY(): number;
								public forceFinished(param0: boolean): void;
								public getCurrX(): number;
								public computeScrollOffset(): boolean;
								public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
								public isFinished(): boolean;
							}
							export class DoubleTapZoom {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.DoubleTapZoom>;
								public run(): void;
							}
							export class Fling {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.Fling>;
								public cancelFling(): void;
								public run(): void;
							}
							export class GestureListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.GestureListener>;
								public onLongPress(param0: globalAndroid.view.MotionEvent): void;
								public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
								public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
								public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
								public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
								public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
							}
							export class OnFlickableImageViewFlickListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.OnFlickableImageViewFlickListener>;
								/**
								 * Constructs a new instance of the com.iadvize.conversation.sdk.view.conversation.TouchImageView$OnFlickableImageViewFlickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onStartFlick(): void;
									onFinishFlick(): void;
								});
								public constructor();
								public onStartFlick(): void;
								public onFinishFlick(): void;
							}
							export class OnTouchImageViewListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.OnTouchImageViewListener>;
								/**
								 * Constructs a new instance of the com.iadvize.conversation.sdk.view.conversation.TouchImageView$OnTouchImageViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMove(): void;
								});
								public constructor();
								public onMove(): void;
							}
							export class PrivateOnTouchListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.PrivateOnTouchListener>;
								public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
							}
							export class ScaleListener {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.ScaleListener>;
								public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
								public onScaleBegin(param0: globalAndroid.view.ScaleGestureDetector): boolean;
								public onScaleEnd(param0: globalAndroid.view.ScaleGestureDetector): void;
							}
							export class State {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.State>;
								public static NONE: com.iadvize.conversation.sdk.view.conversation.TouchImageView.State;
								public static DRAG: com.iadvize.conversation.sdk.view.conversation.TouchImageView.State;
								public static ZOOM: com.iadvize.conversation.sdk.view.conversation.TouchImageView.State;
								public static FLING: com.iadvize.conversation.sdk.view.conversation.TouchImageView.State;
								public static ANIMATE_ZOOM: com.iadvize.conversation.sdk.view.conversation.TouchImageView.State;
								public static values(): androidNative.Array<com.iadvize.conversation.sdk.view.conversation.TouchImageView.State>;
								public static valueOf(param0: string): com.iadvize.conversation.sdk.view.conversation.TouchImageView.State;
							}
							export class ZoomVariables {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.view.conversation.TouchImageView.ZoomVariables>;
								public scale: number;
								public focusX: number;
								public focusY: number;
								public scaleType: globalAndroid.widget.ImageView.ScaleType;
								public constructor(param0: com.iadvize.conversation.sdk.view.conversation.TouchImageView, param1: number, param2: number, param3: number, param4: globalAndroid.widget.ImageView.ScaleType);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export class BuildConfig {
				public static class: java.lang.Class<com.iadvize.conversation_ui.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module adapters {
				export class GenericCardBundleMessageAdapter implements com.iadvize.conversation_ui.views.GenericCardView.GenericCardClickListener {
					public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.GenericCardBundleMessageAdapter>;
					public onGenericCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
					public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public getCount(): number;
					public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
					public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.Card>, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.utils.Alignment, param3: com.iadvize.conversation_ui.utils.Position);
					public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module adapters {
				export class MessageDiffCallback {
					public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.MessageDiffCallback>;
					public getNewListSize(): number;
					public getChangePayload(param0: number, param1: number): any;
					public constructor(param0: java.util.List<any>, param1: java.util.List<any>);
					public areContentsTheSame(param0: number, param1: number): boolean;
					public getOldListSize(): number;
					public areItemsTheSame(param0: number, param1: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module adapters {
				export class MessageRecyclerViewAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter>;
					public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.Message>, param1: number, param2: com.iadvize.conversation_ui.viewholders.MessageListeners, param3: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public getItem(param0: number): com.iadvize.conversation_ui.models.Message;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public getItemCount(): number;
					public getItemViewType(param0: number): number;
					public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public setMessages(param0: java.util.List<any>, param1: boolean): void;
					public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export module MessageRecyclerViewAdapter {
					export class MessageItemType {
						public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
						public static TEXT: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static PREVIEW_LINK: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static IMAGE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static FILE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static QUICK_REPLY: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static TRANSLATED: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static GENERIC_CARD: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static GENERIC_CARD_BUNDLE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static PRODUCT_OFFER: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static PRODUCT_OFFER_BUNDLE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static SNOOZE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static TRANSFER: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static TYPING_INDICATOR: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static SYSTEM: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static LOAD_PAST_CONVERSATION: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						public static values(): androidNative.Array<com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
						public static valueOf(param0: string): com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module adapters {
				export class ProductOfferBundleMessageAdapter implements com.iadvize.conversation_ui.views.ProductOfferView.ProductOfferClickListener {
					public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.ProductOfferBundleMessageAdapter>;
					public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.utils.Alignment, param3: com.iadvize.conversation_ui.utils.Position);
					public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public getCount(): number;
					public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
					public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
					public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeComposeViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeComposeViewBinding>;
					public iadvizeComposeEdit: globalAndroid.widget.EditText;
					public iadvizeComposeViewLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeComposeZone: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeFileButton: globalAndroid.widget.ImageButton;
					public iadvizeImageButton: globalAndroid.widget.ImageButton;
					public iadvizeSendButton: globalAndroid.widget.ImageButton;
					public iadvizeTranslateButton: globalAndroid.widget.ImageButton;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeComposeViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeComposeViewBinding;
					public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeComposeViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeGenericCardBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeGenericCardBinding>;
					public iadvizeGenericCard: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeGenericCardContent: globalAndroid.widget.TextView;
					public iadvizeGenericCardImage: com.google.android.material.imageview.ShapeableImageView;
					public iadvizeGenericCardImageDivider: globalAndroid.view.View;
					public iadvizeGenericCardLinkLayout: globalAndroid.widget.LinearLayout;
					public iadvizeGenericCardTitle: globalAndroid.widget.TextView;
					public iadvizeGenericCardTitleContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeGenericCardBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeGenericCardBinding;
					public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeGenericCardBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeGenericCardBundleItemBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeGenericCardBundleItemBinding>;
					public iadvizeGenericCardBundleItem: com.iadvize.conversation_ui.views.GenericCardView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeGenericCardBundleItemBinding;
					public getRoot(): com.iadvize.conversation_ui.views.GenericCardView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeGenericCardBundleItemBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeGenericCardBundleItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeGenericCardLinkBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkBinding>;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkBinding;
					public getRoot(): globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeGenericCardLinkDividerBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkDividerBinding>;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkDividerBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkDividerBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeGenericCardLinkDividerBinding;
					public getRoot(): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeLoadPastConversationViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeLoadPastConversationViewBinding>;
					public iadvizeLoad: globalAndroid.widget.Button;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeLoadPastConversationViewBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeLoadPastConversationViewBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeLoadPastConversationViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageAvatarBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding>;
					public iadvizeConversationItemAvatar: globalAndroid.widget.ImageView;
					public iadvizeConversationItemAvatarLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeConversationItemPresence: globalAndroid.widget.ImageView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageBundleBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageBundleBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeBundleViewPager: com.iadvize.conversation_ui.views.WrapContentViewPager;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageBundleBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageBundleBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageBundleBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageCardBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageCardBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeGenericCard: com.iadvize.conversation_ui.views.GenericCardView;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageCardBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageCardBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageCardBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageDateViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageDateViewBinding>;
					public iadvizeMessageDate: globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageDateViewBinding;
					public getRoot(): globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageDateViewBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageDateViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageFileBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageFileBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
					public iadvizeMessageFile: androidx.appcompat.widget.AppCompatTextView;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageFileBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageFileBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageFileBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageImageBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageImageBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
					public iadvizeMessageImage: com.google.android.material.imageview.ShapeableImageView;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageImageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageImageBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageImageBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessagePreviewLinkBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessagePreviewLinkBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.LinearLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeMessagePreviewLink: com.iadvize.conversation_ui.views.preview_link.PreviewLinkView;
					public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessagePreviewLinkBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessagePreviewLinkBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessagePreviewLinkBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageProductOfferBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageProductOfferBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeProductOffer: com.iadvize.conversation_ui.views.ProductOfferView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageProductOfferBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageProductOfferBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageProductOfferBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageQuickReplyBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.LinearLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeMessageQuickReplyChoicesParent: globalAndroid.widget.LinearLayout;
					public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageQuickReplyTextViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyTextViewBinding>;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyTextViewBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyTextViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageQuickReplyTextViewBinding;
					public getRoot(): globalAndroid.widget.TextView;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageSenderNameViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageSenderNameViewBinding>;
					public iadvizeSenderName: globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageSenderNameViewBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageSenderNameViewBinding;
					public getRoot(): globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageSenderNameViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageSnoozeBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageSnoozeBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeSnoozeLogo: androidx.appcompat.widget.AppCompatImageView;
					public iadvizeSnoozeLogoSpace: globalAndroid.widget.Space;
					public iadvizeSnoozeMessage: globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageSnoozeBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageSnoozeBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageSnoozeBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageStateViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageStateViewBinding>;
					public iadvizeMessageState: globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageStateViewBinding;
					public getRoot(): globalAndroid.widget.TextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageStateViewBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageStateViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageSystemBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageSystemBinding>;
					public iadvizeMessageDate: com.iadvize.conversation_ui.databinding.IadvizeMessageDateViewBinding;
					public iadvizeMessageSystemContent: globalAndroid.widget.TextView;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageSystemBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageSystemBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageSystemBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageTextBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageTextBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.FrameLayout;
					public iadvizeMessageDate: com.iadvize.conversation_ui.databinding.IadvizeMessageDateViewBinding;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeMessageState: com.iadvize.conversation_ui.databinding.IadvizeMessageStateViewBinding;
					public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
					public iadvizeSenderName: com.iadvize.conversation_ui.databinding.IadvizeMessageSenderNameViewBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageTextBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageTextBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageTextBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageTransferBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageTransferBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeTransferLogo: androidx.appcompat.widget.AppCompatImageView;
					public iadvizeTransferLogoSpace: globalAndroid.widget.Space;
					public iadvizeTransferMessage: globalAndroid.widget.TextView;
					public iadvizeTransferReasonContent: globalAndroid.widget.TextView;
					public iadvizeTransferReasonDivider: globalAndroid.view.View;
					public iadvizeTransferReasonLayout: androidx.constraintlayout.widget.Group;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageTransferBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageTransferBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageTransferBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageTranslatedBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageTranslatedBinding>;
					public iadvizeAvatarBarrier: androidx.constraintlayout.widget.Barrier;
					public iadvizeMessageAvatar: com.iadvize.conversation_ui.databinding.IadvizeMessageAvatarBinding;
					public iadvizeMessageContentLayout: globalAndroid.widget.LinearLayout;
					public iadvizeMessageLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeMessageText: androidx.appcompat.widget.AppCompatTextView;
					public iadvizeMessageTranslated: androidx.appcompat.widget.AppCompatTextView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageTranslatedBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageTranslatedBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageTranslatedBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeMessageTypingIndicatorBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeMessageTypingIndicatorBinding>;
					public iadvizeMessageTypingIndicator: globalAndroid.widget.LinearLayout;
					public iadvizeTypeWriterView: com.iadvize.conversation_ui.views.TypewriterView;
					public iadvizeWaitingDotsView: com.iadvize.conversation_ui.views.WaitingDotsView;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeMessageTypingIndicatorBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeMessageTypingIndicatorBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeMessageTypingIndicatorBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizePreviewLinkBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizePreviewLinkBinding>;
					public iadvizePreviewLink: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizePreviewLinkContentGroup: androidx.constraintlayout.widget.Group;
					public iadvizePreviewLinkDescription: globalAndroid.widget.TextView;
					public iadvizePreviewLinkImage: com.google.android.material.imageview.ShapeableImageView;
					public iadvizePreviewLinkImageDivider: globalAndroid.view.View;
					public iadvizePreviewLinkLoader: globalAndroid.widget.ProgressBar;
					public iadvizePreviewLinkTitle: globalAndroid.widget.TextView;
					public iadvizePreviewLinkTitleContentLayout: androidx.constraintlayout.widget.ConstraintLayout;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizePreviewLinkBinding;
					public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizePreviewLinkBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizePreviewLinkBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeProductOfferBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeProductOfferBinding>;
					public iadvizeProductOffer: androidx.constraintlayout.widget.ConstraintLayout;
					public iadvizeProductOfferAvailability: globalAndroid.widget.TextView;
					public iadvizeProductOfferDescription: globalAndroid.widget.TextView;
					public iadvizeProductOfferImage: com.google.android.material.imageview.ShapeableImageView;
					public iadvizeProductOfferImageDivider: globalAndroid.view.View;
					public iadvizeProductOfferLinkLayout: globalAndroid.widget.LinearLayout;
					public iadvizeProductOfferName: globalAndroid.widget.TextView;
					public iadvizeProductOfferOriginPrice: globalAndroid.widget.TextView;
					public iadvizeProductOfferPrice: globalAndroid.widget.TextView;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeProductOfferBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeProductOfferBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeProductOfferBinding;
					public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeProductOfferBundleItemBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeProductOfferBundleItemBinding>;
					public iadvizeProductOfferBundleItem: com.iadvize.conversation_ui.views.ProductOfferView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeProductOfferBundleItemBinding;
					public getRoot(): com.iadvize.conversation_ui.views.ProductOfferView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeProductOfferBundleItemBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeProductOfferBundleItemBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module databinding {
				export class IadvizeWaitingDotsViewBinding {
					public static class: java.lang.Class<com.iadvize.conversation_ui.databinding.IadvizeWaitingDotsViewBinding>;
					public iadvizeWaitingDot1: globalAndroid.widget.ImageView;
					public iadvizeWaitingDot2: globalAndroid.widget.ImageView;
					public iadvizeWaitingDot3: globalAndroid.widget.ImageView;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.iadvize.conversation_ui.databinding.IadvizeWaitingDotsViewBinding;
					public getRoot(): globalAndroid.widget.LinearLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation_ui.databinding.IadvizeWaitingDotsViewBinding;
					public static bind(param0: globalAndroid.view.View): com.iadvize.conversation_ui.databinding.IadvizeWaitingDotsViewBinding;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module extensions {
				export class DateExtensionsKt {
					public static class: java.lang.Class<com.iadvize.conversation_ui.extensions.DateExtensionsKt>;
					public static sameDay(param0: java.util.Date, param1: java.util.Date): boolean;
					public static with(param0: java.util.Date, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): java.util.Date;
					public static isToday(param0: java.util.Date): boolean;
					public static getBeginningOfDay(param0: java.util.Date): java.util.Date;
					public static isYesterday(param0: java.util.Date): boolean;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module extensions {
				export class StringExtensionsKt {
					public static class: java.lang.Class<com.iadvize.conversation_ui.extensions.StringExtensionsKt>;
					public static containsUrl(param0: string): boolean;
					public static extractLinks(param0: string): androidNative.Array<string>;
					public static extractDeepLinks(param0: string): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module extensions {
				export class TextViewExtensionsKt {
					public static class: java.lang.Class<com.iadvize.conversation_ui.extensions.TextViewExtensionsKt>;
					public static addLinks(param0: globalAndroid.widget.TextView, param1: androidNative.Array<string>, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class Language {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.Language>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Language>;
					public component2(): string;
					public describeContents(): number;
					public equals(param0: any): boolean;
					public getDisplayValue(): string;
					public toString(): string;
					public getCode(): string;
					public setSelected(param0: boolean): void;
					public component1(): string;
					public component3(): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: string, param1: string, param2: boolean);
					public hashCode(): number;
					public copy(param0: string, param1: string, param2: boolean): com.iadvize.conversation_ui.models.Language;
					public isSelected(): boolean;
				}
				export module Language {
					export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Language> {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.Language.Creator>;
						public constructor();
						public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.Language>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.Language;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class LanguageSettings {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageSettings>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.LanguageSettings>;
					public constructor(param0: com.iadvize.conversation_ui.models.Language, param1: com.iadvize.conversation_ui.models.Language, param2: boolean);
					public getTargetLanguage(): com.iadvize.conversation_ui.models.Language;
					public setAutomaticTranslation(param0: boolean): void;
					public setSourceLanguage(param0: com.iadvize.conversation_ui.models.Language): void;
					public describeContents(): number;
					public getSourceLanguage(): com.iadvize.conversation_ui.models.Language;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getAutomaticTranslation(): boolean;
					public setTargetLanguage(param0: com.iadvize.conversation_ui.models.Language): void;
				}
				export module LanguageSettings {
					export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.LanguageSettings> {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageSettings.Creator>;
						public constructor();
						public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.LanguageSettings>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.LanguageSettings;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class LanguageSettingsKt {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageSettingsKt>;
					public static forLanguageTagCompat(param0: string): java.util.Locale;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class LanguageType {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageType>;
					public static SOURCE: com.iadvize.conversation_ui.models.LanguageType;
					public static TARGET: com.iadvize.conversation_ui.models.LanguageType;
					public static values(): androidNative.Array<com.iadvize.conversation_ui.models.LanguageType>;
					public static valueOf(param0: string): com.iadvize.conversation_ui.models.LanguageType;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class LoadPastConversationMessage extends com.iadvize.conversation_ui.models.Message {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.LoadPastConversationMessage>;
					public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class Message {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.Message>;
					public static Companion: com.iadvize.conversation_ui.models.Message.Companion;
					public getSender(): com.iadvize.conversation_ui.models.Sender;
					public getId(): string;
					public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
					public isFirstMessageOfGroup(param0: com.iadvize.conversation_ui.models.Message): boolean;
					public setForceToBeAloneOnItsGroup(param0: boolean): void;
					public isSameDays(param0: com.iadvize.conversation_ui.models.Message): boolean;
					public getMessageState(): com.iadvize.conversation_ui.models.MessageState;
					public getForceToBeAloneOnItsGroup(): boolean;
					public isLastMessageOfGroup(param0: com.iadvize.conversation_ui.models.Message): boolean;
					public equals(param0: any): boolean;
					public getMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
					public isLeftAlignment(): boolean;
					public isAloneOnGroup(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message): boolean;
					public getSentDate(): java.util.Date;
					public isRightAlignment(): boolean;
					public hashCode(): number;
					public getVerticalPosition(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message): com.iadvize.conversation_ui.utils.Position;
				}
				export module Message {
					export class Companion {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.Message.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export abstract class MessageAttachment {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment>;
					public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Companion;
				}
				export module MessageAttachment {
					export class Action {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						public describeContents(): number;
						public getType(): com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.ActionType, param1: string, param2: string);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getUrl(): string;
						public getTitle(): string;
					}
					export module Action {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Action> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Action.Creator>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageAttachment.Action;
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						}
					}
					export class ActionType {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ActionType>;
						public static LINK: com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
						public static UNSUPPORTED: com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
						public static values(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.ActionType>;
						public static valueOf(param0: string): com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
					}
					export class Card extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Card>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Card.Companion;
						public static TYPE_NAME: string;
						public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
						public getText(): string;
						public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
						public getTitle(): string;
					}
					export module Card {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Card.Companion>;
						}
					}
					export class CardBundle extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardBundle>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.CardBundle.Companion;
						public static TYPE_NAME: string;
						public getCards(): java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.Card>;
						public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.Card>);
					}
					export module CardBundle {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardBundle.Companion>;
						}
					}
					export class CardImage {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardImage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.CardImage>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getUrl(): string;
						public constructor(param0: string, param1: string);
						public getDescription(): string;
					}
					export module CardImage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.CardImage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardImage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.CardImage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Companion>;
						public parseFromXMPP(param0: string): com.iadvize.conversation_ui.models.MessageAttachment;
					}
					export class File extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.File>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.File.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.File>;
						public static TYPE_NAME: string;
						public describeContents(): number;
						public constructor(param0: string, param1: string, param2: string);
						public getMimeType(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getFileName(): string;
						public getUrl(): string;
						public isImage(): boolean;
						public toImage(): com.iadvize.conversation_ui.models.MessageAttachment.Image;
					}
					export module File {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.File.Companion>;
							public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation_ui.models.MessageAttachment.File;
						}
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.File> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.File.Creator>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageAttachment.File;
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.File>;
						}
					}
					export class Image extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Image>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Image.Companion;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Image>;
						public static TYPE_NAME: string;
						public describeContents(): number;
						public constructor(param0: string, param1: string, param2: string);
						public getMimeType(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getFileName(): string;
						public getUrl(): string;
					}
					export module Image {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Image.Companion>;
							public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation_ui.models.MessageAttachment.Image;
						}
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Image> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Image.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Image>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageAttachment.Image;
						}
					}
					export class Link extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Link>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Link.Companion;
						public static TYPE_NAME: string;
						public getUrl(): string;
						public constructor(param0: string, param1: string);
						public getName(): string;
					}
					export module Link {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Link.Companion>;
						}
					}
					export class Offer extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Offer>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Offer.Companion;
						public static TYPE_NAME: string;
						public getUrl(): string;
						public constructor(param0: string, param1: string);
						public getDescription(): string;
					}
					export module Offer {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Offer.Companion>;
						}
					}
					export class Product extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Product>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Product.Companion;
						public static TYPE_NAME: string;
						public getProductUrl(): string;
						public constructor(param0: string, param1: string);
						public getTitle(): string;
					}
					export module Product {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Product.Companion>;
						}
					}
					export class ProductOffer extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Companion;
						public static TYPE_NAME: string;
						public getAvailability(): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability;
						public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						public getOfferPrice(): string;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
						public getPrice(): string;
						public getDescription(): string;
						public getName(): string;
						public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
					}
					export module ProductOffer {
						export class Availability {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability>;
							public getStatus(): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus);
							public describeContents(): number;
						}
						export module Availability {
							export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability> {
								public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability;
								public constructor();
								public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability>;
							}
						}
						export class AvailabilityStatus {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
							public static AVAILABLE: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
							public static UNAVAILABLE: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
							public static values(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
							public static valueOf(param0: string): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
						}
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Companion>;
						}
					}
					export class ProductOfferBundle extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOfferBundle>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.ProductOfferBundle.Companion;
						public static TYPE_NAME: string;
						public getProductOffers(): java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer>;
						public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer>);
					}
					export module ProductOfferBundle {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOfferBundle.Companion>;
						}
					}
					export class QuickReplyMenu extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.QuickReplyMenu>;
						public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.QuickReplyMenu.Companion;
						public static TYPE_NAME: string;
						public constructor(param0: string, param1: androidNative.Array<string>);
						public getMessage(): string;
						public getChoices(): androidNative.Array<string>;
					}
					export module QuickReplyMenu {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.QuickReplyMenu.Companion>;
						}
					}
					export class Unsupported extends com.iadvize.conversation_ui.models.MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Unsupported>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export abstract class MessageKind {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind>;
				}
				export module MessageKind {
					export class Card extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Card>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Card>;
						public describeContents(): number;
						public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
						public getText(): string;
						public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
						public getTitle(): string;
					}
					export module Card {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Card> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Card.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.Card>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.Card;
						}
					}
					export class CardBundle extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.CardBundle>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.CardBundle>;
						public describeContents(): number;
						public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.Card>);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getCards(): java.util.List<com.iadvize.conversation_ui.models.MessageKind.Card>;
					}
					export module CardBundle {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.CardBundle> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.CardBundle.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.CardBundle>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.CardBundle;
						}
					}
					export class FileMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.FileMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.FileMessage>;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.File);
						public describeContents(): number;
						public getFile(): com.iadvize.conversation_ui.models.MessageAttachment.File;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module FileMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.FileMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.FileMessage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.FileMessage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.FileMessage;
						}
					}
					export class ImageMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ImageMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ImageMessage>;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.File);
						public describeContents(): number;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.Image);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.Image;
					}
					export module ImageMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ImageMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ImageMessage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.ImageMessage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.ImageMessage;
						}
					}
					export class LoadPastConversation extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation>;
						public constructor();
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module LoadPastConversation {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation.Creator>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation;
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation>;
						}
					}
					export class ProductOffer extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
						public describeContents(): number;
						public getAvailability(): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability;
						public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getOfferPrice(): string;
						public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
						public getPrice(): string;
						public getDescription(): string;
						public getName(): string;
						public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
					}
					export module ProductOffer {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOffer> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOffer.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.ProductOffer;
						}
					}
					export class ProductOfferBundle extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getProductOffers(): java.util.List<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
						public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>);
					}
					export module ProductOfferBundle {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle;
						}
					}
					export class QuickReplyMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage>;
						public constructor(param0: string, param1: androidNative.Array<string>);
						public getMessage(): string;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getChoices(): androidNative.Array<string>;
					}
					export module QuickReplyMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage.Creator>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage;
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage>;
						}
					}
					export class SnoozeMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getFromName(): string;
						public constructor(param0: string);
					}
					export module SnoozeMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage;
						}
					}
					export class SystemMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SystemMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SystemMessage>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getContent(): string;
						public constructor(param0: string);
					}
					export module SystemMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SystemMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SystemMessage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.SystemMessage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.SystemMessage;
						}
					}
					export class Text extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Text>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Text>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getContent(): string;
						public constructor(param0: string);
					}
					export module Text {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Text> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Text.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.Text>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.Text;
						}
					}
					export class TransferMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TransferMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TransferMessage>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: string, param1: string);
						public getReason(): string;
						public getFromName(): string;
					}
					export module TransferMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TransferMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TransferMessage.Creator>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.TransferMessage;
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.TransferMessage>;
						}
					}
					export class TranslatedMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage>;
						public getTranslation(): com.iadvize.conversation_ui.models.Translation;
						public describeContents(): number;
						public constructor(param0: com.iadvize.conversation_ui.models.Translation);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
					export module TranslatedMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage;
						}
					}
					export class TypingIndicatorMessage extends com.iadvize.conversation_ui.models.MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage>;
						public isComposing(): boolean;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getContent(): string;
						public constructor(param0: string, param1: boolean);
					}
					export module TypingIndicatorMessage {
						export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage> {
							public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage.Creator>;
							public constructor();
							public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage>;
							public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class MessageState {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageState>;
					public static SENDING: com.iadvize.conversation_ui.models.MessageState;
					public static RECEIVED: com.iadvize.conversation_ui.models.MessageState;
					public static FAILURE: com.iadvize.conversation_ui.models.MessageState;
					public static values(): androidNative.Array<com.iadvize.conversation_ui.models.MessageState>;
					public static valueOf(param0: string): com.iadvize.conversation_ui.models.MessageState;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class MessagesConfiguration {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessagesConfiguration>;
					public constructor(param0: string, param1: globalAndroid.graphics.Typeface, param2: java.lang.Integer);
					public getRightMessageBackgroundColor(): java.lang.Integer;
					public getMySenderId(): string;
					public getTypeface(): globalAndroid.graphics.Typeface;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class PreviewLink extends com.iadvize.conversation_ui.models.PreviewLinkResult {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.PreviewLink>;
					public getTitle(): string;
					public setDescription(param0: string): void;
					public component2(): string;
					public setTitle(param0: string): void;
					public component3(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public component1(): string;
					public getUrl(): string;
					public setUrl(param0: string): void;
					public getImageUrl(): string;
					public setImageUrl(param0: string): void;
					public component4(): string;
					public copy(param0: string, param1: string, param2: string, param3: string): com.iadvize.conversation_ui.models.PreviewLink;
					public getDescription(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class PreviewLinkError extends com.iadvize.conversation_ui.models.PreviewLinkResult {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.PreviewLinkError>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public constructor(param0: string);
					public getUrl(): string;
					public setUrl(param0: string): void;
					public copy(param0: string): com.iadvize.conversation_ui.models.PreviewLinkError;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export abstract class PreviewLinkResult {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.PreviewLinkResult>;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class Sender {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.Sender>;
					public getDisplayName(): string;
					public constructor(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.SenderAvatar, param3: com.iadvize.conversation_ui.models.SenderAlignment);
					public getId(): string;
					public getAlignment(): com.iadvize.conversation_ui.models.SenderAlignment;
					public getAvatar(): com.iadvize.conversation_ui.models.SenderAvatar;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class SenderAlignment {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAlignment>;
					public static LEFT: com.iadvize.conversation_ui.models.SenderAlignment;
					public static RIGHT: com.iadvize.conversation_ui.models.SenderAlignment;
					public static values(): androidNative.Array<com.iadvize.conversation_ui.models.SenderAlignment>;
					public static valueOf(param0: string): com.iadvize.conversation_ui.models.SenderAlignment;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export abstract class SenderAvatar {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAvatar>;
				}
				export module SenderAvatar {
					export class Image extends com.iadvize.conversation_ui.models.SenderAvatar {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAvatar.Image>;
						public getValue(): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					}
					export class Url extends com.iadvize.conversation_ui.models.SenderAvatar {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAvatar.Url>;
						public constructor(param0: java.net.URL);
						public getValue(): java.net.URL;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module models {
				export class Translation {
					public static class: java.lang.Class<com.iadvize.conversation_ui.models.Translation>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Translation>;
					public copy(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.Language, param3: com.iadvize.conversation_ui.models.Language): com.iadvize.conversation_ui.models.Translation;
					public component2(): string;
					public describeContents(): number;
					public getSourceLanguage(): com.iadvize.conversation_ui.models.Language;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.Language, param3: com.iadvize.conversation_ui.models.Language);
					public getTranslatedText(): string;
					public getTargetLanguage(): com.iadvize.conversation_ui.models.Language;
					public toString(): string;
					public component1(): string;
					public component4(): com.iadvize.conversation_ui.models.Language;
					public getOriginalText(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component3(): com.iadvize.conversation_ui.models.Language;
					public hashCode(): number;
				}
				export module Translation {
					export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Translation> {
						public static class: java.lang.Class<com.iadvize.conversation_ui.models.Translation.Creator>;
						public constructor();
						public createFromParcel(param0: globalAndroid.os.Parcel): com.iadvize.conversation_ui.models.Translation;
						public newArray(param0: number): androidNative.Array<com.iadvize.conversation_ui.models.Translation>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module utils {
				export class Alignment {
					public static class: java.lang.Class<com.iadvize.conversation_ui.utils.Alignment>;
					public static LEFT: com.iadvize.conversation_ui.utils.Alignment;
					public static RIGHT: com.iadvize.conversation_ui.utils.Alignment;
					public static valueOf(param0: string): com.iadvize.conversation_ui.utils.Alignment;
					public static values(): androidNative.Array<com.iadvize.conversation_ui.utils.Alignment>;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module utils {
				export class MessageViewUtilsKt {
					public static class: java.lang.Class<com.iadvize.conversation_ui.utils.MessageViewUtilsKt>;
					public static getHorizontalPosition(param0: number, param1: number): com.iadvize.conversation_ui.utils.Position;
					public static getFormattedDate(param0: globalAndroid.content.Context, param1: java.util.Date): globalAndroid.text.SpannableString;
					public static loadBubbleBackground(param0: globalAndroid.view.View, param1: java.lang.Integer, param2: java.lang.Integer, param3: com.iadvize.conversation_ui.utils.Alignment, param4: com.iadvize.conversation_ui.utils.Position, param5: com.iadvize.conversation_ui.utils.Position, param6: boolean): void;
					public static setCorners(param0: com.google.android.material.imageview.ShapeableImageView, param1: com.iadvize.conversation_ui.utils.Alignment, param2: com.iadvize.conversation_ui.utils.Position, param3: com.iadvize.conversation_ui.utils.Position, param4: boolean): void;
					public static loadBubbleBackground(param0: globalAndroid.view.View, param1: number, param2: number, param3: java.lang.Integer, param4: com.iadvize.conversation_ui.utils.Alignment, param5: com.iadvize.conversation_ui.utils.Position, param6: com.iadvize.conversation_ui.utils.Position, param7: boolean): void;
				}
				export module MessageViewUtilsKt {
					export class WhenMappings {
						public static class: java.lang.Class<com.iadvize.conversation_ui.utils.MessageViewUtilsKt.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module utils {
				export class Position {
					public static class: java.lang.Class<com.iadvize.conversation_ui.utils.Position>;
					public static ALONE: com.iadvize.conversation_ui.utils.Position;
					public static START: com.iadvize.conversation_ui.utils.Position;
					public static MIDDLE: com.iadvize.conversation_ui.utils.Position;
					public static END: com.iadvize.conversation_ui.utils.Position;
					public static valueOf(param0: string): com.iadvize.conversation_ui.utils.Position;
					public static values(): androidNative.Array<com.iadvize.conversation_ui.utils.Position>;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module utils {
				export class Radius {
					public static class: java.lang.Class<com.iadvize.conversation_ui.utils.Radius>;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public getTopRightRadius(): number;
					public getTopLeftRadius(): number;
					public getBottomLeftRadius(): number;
					public getBottomRightRadius(): number;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module utils {
				export class RoundedTransformation {
					public static class: java.lang.Class<com.iadvize.conversation_ui.utils.RoundedTransformation>;
					public static Companion: com.iadvize.conversation_ui.utils.RoundedTransformation.Companion;
					public equals(param0: any): boolean;
					public getColor(): number;
					public constructor(param0: number, param1: number, param2: number);
					public getMargin(): number;
					public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
					public hashCode(): number;
					public getRadius(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
				export module RoundedTransformation {
					export class Companion {
						public static class: java.lang.Class<com.iadvize.conversation_ui.utils.RoundedTransformation.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module utils {
				export class StringUtils {
					public static class: java.lang.Class<com.iadvize.conversation_ui.utils.StringUtils>;
					public static INSTANCE: com.iadvize.conversation_ui.utils.StringUtils;
					public static INDEX_NOT_FOUND: number;
					public indexOfDifference(param0: string, param1: string): number;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class BundleMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.BundleMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: number, param2: com.iadvize.conversation_ui.viewholders.MessageListeners, param3: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class FileMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.FileMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class GenericCardMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder implements com.iadvize.conversation_ui.views.GenericCardView.GenericCardClickListener {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.GenericCardMessageViewHolder>;
					public onGenericCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class ImageMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.ImageMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class LoadPastConversationViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.LoadPastConversationViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class MessageListeners {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.MessageListeners>;
					/**
					 * Constructs a new instance of the com.iadvize.conversation_ui.viewholders.MessageListeners interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
						onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
						onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
						onMessageQuickReplyChoiceClicked(param0: string): void;
						onMessageActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
						onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: string): void;
						onMessageLinkClicked(param0: globalAndroid.net.Uri): void;
						onLoadPastConversationClicked(): void;
					});
					public constructor();
					public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: string): void;
					public onLoadPastConversationClicked(): void;
					public onMessageLinkClicked(param0: globalAndroid.net.Uri): void;
					public onMessageActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
					public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
					public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
					public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
					public onMessageQuickReplyChoiceClicked(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export abstract class MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.MessageViewHolder>;
					public getMessagesConfiguration(): com.iadvize.conversation_ui.models.MessagesConfiguration;
					public getLayout(): androidx.constraintlayout.widget.ConstraintLayout;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public getMessageListeners(): com.iadvize.conversation_ui.viewholders.MessageListeners;
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadStatus(param0: globalAndroid.widget.TextView, param1: com.iadvize.conversation_ui.models.Message, param2: boolean): void;
					public setLayout(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
				export module MessageViewHolder {
					export class WhenMappings {
						public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.MessageViewHolder.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class PreviewLinkMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.PreviewLinkMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
				export module PreviewLinkMessageViewHolder {
					export class WhenMappings {
						public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.PreviewLinkMessageViewHolder.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class ProductOfferMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder implements com.iadvize.conversation_ui.views.ProductOfferView.ProductOfferClickListener {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.ProductOfferMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class QuickReplyMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.QuickReplyMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class SnoozeMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.SnoozeMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class SystemMessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.SystemMessageViewHolder>;
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message): void;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class TextMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.TextMessageViewHolder>;
					public getView(): globalAndroid.view.View;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class TransferMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.TransferMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class TranslatedMessageViewHolder extends com.iadvize.conversation_ui.viewholders.MessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.TranslatedMessageViewHolder>;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
					public loadMessageAlignment(param0: com.iadvize.conversation_ui.models.SenderAlignment): void;
					public loadMessageBackground(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message, param2: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module viewholders {
				export class TypingIndicatorMessageViewHolder {
					public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.TypingIndicatorMessageViewHolder>;
					public recycle(): void;
					public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessagesConfiguration);
					public bind(param0: com.iadvize.conversation_ui.models.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export class ComposeView {
					public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView>;
					public static Companion: com.iadvize.conversation_ui.views.ComposeView.Companion;
					public setImageButtonVisible(param0: boolean): void;
					public setTypeFace(param0: globalAndroid.graphics.Typeface): void;
					public getImageButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener;
					public setTextChangedListener(param0: com.iadvize.conversation_ui.views.ComposeView.TextChangedListener): void;
					public isImageButtonVisible(): boolean;
					public onAttachedToWindow(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getFileButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener;
					public clearText(): void;
					public setText(param0: string): void;
					public setSendButtonEnabled(param0: boolean): void;
					public isFileButtonVisible(): boolean;
					public isTranslationActivated(): boolean;
					public setSendButtonColor(param0: number): void;
					public setImageButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener): void;
					public getTextChangedListener(): com.iadvize.conversation_ui.views.ComposeView.TextChangedListener;
					public onDetachedFromWindow(): void;
					public setFileButtonVisible(param0: boolean): void;
					public getText(): string;
					public getSendButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener;
					public setFileButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener): void;
					public setSelection(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setSendButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener): void;
					public dispatchSaveInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					public constructor(param0: globalAndroid.content.Context);
					public getTranslateButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.TranslateButtonClickListener;
					public isSendButtonEnabled(): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public setTranslationActivated(param0: boolean): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public setTranslateButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.TranslateButtonClickListener): void;
					public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				}
				export module ComposeView {
					export class Companion {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.Companion>;
					}
					export class FileButtonClickListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$FileButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFileButtonClicked(): void;
						});
						public constructor();
						public onFileButtonClicked(): void;
					}
					export class ImageButtonClickListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$ImageButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onImageButtonClicked(): void;
						});
						public constructor();
						public onImageButtonClicked(): void;
					}
					export class SendButtonClickListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$SendButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSendButtonClicked(param0: string): void;
						});
						public constructor();
						public onSendButtonClicked(param0: string): void;
					}
					export class TextChangedListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.TextChangedListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$TextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTextChanged(param0: string): void;
						});
						public constructor();
						public onTextChanged(param0: string): void;
					}
					export class TranslateButtonClickListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.TranslateButtonClickListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$TranslateButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTranslateButtonClicked(param0: string): void;
						});
						public constructor();
						public onTranslateButtonClicked(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export class GenericCardView {
					public static class: java.lang.Class<com.iadvize.conversation_ui.views.GenericCardView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setListener(param0: com.iadvize.conversation_ui.views.GenericCardView.GenericCardClickListener): void;
					public loadMessageBubbleView(param0: com.iadvize.conversation_ui.utils.Alignment, param1: com.iadvize.conversation_ui.utils.Position, param2: com.iadvize.conversation_ui.utils.Position): void;
					public getListener(): com.iadvize.conversation_ui.views.GenericCardView.GenericCardClickListener;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public load(param0: com.iadvize.conversation_ui.models.MessageKind.Card): void;
				}
				export module GenericCardView {
					export class GenericCardClickListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.GenericCardView.GenericCardClickListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.GenericCardView$GenericCardClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onGenericCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
						});
						public constructor();
						public onGenericCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export class ProductOfferView {
					public static class: java.lang.Class<com.iadvize.conversation_ui.views.ProductOfferView>;
					public load(param0: com.iadvize.conversation_ui.models.MessageKind.ProductOffer): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public loadMessageBubbleView(param0: com.iadvize.conversation_ui.utils.Alignment, param1: com.iadvize.conversation_ui.utils.Position, param2: com.iadvize.conversation_ui.utils.Position): void;
					public getListener(): com.iadvize.conversation_ui.views.ProductOfferView.ProductOfferClickListener;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setListener(param0: com.iadvize.conversation_ui.views.ProductOfferView.ProductOfferClickListener): void;
				}
				export module ProductOfferView {
					export class ProductOfferClickListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ProductOfferView.ProductOfferClickListener>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation_ui.views.ProductOfferView$ProductOfferClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
						});
						public constructor();
						public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.ProductOfferView.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export class TypewriterView {
					public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView>;
					public static Companion: com.iadvize.conversation_ui.views.TypewriterView.Companion;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public run(param0: java.lang.Runnable): com.iadvize.conversation_ui.views.TypewriterView;
					public type(param0: string, param1: number): com.iadvize.conversation_ui.views.TypewriterView;
					public delete(param0: string, param1: number): com.iadvize.conversation_ui.views.TypewriterView;
					public delete(param0: string): com.iadvize.conversation_ui.views.TypewriterView;
					public type(param0: string): com.iadvize.conversation_ui.views.TypewriterView;
					public cancelAnimations(): void;
				}
				export module TypewriterView {
					export class Companion {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.Companion>;
					}
					export abstract class Repeater {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.Repeater>;
						public getDelay(): number;
						public setCancel(param0: boolean): void;
						public constructor(param0: java.lang.Runnable, param1: number);
						public cancel(): void;
						public getCancel(): boolean;
						public delayAndRepeat(): void;
						public done(): void;
					}
					export class TextAdder extends com.iadvize.conversation_ui.views.TypewriterView.Repeater {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.TextAdder>;
						public run(): void;
						public constructor(param0: java.lang.Runnable, param1: number);
						public constructor(param0: string, param1: number, param2: java.lang.Runnable);
					}
					export class TextRemover extends com.iadvize.conversation_ui.views.TypewriterView.Repeater {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.TextRemover>;
						public run(): void;
						public constructor(param0: java.lang.Runnable, param1: number);
						public constructor(param0: string, param1: number, param2: java.lang.Runnable);
					}
					export class TypeRunnable extends com.iadvize.conversation_ui.views.TypewriterView.Repeater {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.TypeRunnable>;
						public getRunnable(): java.lang.Runnable;
						public run(): void;
						public constructor(param0: java.lang.Runnable, param1: number);
						public constructor(param0: java.lang.Runnable, param1: java.lang.Runnable);
						public setRunnable(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export class WaitingDotsView {
					public static class: java.lang.Class<com.iadvize.conversation_ui.views.WaitingDotsView>;
					public static Companion: com.iadvize.conversation_ui.views.WaitingDotsView.Companion;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDotsAnimationIsRunning(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public stopDotsAnimation(): void;
					public startDotsAnimation(): void;
				}
				export module WaitingDotsView {
					export class Companion {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.WaitingDotsView.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export class WrapContentViewPager {
					public static class: java.lang.Class<com.iadvize.conversation_ui.views.WrapContentViewPager>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export module preview_link {
					export class PreviewLinkRepository {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository>;
						public static Companion: com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository.Companion;
						public getPreviewLink(param0: string): void;
						public constructor(param0: com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository.PreviewLinkRepositoryListener);
						public release(): void;
					}
					export module PreviewLinkRepository {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository.Companion>;
						}
						export class PreviewLinkRepositoryListener {
							public static class: java.lang.Class<com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository.PreviewLinkRepositoryListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository$PreviewLinkRepositoryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPreviewLinkRetrieved(param0: com.iadvize.conversation_ui.models.PreviewLinkResult): void;
							});
							public constructor();
							public onPreviewLinkRetrieved(param0: com.iadvize.conversation_ui.models.PreviewLinkResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export module preview_link {
					export class PreviewLinkStore {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.preview_link.PreviewLinkStore>;
						public static INSTANCE: com.iadvize.conversation_ui.views.preview_link.PreviewLinkStore;
						public static addPreviewLink(param0: string, param1: com.iadvize.conversation_ui.models.PreviewLinkResult): void;
						public static clear(): void;
						public static getPreviewLink(param0: string): com.iadvize.conversation_ui.models.PreviewLinkResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation_ui {
			export module views {
				export module preview_link {
					export class PreviewLinkView implements com.iadvize.conversation_ui.views.preview_link.PreviewLinkRepository.PreviewLinkRepositoryListener {
						public static class: java.lang.Class<com.iadvize.conversation_ui.views.preview_link.PreviewLinkView>;
						public loadMessageBubbleView(param0: com.iadvize.conversation_ui.utils.Alignment, param1: com.iadvize.conversation_ui.utils.Position, param2: com.iadvize.conversation_ui.utils.Position): void;
						public constructor(param0: globalAndroid.content.Context);
						public onPreviewLinkRetrieved(param0: com.iadvize.conversation_ui.models.PreviewLinkResult): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onDetachedFromWindow(): void;
						public load(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setLoaderColor(param0: number): void;
					}
				}
			}
		}
	}
}

//Generics information:
//com.iadvize.conversation.sdk.model.graphql.ApolloCallback:1

