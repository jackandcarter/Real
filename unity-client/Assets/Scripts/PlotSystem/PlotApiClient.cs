using System.Collections;
using UnityEngine.Networking;
using UnityEngine;

namespace PlotSystem
{
    public class PlotApiClient : MonoBehaviour
    {
        private const string BaseUrl = "http://localhost:3000/api/plots";

        public IEnumerator GetPlots(System.Action<string> callback)
        {
            using (UnityWebRequest request = UnityWebRequest.Get(BaseUrl))
            {
                yield return request.SendWebRequest();
                if (request.result == UnityWebRequest.Result.Success)
                {
                    callback?.Invoke(request.downloadHandler.text);
                }
                else
                {
                    Debug.LogError(request.error);
                    callback?.Invoke(null);
                }
            }
        }
    }
}
