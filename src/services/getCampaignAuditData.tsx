import HTTP from "../utils/http"
import {UrlEnum} from "../enum/UrlEnum";

export async function getCampaignAuditData(query:string) {
  return await HTTP.get({
    url: `${UrlEnum.CAMPAIGN_AUDIT_SERVICES_BASE_URL}/v1/audit/user-activities/logs?filter=${query}`,
    requestOptions: {},
  });
}
export async function getUserActions() {
  return await HTTP.get({
    url: `${UrlEnum.CAMPAIGN_AUDIT_SERVICES_BASE_URL}/v1/audit/user-activities/user-actions`,
    requestOptions: {},
  });
}