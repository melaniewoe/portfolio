import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={735}
    height={419}
    fill="none"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
    }}
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={735}
        height={419}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M735 0H0v419h735V0Z" />
      </mask>
      <g mask="url(#b)">
        <mask
          id="d"
          width={764}
          height={423}
          x={-22}
          y={-2}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <path
            fill="url(#c)"
            d="M-6.145 230.826S300.737-14.769 392.082 16.308c40.56 13.8-143.804 145.521-258.11 278.497-65.983 76.76 233.528-179.392 425.267-188.173 58.997 0-132.742 143.012-165.928 200.718-33.186 57.707 173.303-70.251 210.176-65.233 36.873 5.018-212.634 158.066-161.012 163.084 51.622 5.018 231.07-109.141 277.776-90.324 22.132 13.078-20.871 48.693-41.121 67.33"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={31}
            d="M-6.145 230.826S300.737-14.769 392.082 16.308c40.56 13.8-143.804 145.521-258.11 278.497-65.983 76.76 233.528-179.392 425.267-188.173 58.997 0-132.742 143.012-165.928 200.718-33.186 57.707 173.303-70.251 210.176-65.233 36.873 5.018-212.634 158.066-161.012 163.084 51.622 5.018 231.07-109.141 277.776-90.324 22.132 13.078-20.871 48.693-41.121 67.33"
          />
        </mask>
        <g mask="url(#d)">
          <path
            fill="url(#e)"
            d="M677.332 385.033c3.7 3.789 7.768 3.174 11.984 1.782l.012-.025c-.148-2.158-.221-3.827-.381-5.495-.037-.439-.32-.878-.553-1.28-.861-1.48-1.856-2.897-2.594-4.441-.725-1.492-3.699-2.634-5.199-1.844-.553.301-1.167.59-1.77.653-3.453.351-4.682 2.898-2.814 5.984.909 1.53 1.954 3.01 1.315 4.666ZM225.257 230.43c-2.999 1.656-6.083 3.199-9.746 3.738v.063c-.897-1.744-.456-2.986.675-4.002 1.401-1.254 2.827-2.471 4.314-3.588 3.319-2.496 6.649-4.942 8.579-8.844.234-.464.836-.765 1.291-1.091 1.585-1.129 3.33-2.07 4.756-3.375 2.249-2.057 4.105-4.591 6.453-6.498 2.139-1.731 3.233-4.265 5.322-6.059 1.241-1.054 1.512-3.249 3.896-2.559.307.087.836-.452 1.192-.778 2.864-2.697 5.705-5.42 8.556-8.117 1.008-.941 2.039-1.844 3.059-2.785 3.565-3.287 7.118-6.573 10.67-9.86 2.741-2.534 5.481-5.068 8.246-7.577 1.02-.929 2.335-1.593 3.159-2.672 2.851-3.751 6.576-6.473 10.14-9.409 1.413-1.167 3.282-1.882 3.823-3.964.086-.326.517-.627.849-.79 3.626-1.807 6.562-4.554 9.266-7.527 6.539-7.164 13.73-13.637 20.146-20.925 2.839-3.237 6.329-5.871 9.475-8.832 3.651-3.437 7.302-6.887 10.842-10.437 2.323-2.321 4.448-4.855 6.697-7.251 2.09-2.233 4.229-4.416 6.367-6.611 1.586-1.631 3-3.588 4.869-4.78 1.905-1.217 3.208-2.873 4.609-4.516 1.143-1.355 2.309-2.722 3.403-4.127 2.126-2.723 4.179-5.52 6.33-8.217.725-.904 1.574-1.77 2.521-2.422 2.79-1.906 5.099-4.277 7.091-7.012 1.278-1.757 2.667-3.463 3.724-5.344 1.548-2.773 2.951-5.608 5.126-7.954.295-.313.233-.953.368-1.43.553-1.92 1.217-3.7 2.814-5.093 1.143-1.004 2.25-2.321 2.778-3.726 1.082-2.885 1.77-5.921 2.593-8.894.16-.552.295-1.154.234-1.706-.209-1.782-.417-3.576-.798-5.32-.602-2.797-.689-5.833-2.68-8.103-2.483-2.836-5.089-5.57-7.682-8.293-.443-.464-1.094-.777-1.709-.99-1.475-.515-3.059-.74-4.472-1.393-2.311-1.067-4.709-1.48-7.167-1.33-3.22.188-6.439.514-9.635.979a272.058 272.058 0 0 0-13.827 2.37c-1.586.314-3.025 1.418-4.623 1.732-3.06.614-6.182.903-9.267 1.38-.762.125-1.499.414-2.236.69-2.581.953-5.127 1.994-7.732 2.885a6.993 6.993 0 0 1-2.875.351c-1.942-.2-3.615.301-5.274 1.342-1.746 1.104-3.539 2.371-5.481 2.81-1.659.364-2.913.716-3.417 2.798-1.487-.351-2.779-.715-4.094-.966-1.032-.2-2.163-.577-3.122-.326a38.118 38.118 0 0 0-6.33 2.258c-1.978.916-3.871 1.82-6.133 1.769-.934-.025-2.15.138-2.752.727-3.257 3.2-7.436 4.29-11.553 5.37-2.311.602-4.131 1.656-5.631 3.424-1.204 1.43-2.679 2.384-4.547 2.484-2.999.176-5.495 1.255-7.35 3.739-.849 1.141-1.783 1.505-2.95.364-.676-.653-1.414-.552-2.102.062-4.228 3.814-9.452 5.583-14.651 7.377-3.908 1.355-7.559 3.173-10.951 5.607-.774.552-1.93.54-3.036.816-1.118 1.994-1.512 2.233-3.503 3.048-2.655 1.079-5.433 1.694-7.866 3.475-3.085 2.246-6.588 3.889-9.833 5.921-1.34.828-2.531 1.619-4.251 1.669-1.266.037-2.583.803-3.726 1.505-4.683 2.86-8.886 6.561-14.306 8.154-1.119.326-2.015 1.468-2.961 2.309-1.242 1.103-2.299 2.534-3.688 3.387-2.409 1.48-5.016 2.66-7.56 3.901a39.304 39.304 0 0 1-4.018 1.744c-1.192.439-2.31.765-3.208 1.907-.663.84-1.917 1.43-2.999 1.656-1.536.326-2.668.966-3.651 2.233-1.844 2.383-4.044 4.315-6.945 5.369-1.266.464-2.396 1.38-3.503 2.195-2.446 1.807-4.805 3.739-7.276 5.495-1.807 1.279-3.736 2.383-5.752 3.65-2.139-.351-2.913-.213-4.068 1.042-2.102 2.283-4.413 4.202-7.4 5.206-.614.213-1.229.652-1.671 1.141-1.266 1.38-2.52 2.785-3.626 4.303-.922 1.255-2.028 1.782-3.515 1.819-.75.013-1.819 0-2.2.464-1.549 1.907-4.191 2.422-5.347 4.906-.553 1.191-2.077 2.132-3.368 2.672-4.24 1.768-8.407 3.6-11.676 7.05-.332.351-.713.727-1.155.903-3.073 1.229-5.457 3.425-7.928 5.57-3.27 2.848-6.698 5.52-10.128 8.167-.823.652-1.905 1.292-2.888 1.317-1.954.038-3.182 1.091-4.116 2.509-1.254 1.907-3.111 2.961-4.906 4.177-2.446 1.656-4.756 3.513-7.153 5.232-3.749 2.697-7.103 5.996-11.466 7.752-.983.389-1.993.979-2.693 1.744-4.253 4.617-8.788 8.794-14.565 11.378-1.684.753-3.392 1.631-4.806 2.81-5.518 4.642-11.085 9.221-15.485 15.067-1.192 1.593-2.385 3.274-3.921 4.453-2.704 2.083-4.67 4.617-5.383 7.941C.53 218.236.063 221.234 0 224.208c-.037 1.806.848 3.638 1.39 5.77 2.912.653 6.07 1.255 9.168 2.095 4.314 1.179 7.693-.313 10.36-3.65 1.647-2.07 2.741-4.642 4.499-6.586 2.974-3.3 6.366-6.198 9.44-9.422 3.883-4.064 8.518-7.037 13.164-10.036 1.13-.727 2.25-1.793 2.84-2.985.884-1.782 2.395-2.572 3.894-3.5.664-.414 1.45-.64 2.077-1.104 6.65-4.955 13.275-9.923 19.9-14.904 1.733-1.292 3.404-2.672 5.15-3.951 1.487-1.092 3.072-2.045 4.572-3.124 1.352-.978 2.507-2.434 3.994-2.948 2.446-.866 4.388-2.396 6.453-3.814 1.057-.727 2.188-1.342 3.319-1.932 4.191-2.157 8.038-4.854 11.897-7.577 2.213-1.568 3.823-4.403 7.117-4.328.442.013.921-1.129 1.389-1.743.7-.941 1.352-2.61 2.126-2.672 2.089-.151 2.778-1.92 4.154-2.848 1.463-.979 3.024-1.819 4.523-2.735 2.827-1.744 6.158-2.634 8.53-5.181 1.414-1.518 2.827-3.061 4.4-4.391 1.93-1.618 3.7-3.713 6.65-3.299.418.05.897-.339 1.34-.539 3.048-1.343 5.088-4.466 8.554-5.069.086-.012.149-.125.223-.2 1.462-1.443 2.948-2.861 4.386-4.328 1.905-1.945 2.618-1.882 4.241.727 2.175-2.019 4.621-3.726 5.973-6.423.516-1.053 1.045-1.455 2.114-1.681 1.229-.263 2.459-.677 3.566-1.279 2.482-1.343 4.755-3.199 7.361-4.165 2.261-.853 3.81-2.321 5.42-3.914 1.118-1.117 2.286-2.196 3.528-3.149.553-.426 1.353-.69 2.053-.74 3.27-.213 6.317-.878 8.689-3.475 2.937-3.212 6.872-4.88 10.571-6.862 1.217-.652 2.336-1.28 3.38-2.183 1.918-1.643 3.551-3.839 6.476-3.726.431.025 1.119-.313 1.266-.665 1.254-2.935 4.044-2.66 6.404-3.299.553-.15 1.192-.176 1.672-.464 6.428-3.864 13.631-6.222 19.863-10.5.147-.1.393-.226.541-.176 1.389.44 1.891-.665 2.543-1.493 1.954-2.458 4.364-3.588 7.597-3.75 2.642-.139 5.248-1.318 7.817-2.196 3.626-1.23 6.391-4.19 10.042-5.382 1.192-.389 2.432-.665 3.637-.99.958-2.535 1.095-2.924 2.791-2.736 3.195.364 5.542-1.543 8.258-2.546 2.323-.853 4.142-2.823 6.969-2.685 1.758.088 3.773-.564 5.285-1.53 1.733-1.104 3.405-1.317 5.298-1.28.59.013 1.364-.326 1.757-.778 1.303-1.455 2.655-2.622 4.757-2.559.516.013 1.083-.452 1.562-.79 2.556-1.807 5.554-2.246 8.48-2.923a127.246 127.246 0 0 0 7.989-2.108c.59-.175 1.192-.803 1.487-1.38.725-1.405 1.832-1.518 3.209-1.543 2.139-.05 4.424.063 6.366-.677 1.978-.753 3.896-.941 5.936-1.204 2.421-.327 5.384.802 7.153-2.108.172-.288.923-.176 1.391-.288.651-.151 1.301-.34 1.953-.502 1.794-.452 3.564-1.029 5.371-1.305 1.671-.25 2.777.677 2.569 2.371-.234 1.832-.861 3.663-1.598 5.37a78.205 78.205 0 0 1-3.847 7.752c-1.623 2.848-3.43 5.583-5.236 8.305-.48.727-1.389 1.179-1.844 1.92-2.729 4.478-6.526 8.028-10.165 11.578-5.604 5.482-11.122 11.04-15.768 17.35-2.04 2.76-4.572 4.73-7.067 6.85-2.557 2.17-5.101 4.264-7.067 7.112-1.709 2.472-3.996 4.529-6.049 6.762-.184.213-.502.276-.748.439-1.205.79-2.435 1.568-3.627 2.409-1.438 1.003-2.852 2.057-4.265 3.098-.541.402-1.168.753-1.61 1.255-1.635 1.844-3.012 3.989-4.868 5.557-3.023 2.559-6.01 5.093-8.124 8.543-.246.402-.725.678-1.131.954-3.994 2.672-7.815 5.519-10.913 9.308-.737.903-1.783 1.568-2.693 2.321-2.2 1.819-4.56 3.487-6.612 5.482-3.958 3.864-7.719 7.928-11.603 11.867-2.507 2.534-5.136 4.93-7.631 7.477-3.528 3.6-6.86 7.402-11.395 9.81-1.021.54-2.434 1.393-2.594 2.308-.541 3.024-2.667 3.802-4.953 5.006-1.893.991-3.319 3.011-4.806 4.704-1.499 1.694-2.372 4.002-4.818 4.717-.381.113-.59.765-.959 1.079-1.573 1.33-3.171 2.622-4.768 3.914-.615.489-1.316.878-1.906 1.392-3.933 3.438-7.276 7.465-11.541 10.576-3.306 2.421-6.33 5.407-8.96 8.593-2.458 2.998-5.433 5.106-8.567 7.138-1.548 1.004-2.753 2.221-3.306 4.052-.664 2.183-2.236 3.375-4.251 4.24-1.303.565-2.558 1.393-3.652 2.321-3.147 2.672-6.181 5.482-9.291 8.204-3.343 2.923-7.165 5.269-9.931 8.857a4.367 4.367 0 0 1-.603.665c-5.519 4.654-10.472 9.923-15.512 15.104-3.994 4.115-8.382 7.841-12.586 11.755-1.72 1.593-3.515 3.136-5.1 4.867-1.524 1.681-2.766 3.638-4.265 5.344-2.827 3.199-5.335 6.561-7.166 10.525-1.008 2.196-1.512 4.278-1.303 6.612.307 3.487.307 7.138 2.827 9.885 1.291 1.405 2.864 3.099 4.548 3.437 3.023.603 6.231.377 9.366.339 1.659-.025 3.195-.514 4.682-1.48 3.442-2.246 6.76-4.742 10.767-5.984 2.262-.703 3.958-2.635 6.035-3.55 3.675-1.619 7.35-3.086 10.779-5.282 2.225-1.43 4.56-2.609 6.551-4.441 2.385-2.182 4.966-4.152 7.547-6.096.651-.477 1.635-.49 2.471-.691 1.401-.338 2.839-.564 4.203-1.041 1.844-.652 3.627-1.48 5.434-2.258.897-.389 1.855-.702 2.617-1.292 2.741-2.12 5.359-4.202 8.689-5.633 5.113-2.182 9.796-5.432 14.553-8.405 2.827-1.769 5.629-3.65 8.124-5.858 1.487-1.317 2.483-2.998 4.536-3.864 2.999-1.267 5.495-3.826 9.121-3.387.332.038.699-.314 1.068-.439 2.04-.678 4.056-1.455 6.133-1.982 3.319-.828 6.27-2.171 8.494-4.943.344-.439.921-.903 1.425-.953 3.011-.276 4.99-2.484 7.399-3.776-.836-2.71.221-4.567 2.581-4.818.983-.113 1.991-.012 2.925-.251 1.193-.301 2.36-.765 3.479-1.304.786-.389 1.438-1.041 2.187-1.506 3.38-2.107 7.301-3.148 10.448-5.82 2.237-1.895 4.879-3.275 7.411-4.768 6.6-3.888 13.239-7.69 19.839-11.566 1.684-.991 3.331-2.057 4.88-3.236 1.081-.816 1.989-1.882 2.985-2.861 2.864.816 5.002-.338 6.711-2.433 2.851 1.593 3.799 1.317 5.213-1.431.319-.627.551-1.292.846-1.919 1.021-2.12 2.483-3.099 4.696-2.597 1.425.326 2.471.113 3.479-.84.996-.929 2.434-.439 3.577-1.694 1.696-1.869 3.821-3.726 6.857-3.111.553.113 1.487-.176 1.807-.615 2.31-3.224 5.445-4.39 9.218-4.127 1.426.1 2.692-.477 3.171-1.719.664-1.731 1.906-1.994 3.406-2.333 1.684-.389 3.478-.815 4.879-1.769 2.434-1.643 4.659-3.625 6.834-5.632.811-.753 1.498-1.042 2.568-1.042 2.507.013 5.188-.639 6.687-2.471 1.143-1.405 2.162-1.719 3.612-1.894.652-.076 1.303-.301 1.893-.59 1.033-.489 2.016-1.066 3.245-1.731.381-.74.897-1.744 1.487-2.873 1.082.627 1.882 1.104 2.521 1.48 1.18-.602 2.113-1.129 3.084-1.568 1.696-.765 3.701-1.129 5.065-2.295 3.405-2.898 7.461-3.237 11.517-3.802.749-.1 1.486-.338 2.235-.501 2.397-.54 4.401-1.945 6.588-2.961 4.425-2.045 8.678-4.642 13.594-5.47.381-.075.8-.175 1.095-.401 2.262-1.794 5.089-1.857 7.67-2.659 1.082-.327 2.089-.891 3.085-1.431 1.622-.89 2.727-2.847 4.977-2.521.356.063.872-.075 1.106-.326 1.868-2.007 4.278-2.233 6.81-2.672 4.179-.728 8.002-2.672 11.603-4.981.455-.288 1.106-.276 1.671-.376.947-.176 1.99-.138 2.838-.539 2.717-1.28 6.049-.916 8.347-3.275.197-.2.541-.238.824-.313 6.133-1.706 12.265-3.425 18.41-5.106 2.717-.74 5.408-1.794 8.174-2.02 4.044-.326 7.818-1.254 11.665-2.584 3.835-1.33 8.013-1.681 12.044-2.396 1.598-.289 2.507.564 3.147 2.057.774 1.819.013 3.387-.663 4.868-1.155 2.509-2.607 4.88-3.86 7.351-.676 1.317-1.045 2.835-1.856 4.052-1.537 2.283-3.33 4.391-4.965 6.611-.823 1.117-1.524 2.321-2.31 3.463-1.279 1.881-2.202 4.315-3.935 5.507-4.363 2.998-7.067 7.727-11.467 10.65-1.733 1.155-2.864 3.237-4.388 4.767-2.79 2.811-5.654 5.545-8.505 8.293-.922.878-1.929 1.668-2.814 2.584-2.655 2.76-5.248 5.595-7.915 8.342-.467.49-1.194.69-1.734 1.117-1.549 1.204-3.133 2.383-4.572 3.713-2.667 2.459-5.04 5.319-7.928 7.464-3.97 2.936-7.829 5.921-10.926 9.835-.307.377-.676.904-1.081.979-1.832.314-2.706 1.894-3.959 2.961-2.557 2.17-5.1 4.353-7.632 6.548-.664.577-1.255 1.242-1.894 1.857-.786.752-1.572 1.518-2.395 2.22-1.279 1.092-2.668 2.032-3.847 3.199-2.348 2.346-4.463 4.93-6.897 7.176-4.695 4.328-9.55 8.48-14.319 12.72-1.266 1.129-3.097 1.782-3.208 3.939-.024.314-.416.741-.736.891-3.503 1.631-5.336 4.893-7.548 7.803-.528.69-1.241 1.455-2.003 1.681-2.483.715-4.278 2.384-5.961 4.165-4.413 4.667-8.911 9.271-12.98 14.238-1.241 1.506-2.556 2.886-3.884 4.291-1.819 1.944-3.465 4.064-5.198 6.097-1.143 1.342-2.189 2.835-3.516 3.964-1.881 1.593-3.085 3.537-3.896 5.833-.566 1.593-1.131 3.212-1.942 4.679-1.07 1.932-1.204 3.952-1.13 6.06.025.903.196 1.806.097 2.697-.626 5.745 5.483 11.516 10.166 12.971 2.864.878 5.985 1.117 8.996 1.192 3.601.088 7.228-.251 10.842-.477 2.237-.15 4.473-.614 6.709-.627 5.47-.05 10.681-1.292 15.807-3.086 1.942-.677 3.86-1.405 5.815-2.07 1.29-.439 2.74-.539 3.871-1.229 2.704-1.656 5.334-3.3 8.678-3.061.54.037 1.092-.414 1.645-.628 1.647-.652 3.257-1.455 4.954-1.906 3.589-.954 7.142-1.907 10.35-3.877.332-.2.736-.426 1.093-.414 1.364.063 2.213-.752 2.901-1.743.959-1.38 2.311-1.895 3.835-1.794 3.061.2 5.396-1.016 7.989-2.71 2.483-1.631 5.407-2.71 8.087-4.19 2.925-1.606 6.501-2.509 10.127-2.384 1.217.051 2.583-.727 3.677-1.442 2.15-1.393 4.202-2.911 6.808-3.375.614-.113 1.536-.451 1.696-.916.762-2.157 2.839-2.233 4.388-2.747 1.708-.564 3.688-.351 5.544-.401 1.426-.038 2.58-.452 3.784-1.33 3.196-2.308 6.576-4.253 10.718-4.165 1.045.025 2.152-.238 3.136-.602 1.253-.464 2.421-1.192 3.65-1.769 1.598-.74 3.749-1.029 4.683-2.271 1.118-1.455 2.469-1.869 3.858-2.446 1.88-.778 3.811-1.493 5.778-2.007 1.168-.301 2.434-.163 4.24-.251-.491 1.505-.689 2.547-1.156 3.437-1.057 2.058-2.752 3.525-4.584 4.918-3.208 2.421-6.354 4.955-9.365 7.615-2.569 2.283-4.942 4.804-7.388 7.238a1.2 1.2 0 0 0-.246.54c-.258 1.392-1.314 1.731-2.433 2.27-3.208 1.556-6.822 2.647-8.346 6.498-.123.327-.529.59-.848.791-1.918 1.204-3.811 2.459-5.777 3.562-.922.515-1.99 1.029-2.998 1.054-1.536.038-2.212.74-2.888 2.02-.824 1.568-1.808 3.6-3.713 3.525-3.331-.125-5.15 2.396-7.178 4.077-2.901 2.409-5.149 5.595-8.959 6.787-.578.176-.973.941-1.476 1.418-1.34 1.279-2.519 2.91-4.104 3.738-2.151 1.129-3.886 2.647-5.619 4.265-.626.577-1.413 1.28-2.163 1.343-2.212.175-3.489 1.593-4.767 3.148a27.104 27.104 0 0 1-2.226 2.384c-1.856 1.769-3.847 3.199-6.256 4.29-3.565 1.606-6.404 4.416-8.899 7.527-.971 1.204-2.151 2.547-3.503 3.061-3.552 1.342-5.998 4.14-8.677 6.511-3.762 3.312-7.019 7.213-10.522 10.839-1.241 1.279-2.593 2.433-3.81 3.738a399.948 399.948 0 0 0-7.582 8.292c-.369.414-.604 1.004-.726 1.543-.197.866-.222 1.757-.295 2.371-1.402 1.117-2.631 1.97-3.688 2.999-.516.514-.908 1.329-1.019 2.057-.774 5.168-.43 10.061 2.631 14.627 1.72 2.547 3.772 4.592 6.144 6.361.639.489 1.635.664 2.47.664 2.729.025 5.471-.05 8.2-.15 6.071-.213 12.105-.69 18.054-2.183 5.482-1.367 11.062-2.321 16.605-3.425 2.483-.502 5.004-.853 7.474-1.442.873-.214 1.732-.853 2.432-1.481 1.254-1.116 2.36-2.408 3.577-3.575 1.254-1.204 2.643-1.606 4.29-.702 1.634.89 3.122.526 4.658-.527.996-.678 2.335-1.292 3.491-1.23 2.286.138 4.129-.865 6.071-1.731.541-.238 1.143-.314 1.672-.577 1.217-.602 2.397-1.28 3.601-1.919.922-.502 1.796-1.192 2.779-1.456 3.331-.878 6.611-1.756 9.242-4.215.319-.301.872-.451 1.327-.489 1.696-.138 3.184-.627 4.425-1.97.455-.489 1.426-.664 2.163-.677 1.967-.038 3.921.201 5.408-1.618.369-.464 1.266-.464 1.918-.678 1.647-.539 3.33-.991 4.928-1.656 2.139-.89 3.922-2.496 6.307-2.998 1.389-.301 2.887-.991 3.87-1.994 1.745-1.782 3.638-2.07 5.912-1.819 1.352.15 2.507-.164 3.478-1.606 1.144-1.694 2.778-2.986 5.15-2.923.984.025 2.005-.69 2.988-1.117.812-.351 1.572-.803 2.384-1.154 2.433-1.054 5.42-.439 7.509-2.559 3.602.452 6.588-.941 9.292-3.211a.86.86 0 0 1 .271-.113c3.687-.803 6.404-3.162 9.072-5.683 1.13-1.067 2.421-1.92 4.08-2.334 3.774-.94 7.485-2.182 11.21-3.362 2.876-.915 5.542-2.408 8.319-3.562 3.946-1.631 8.126-2.146 12.059-3.663 3.577-1.38 7.238-2.535 10.852-3.839 2.384-.866 4.721-1.869 7.117-2.71 2.385-.828 4.917-1.305 7.203-2.333 3.835-1.731 7.756-2.622 11.934-2.484a5.08 5.08 0 0 0 1.732-.251c3.147-1.016 6.27-2.07 9.404-3.124 2.126-.715 4.227-1.555 6.402-2.132 3.479-.929 7.02-1.644 10.51-2.534 2.975-.753 5.482 1.179 5.372 4.29-.037.79-.05 1.693-.418 2.333a489.677 489.677 0 0 1-7.363 12.545c-1.868 3.086-4.523 5.796-4.621 9.71-.049 1.957-.393 3.651-1.745 5.131-.394.439-.357 1.279-.529 1.994 1.033.477 1.916.879 2.789 1.318.418.213 1.144.451 1.181.752.271 2.346 2.729 2.986 3.343 5.131 2.016-.74 3.822-1.417 5.776-2.132.639.552 1.328 1.141 1.808 1.555.442-1.367.479-2.998 1.303-3.763 1.61-1.518 2.138-3.438 2.851-5.332.234-.627.406-1.279.602-1.919 1.021-.126 1.881-.239 2.692-.352 1.008-4.478 1.893-5.03 5.716-3.625.098.778.184 1.593.294 2.484.701-.238 1.142-.402 1.769-.615-1.807-2.948.481-4.792 1.882-6.498 1.217-1.48 3.318-1.556 5.002.088.701-1.104 1.081-2.283 1.88-2.848 2.63-1.869 4.142-4.453 5.088-7.439.774-2.459 1.845-4.98 1.882-7.489.061-4.266-.271-8.606-1.057-12.796-.688-3.651-1.131-7.276-1.045-10.977.049-1.957-.873-3.437-2.188-4.704-1.598-1.543-3.454-2.572-5.641-3.049-.91-.201-1.919-.602-2.558-1.242-2.274-2.27-5.001-2.998-8.049-2.847-1.856.087-3.712.426-5.568.414-2.532-.026-5.065-.264-7.585-.44-2.114-.138-4.178.276-6.353-.075-2.249-.364-4.585.101-6.748 1.468-2.175 1.38-4.695 2.208-7.092 3.224-.516.213-1.155.176-1.733.251-1.352.163-2.704.426-4.068.452-3.024.05-5.703 1.58-8.653 2.12-3.896.715-8.199.765-11.604 3.55-.528.426-1.512.313-2.286.401-2.778.339-5.666.264-8.309 1.067-4.584 1.392-9.021 3.311-13.507 5.018-2.213.84-4.339 2.032-6.613 2.483-4.806.966-8.983 3.35-13.31 5.432-1.499.715-2.913 1.481-4.72 1.418-1.044-.038-2.126.803-3.195 1.242-.615.251-1.218.552-1.857.74-3.442 1.041-7.117 1.079-10.411 2.898-2.815 1.555-5.457 3.588-8.763 4.127-.529.075-1.107.552-1.426 1.016-1.02 1.481-2.569 1.706-4.093 2.058-.651.15-1.401.2-1.954.539-3.356 2.058-6.723 4.14-8.075 8.581-2.655 0-5.286.113-7.916-.038-2.999-.175-5.85-.088-8.37 1.907-.676.539-1.573.803-2.372 1.179-2.827 1.317-5.654 2.647-8.505 3.927-2.201.978-3.969 2.722-6.538 3.161-2.471.414-5.039 1.23-7.153 2.547-2.004 1.254-4.119 2.095-6.245 2.433-5.703.891-10.632 3.739-15.352 6.587-4.363 2.621-9.255 3.738-13.557 6.297a3.441 3.441 0 0 1-1.977.452c-1.844-.176-3.394.639-5.066 1.179-1.868.615-3.761 1.769-5.875.891-.639-2.146.985-2.999 2.067-4.015 1.143-1.079 2.593-1.806 3.797-2.822 2.754-2.321 6.12-4.353 4.633-8.97-.037-.1-.049-.226 0-.301.516-.778.885-1.869 1.61-2.271 1.352-.74 1.155 1.117 1.967 1.669.528-.402 1.07-.803 1.599-1.205 3.171-2.383 2.765-2.458 6.747-3.487.197-.05.392-.088.565-.176 2.421-1.104 4.707-2.383 6.452-4.516.418-.514 1.022-.878 1.55-1.292 1.463-1.129 2.938-2.245 4.413-3.362.467-.339.885-.778 1.401-.991 2.642-1.116 4.251-2.961 4.645-5.946.122-.903.665-2.095 1.365-2.484 1.758-.979 3.551-2.17 5.726-1.882 1.193.163 1.93-.288 2.741-1.204 1.832-2.083 3.898-3.864 6.59-4.817 1.057-.377 1.917-1.318 2.851-2.033.369-.288.663-.69 1.044-.966 1.671-1.179 3.429-2.233 5.027-3.5 3.773-2.985 7.535-5.996 11.173-9.132 1.635-1.405 3.798-2.397 4.265-4.956.086-.464 1.007-.815 1.597-1.129.688-.364 1.487-.552 2.138-.966 3.565-2.295 7.105-4.641 10.644-6.987.308-.201.812-.489.812-.74.073-2.647 2.25-3.563 3.897-4.893-.049-.878-.149-1.681-.136-2.471.049-2.522.677-3.187 3.209-3.136 1.253.025 2.494.363 3.747.577 1.918.313 3.48.363 4.734-1.819 1.339-2.359 3.378-4.303 5.087-6.436.233-.301.456-.665.53-1.041.295-1.506 1.412-2.12 2.616-2.597 2.225-.891 4.094-2.271 5.68-4.102.971-1.117 1.917-2.145 2.458-3.626.381-1.053 1.425-1.831 2.113-2.785 2.237-3.098 4.463-6.184 5.065-10.173.148-.966.946-1.945 1.684-2.673 2.053-2.044 3.858-4.202 4.632-7.113.947-3.575.75-7.15-.11-10.65-.258-1.016-1.328-1.869-2.127-2.685-.884-.916-2.101-1.543-2.826-2.559-1.955-2.722-4.843-3.538-7.768-4.29-1.18-.314-2.348-.414-3.565.426-.7.489-1.905.188-2.876.289-.86.088-1.732.163-2.567.401-1.205.339-2.361 1.016-3.578 1.192-3.442.477-6.809 1.004-9.268 3.989-2.323-1.932-4.289-1.355-6.305.176-1.082.815-2.395 1.355-3.661 1.869-2.422.979-4.918 1.781-7.315 2.81-1.143.489-2.138 1.932-3.195 1.932-4.388-.038-7.73 3.55-12.106 3.375-.405-.013-.825.489-1.267.69-3.282 1.53-6.562 3.061-9.844 4.578-.442.201-.934.515-1.376.477-3.036-.251-5.656 1.393-8.507 1.957-2.962.59-5.691 1.882-8.063 3.964-1.081.954-2.445 1.757-3.821 2.171-3.282.991-6.637 1.668-9.956 2.546-1.315.352-2.655.74-3.872 1.343-3.699 1.819-7.399 3.562-11.381 4.691-2.434.69-4.793 1.681-7.141 2.647-2.163.904-4.191 2.233-6.416 2.848-2.753.765-5.297 1.669-7.682 3.375-4.351 3.111-9.353 4.955-14.356 6.686-1.474.514-3.037.715-4.487 1.267-1.61.615-3.319 1.217-4.646 2.271-1.008.803-1.88 1.342-3.134 1.229-1.426-.125-2.68.213-3.86 1.117a21.544 21.544 0 0 1-3.515 2.157c-.75.364-1.67.603-2.481.527-2.717-.226-5.151.439-7.561 1.731-2.409 1.293-4.977 2.509-7.817 2.196-.86-.088-2.002-.665-2.371-1.368-.602-1.129-.05-2.421.958-3.199 1.008-.777 2.102-1.543 3.282-1.982 1.561-.589 2.667-1.543 3.539-2.96 1.672-2.71 3.628-5.307 6.196-7.076 4.425-3.061 8.358-6.485 11.05-11.24.762-1.342 1.166-3.011 3.157-2.96 3.221-2.647 6.453-5.257 9.366-8.28 1.549-1.593 2.999-3.287 5.027-4.441 1.364-.765 2.557-2.245 3.257-3.688.922-1.882 2.14-2.86 4.094-3.387 2.729-.728 5.063-2.196 6.391-4.893a86.716 86.716 0 0 0 2.213-4.867c.836-1.995 1.881-3.563 4.388-2.973 1.02.238 1.892-.239 2.125-1.167.516-2.045 2.042-2.772 3.713-3.375 3.921-1.405 7.484-3.324 10.065-6.824 1.033-1.405 2.202-2.76 3.529-3.876 1.782-1.518 3.661-2.999 5.702-4.09 2.9-1.556 4.61-3.902 5.557-6.988.135-.451.293-1.003.625-1.267 2.704-2.095 5.457-4.139 8.149-6.159.381-1.23.787-2.497 1.217-3.877 1.057.364 1.77.615 2.433.841 1.992-2.22 3.749-4.504 5.839-6.423 3.023-2.785 6.073-5.52 8.15-9.17.037-.076.184-.101.233-.176 1.598-2.246 4.448-2.936 6.095-5.219 1.549-2.145 3.591-3.901 5.238-5.971.639-.803.835-1.995 1.192-3.023.184-.527.269-1.092.49-1.957.762.639 1.279 1.078 1.868 1.58.431-.69.899-1.154 1.022-1.706.332-1.543 1.215-2.446 2.371-3.487 1.536-1.405 3.406-2.773 3.91-5.094.528-2.433 1.941-4.227 3.97-5.507 2.691-1.693 4.486-4.165 5.887-6.95.799-1.58 1.449-3.274 2.014-4.967 1.647-4.918 3.282-9.848 4.831-14.803.565-1.794 1.303-3.689 1.241-5.508-.27-7.501-2.544-14.088-9.12-18.416-1.475-.966-2.753-2.258-4.252-3.173-1.586-.966-3.27-2.083-5.027-2.384-4.241-.728-8.529-1.129-12.819-1.443-1.819-.138-3.687.251-5.518.477-1.242.15-2.46.452-3.689.665-2.016.339-4.178.288-5.997 1.079-1.733.752-3.392 1.33-5.26 1.58-2.667.352-5.434.151-7.966 1.581-1.327.753-2.987.89-4.511 1.267-3.957.991-8.136 1.355-11.443 4.215-.344.301-.859.477-1.326.54-2.999.439-6.01.803-9.021 1.229-2.2.314-4.388.502-6.109 2.384-.688.752-2.066.928-3.16 1.179-1.217.276-2.543.15-3.711.539-2.286.778-4.487 1.807-6.736 2.71-3.356 1.355-6.649 2.91-10.09 3.952-4.72 1.43-9.133 3.475-13.546 5.632-1.61.791-3.49 1.731-5.137 1.568-3.049-.301-5.358 1.719-8.16 1.945-2.606 2.597-6.146 3.299-9.342 4.679-8.075 3.488-16.408 6.385-24.041 10.851-1.548.904-3.429.54-4.683 1.431-2.642 1.869-5.581 2.785-8.518 3.851-3.417 1.229-6.699 2.797-10.104 4.064-1.573.59-2.655 1.569-3.589 2.861.123.602.246 1.091.308 1.58.086.602.185 1.205.161 1.794-.062 1.393-.812 2.108-2.077 1.782-.787-.214-1.882-.678-2.128-1.318-.578-1.53-1.707-1.279-2.666-1.078-2.987.627-5.827 1.63-8.285 3.612-1.365 1.104-2.778 2.497-4.364 2.836-2.04.439-3.501 1.041-3.87 3.199-1.733.1-3.355-.101-4.769.363-1.745.577-3.344 1.631-4.942 2.597-1.328.803-2.483 2.296-3.86 2.509-1.659.264-2.678.966-3.132 1.681-1.906.577-3.282.929-4.61 1.418-1.548.577-3.048 1.292-4.572 1.932-1.253.514-2.594.878-3.787 1.53-3.773 2.07-7.473 4.316-11.27 6.36-4.413 2.371-8.813 4.78-13.348 6.85-2.901 1.33-5.667 2.634-7.473 5.457-.615.953-1.524 1.618-2.766 1.079-1.413-.615-2.347.138-3.429.966-.971.74-2.225 1.079-3.331 1.643-.836.427-1.733.841-2.409 1.468-2.323 2.145-4.375 4.629-7.878 4.83-.701.037-1.365.715-2.053 1.104-6.158 3.462-12.328 6.937-18.498 10.387-1.77.991-3.626 1.857-5.396 2.86-.762.439-1.389 1.129-2.151 1.568-6.219 3.576-12.426 7.176-18.706 10.651Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={194.482}
        x2={520.324}
        y1={-93.705}
        y2={515.58}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F10CB" />
        <stop offset={1} stopColor="#7DB4FE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={201.165}
        x2={562.364}
        y1={-114.864}
        y2={517.716}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F10CB" />
        <stop offset={1} stopColor="#7DB4FE" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h735v419H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
