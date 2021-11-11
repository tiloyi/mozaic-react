# vi:syntax=yaml
# vi:filetype=yaml

  
{{/*
Map of common labels for top-level metadata.labels declaration.
*/}}
{{- define "metadata.labels" -}}
{{- $labels := dict -}}
{{- $_ := set $labels "app" .Values.microservice -}}
{{- $_ = set $labels "chart" (printf "%s-%s" .Chart.Name .Chart.Version) -}}
{{- $_ = set $labels "release" .Release.Name -}}
{{- $_ = set $labels "profile" .Values.profile -}}
{{- if .Values.domain -}}
{{- $_ = set $labels "domain" .Values.domain -}}
{{- end -}}
{{- if .Values.brick -}}
{{- $_ = set $labels "brick" .Values.brick -}}
{{- end -}}
{{- range $customLabelKey, $customLabelValue := .Values.labels -}}
{{- $_ = set $labels $customLabelKey $customLabelValue -}}
{{- end -}}
{{- range $key, $value := $labels }}
    {{ $key }}: {{ $value | quote }}
{{- end }}
{{- end -}}
{{/*
Get the hostname for ingress
*/}}
{{- define "hostname" -}}
{{- $clusterUrl := .Values.cluster -}}

{{- if eq .Values.profile "prod" -}}
{{- $clusterUrl = .Values.prodCluster -}}
{{- end -}}

{{- printf "%s-%s.apps.lmru.tech" .Release.Namespace $clusterUrl -}}
{{- end -}}
